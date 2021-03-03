---
title: "クイズ問題を書いたローカルのcsvファイルから自動でslackに問題をPOSTするシステムを作ってみた"
date: 2021-02-04T21:04:55+09:00
BookToC: false
draft: false
---

# はじめに

資格勉強をすることがあるのだが、その際に自作した問題を自動で出題し答えられる様なシステムがあれば自身のアウトプットにもなるし、抜けている箇所の確認にもなるので欲しいなと思っていた。

なのでその様なシステムを今回作ってみた。

# 動作環境

- Mac OS 10.15.5
- Python 3.7.3

# システム全体図（アーキテクチャ図）

以下の通り。大まかに処理は3つに分かれる。システムの全体図を以下に載せる。
- ローカルにクイズ問題及びその正解数を列挙したcsvファイルを置き、pythonのバッチファイルがそれを読み込んでslackに投稿させる動作を行う。
- slack側からも問題に正解したか間違えたかのデータを外部のDB（ここではAWSのDynamoDBとした）に記録・格納させる。
- 正解不正解データを格納した外部のDBからデータを取り出し、csvファイルに正解不正解のデータを記録・更新する様なpythonバッチファイルを作成する。
そして、最終的にはpythonのバッチファイルをcrontabでスケジューリング実行することで、処理を自動化させる。

![sketchboard](/img/blog/sketchboard.png)


# 作成手順

## csvからクイズ問題を抜き出してslackにPOSTする

### 0. クイズ問題を投稿するためのSlack Appを作る

まず、Slackの機構を整える。
細かい手順としては
- [Slack API](https://api.slack.com)のページに行く

![slack_api](/img/blog/slack_api.png)


- Slack Appを作る

Your Apps > Create New Appsと入力
App名を入力するとSlack Appが作られる

![app](/img/blog/create_new_app.png)

- Slack Appをクイズ問題を出したいSlackワークスペースにインストールする

作ったアプリ名をクリックし、Basic Information>Install your Appをクリックしてワークスペースにインストールする

- Slackワークスペースにクイズ問題を出したいチャンネルを作る

クイズ問題を出したいチャンネルがない場合は、slackから作成する。

![チャンネル追加](/img/blog/slack_add_channel.png)

- Slack Appに、テキストを投稿したら指定したチャンネルにPOSTする様なAPIを設けさせる

作成したSlack AppにAPIを設けさせ、外部からメッセージを投稿できる様にする。方法については、以下の記事を参考にしてSlack APIを作成した。

- [Slack APIを使用してメッセージを送信する - Qiita](https://qiita.com/kou_pg_0131/items/56dd81f2f4716ca292ef)


-------



### 1. クイズ問題を書いたcsvファイルを用意する

形式はなんでも良いが、私は以下の様な形式にした

```
問題番号,問題文,答え,正解数,不正解数
```

例えば、私が自作したAWSのクイズ問題のcsvは以下の通り。

```
1,リージョンとは何か？,AWSがサービスを提供している拠点(国と地域)のこと,1,0
2,AWSがサービスを提供している拠点(国と地域)のことを何という？,リージョン,9,3
・・・
```

なお、ここに書いた定義が後のpythonコードの仕様にも関わるので注意する。


### 2. csvから問題を１問取得するpythonコードを作成する

コードは[こちら](https://github.com/WAT36/csv_quiz_bot/blob/wat-dev/random_quiz.py)を参照。

設定ファイルは以下の通り。


```
[Filename]
QUIZFILE=(csvファイル名)

[Slack]
SLACK_API_URL=(Slack API)
SLACK_API_TOKEN=(Slackトークン)
SLACK_CHANNEL=(問題を投稿するSlackチャンネル名)
SLACK_ANSWER_CHANNEL=(答えを投稿するSlackチャンネル名)
THINKING_TIME=10
WORST_GROUP_NUM=5

[AWS]
RESULT_GET_API=(DynamoDBから正解不正解データを取得するためのAPI GatewayのURL)
```

### 3. テストとして一回実行する

ローカルからpythonバッチファイルを実行してみる。

```
$ python random_quiz.py
```

うまくslackにPOSTできていればOK。

![slack_POST](/img/blog/slackpost_result.png)


-------------


## slackから問題に対する解答結果を記録する

まずは、正解不正解データを記録するDBを作成する。

### 1. AWSでDynamoDBを作る

正解不正解データを格納しておくためのDBとして、今回はAWS DynamoDBを利用した。

DynamoDBでのテーブルの作り方は[こちら](https://wat36.github.io/pages/posts/aws_create_dynamo_table/)を参照。

テーブルの項目名は

- 「time」（格納時間、キー）
- 「quiz_id」（問題ID）
- 「result」（正解不正解データ、正解なら1、不正解なら0）

とした。

例の図を以下に示す。

![dynamodb](/img/blog/quiz_result_dynamodb.png)

### 2. DynamoDBに正解不正解データを格納するためのAPI Gatewayを作る

次に、このDynamoDBにデータを格納するためのコードをAWS Lambdaで作り、そしてそのLambdaコードに外部からアクセスするためのAPIをAPI Gatewayで設定する。

まず、Lambdaのコードだが、以下の様に設定する。Lambdaでのコードの設定方法は[こちら](https://wat36.github.io/pages/posts/aws_create_lambda/)を参照。

```python
#
# AWS Lambda
# Slackから問題の正解不正解をDynamoDBに登録するコード
#
import boto3
import datetime
import re

dynamodb = boto3.resource('dynamodb')
table    = dynamodb.Table('(テーブル名)')

def lambda_handler(event, context):
    try:
        #slackから /register 問題ID 正解不正解フラグ(0なら不正解,それ以外なら正解)と来る
        #slackの入力(問題ID、正解不正解フラグ)からデータを取り出す
        #slackからだとスペースが'+'になる？
        text=event['text']
        quiz_id,flag=0,0
        if('+' in text):
            text=re.sub(r'\++','+',text)
            text=list(text.split('+'))
            quiz_id,flag=text[0],text[1]
        else:
            #'+'無い場合はスペース区切り
            quiz_id,flag=text.split()
            
        
        #現在時刻取得
        dt_now = str(datetime.datetime.now())
        
        # quiz_answerへのPut処理実行
        table.put_item(
            Item = {
                "time": dt_now, 
                "quiz_id": quiz_id, 
                "result": flag
            }
        )
        
        res="Question["+str(quiz_id)+"]:"+ ("Correct!" if flag != "0" else "Incorrect")
        return res
            
    except Exception as e:
        return str(text)+str(e)
```

次に、このLambdaコードにアクセスするためのAPIをAPI Gatewayで設定する。設定方法は[こちら](https://wat36.github.io/pages/posts/aws_create_api_gateway/)を参照。

また、API Gateway内でも、slackから受け取ったメッセージをLambdaに渡したり、Lambdaの処理結果をslack側に返す設定を行わなければならない。そのための設定は以下の記事を参考にし行った。

- [API Gateway + Lambda + DynamoDB](https://qiita.com/leomaro7/items/314a80b6d91f9e6b4060)
- [AWS API GatewayでContent-Type:application/x-www-form-urlencoded のPOSTデータを受け取り JSONに変換する](https://qiita.com/durosasaki/items/83af014aa85a0448770e)
- [AWSのLambdaとDynamoDBとAPIGatewayの連携](https://qiita.com/tentatsu/items/c45bcc4062f1a6d4cf2a)

### 3. Slack Appから問題ID・正解不正解のデータを受け取ってAWS APIに送り出す様なスラッシュコマンドを作る

Slack Appには特定のコマンドを作成することができ、それらは基本スラッシュから始まるのでスラッシュコマンドとも呼ばれている。

スラッシュコマンドの作成方法は[こちら](https://wat36.github.io/pages/posts/slack_request/)を参照。

今回は、スラッシュコマンドの引数に問題ID,正解不正解データ(正解なら1、不正解なら0)を取らせてAWSのAPIにWebリクエストを送る様なコマンドを作成する。

今回はコマンド名を"register"として、以下の様に作成した。

![register](/img/blog/slackregistercomannd.png)


### 4. テストとして一回実行する

例えば問題1に正解したということを実際にこのスラッシュコマンドから
送ってみる。

![slash](/img/blog/typeslashcommand.png)

その結果、slackでは成功と出た。

![success](/img/blog/registersuccess.png)

実際にAWS DynamoDBを見ると、入力したデータが格納されている。

![dynamo_result](/img/blog/dynamoresult.png)


-------


## ユーザ側から解答結果を取ってきてcsvに反映させる

### 1. API GatewayでDynamoDBから正解不正解データを取ってくるAPIを作成する

DynamoDBに入っているデータを全て取り出してくるLambda及びAPI Gatewayを作成する。

Lambdaのコードは以下の通り。

```python
#
# AWS Lambda
# 正解不正解データを取ってきてcsvに正解/不正解数を登録する
#
import boto3
import json

dynamodb = boto3.resource('dynamodb')
table    = dynamodb.Table('テーブル名')

def lambda_handler(event, context):
    try:
        #DynamoDB(quiz_result_list)へのscan処理実行
        response = table.scan()
        
        #0件なら処理終了
        if(len(response)==0):
            data = {
                'text' : []
            }
            return data
        
        #scan結果からデータを取り出す
        records=list(response['Items'])
        
        # DynamoDBからレコード削除
        for r in records:
            table.delete_item(Key={'time': r['time']})
        
        data = {
            'text' : records
        }
        return data
    except Exception as e:
        return e
```

### 2. ローカルでAPIにアクセスしDBから正解不正解データを取り、csvに正解不正解データを更新する様なpythonバッチを作成する

先程のAPIにアクセスし正解不正解データを取得し、csvに正解不正解データを更新するpythonバッチを作成する。

pythonコードは[こちら](https://github.com/WAT36/csv_quiz_bot/blob/wat-dev/result_inputter.py)を参照。

という形で自分が作ったクイズ問題を自動で投稿してくれる様な個人用アプリを作成した。

------------


実行結果

最初に、DBには以下の様な形で正解不正解データが格納されている。

![register](/img/blog/registered_data.png)

また、csvで該当問題の正解不正解データは以下の通り。

![beforecsv](/img/blog/before_data.png)

この状態から、pythonバッチを動かしてみる。

![console](/img/blog/console.png)

その結果、csvに正解不正解データが反映された。（正解数が5->6に更新された）

![aftercsv](/img/blog/after_data.png)

なお、DBからは取ってきた正解不正解データは削除される。

![afterdynamo](/img/blog/after_dynamo.png)

--------------

# 自動化設定

一連のバッチについて、crontabを使って自動化させるために以下の様に設定した。

Macの場合はcrontabを使って以下の様な設定をする


```
0 */3 * * * cd (Pythonスクリプトがあるフォルダ) 2>&1 && touch error.log && python random_quiz.py 2>&1 1>>error.log
0 */3 * * * cd (Pythonスクリプトがあるフォルダ) 2>&1 && touch error.log && python worst_quiz.py  2>&1 1>>error.log
```

この様に設定すると、指定時間おき(ここでは3時間)に自動で投稿してくれる
（ただし、Macが起動している場合にのみ有効の様である）

----------------

# 今後やりたいこと

という様な形でクイズbotを作成してみたが、使っているうちに改善点や追加したい機能が思い浮かんでいるため、以下の様な機能を追加したいと考えている

- 他のAWSサービスを使って組んでみる（DynamoDB->SQSにする、EC2サーバを作って移行するなど）
 - crontabがMacが起動している時にしか有効にならない？様なので、いっその事EC2に移行した方が良いかと考えている
- csvから一番正解率が悪い問題を抜き出してPOSTさせる機能を作る
- 間違えた問題は復習として何日か後にもう一回出す様な機能を作る
- 間違えた問題と類似した分野の問題を出す様な機能を作る
- 現在はDBをAWS DynamoDBにしているが、DockerやFirebase(?私もまだ詳しくないので適用できるかはわからないが)に置き換えてみる


------

以上。自作のプロダクトを書くのは初めてなので、何か抜けあればその都度更新致します。。