---
title: "API GatewayでLambda関数を呼び出すREST APIを作成する"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
draft: true
---

# API GatewayでのREST API作成

API Gatewayで具体的なREST APIを作成する方法についてを示す。

なお、前述の[API GatewayでのAPI作成方法]({{< relref "/posts/aws_create_api_gateway.md" >}})が終わっていることを前提とする。

## 1. API GatewayのページからREST APIを作成したいAPIをクリックする

![AWSマネジメントコンソール](/img/aws/rest_api_top.png)

クリックするとそのAPIの設定ページに行く。

![AWSマネジメントコンソール](/img/aws/rest_api_config.png)

## 2. リソースを作成する

次にそのAPIに対するリソースを作成する。

リソースとは簡単にいうとAPIのパスの事である。このリソースのAPIを呼び出すには(AWSのパス)/(リソース名)というように使う。

リソースを作成するには「アクション」のタブから「リソースの作成」をクリックする。

![AWSマネジメントコンソール](/img/aws/rest_api_make_resource1.png)

その後リソース名を入力して「リソースの作成」をクリックすると、リソースが作成される。

![AWSマネジメントコンソール](/img/aws/rest_api_make_resource2.png)


## 3.メソッドを作成する

次に、作成したリソースの下に具体的なREST APIとなるメソッドを作成する。

メソッドとはリソースに対するアクションで、GET,POSTといったHTTPのメソッドと対応する。

ちなみに一つのリソースにはそれぞれの種類のメソッドは一つしか作成できない。例えばPOSTメソッドを２つ以上作成したい場合は別に新しいリソースを作成してそこにメソッドを作成する。

「アクション」から「メソッドの作成」を選択し、メソッドの種類を選択すると作成される。

![AWSマネジメントコンソール](/img/aws/rest_api_method.png)


## 4. メソッドとLambda関数を連携する

Lambdaに関数名を入力してOK

## 5. メソッドのテスト

左側の「テスト」でメソッド及びLambda関数が正しく利用できるかを確認する。必要に応じてパラメータを設定する。

![AWSマネジメントコンソール](/img/aws/rest_api_methodtest.png)


## 6. 「統合リクエスト」からパラメータを設定する

APIが実行された時に渡されたデータを整形してJSONデータに置き換える処理、及びLambda関数の実行結果をJSONデータに置き換えてこの「統合リクエスト」で行う。

### 6.1 API->Lambda 上の 「統合リクエスト」を設定する

右上にある「統合リクエスト」をクリックする。

![AWSマネジメントコンソール](/img/aws/rest_api_methodtest.png)

### 6.2 「マッピングテンプレート」で値を設定する

以下のように設定

- 「リクエスト本文のパススルー」：リクエストのContent-Typeヘッダーに一致するテンプレートがない場合
-  Content-Type ： application/x-www-form-urlencoded
-  コード ： 以下の通り

```
## convert HTML POST data or HTTP GET query string to JSON
 
## get the raw post data from the AWS built-in variable and give it a nicer name
#if ($context.httpMethod == "POST")
 #set($rawAPIData = $input.path('$'))
#elseif ($context.httpMethod == "GET")
 #set($rawAPIData = $input.params().querystring)
 #set($rawAPIData = $rawAPIData.toString())
 #set($rawAPIDataLength = $rawAPIData.length() - 1)
 #set($rawAPIData = $rawAPIData.substring(1, $rawAPIDataLength))
 #set($rawAPIData = $rawAPIData.replace(", ", "&"))
#else
 #set($rawAPIData = "")
#end
 
## first we get the number of "&" in the string, this tells us if there is more than one key value pair
#set($countAmpersands = $rawAPIData.length() - $rawAPIData.replace("&", "").length())
 
## if there are no "&" at all then we have only one key value pair.
## we append an ampersand to the string so that we can tokenise it the same way as multiple kv pairs.
## the "empty" kv pair to the right of the ampersand will be ignored anyway.
#if ($countAmpersands == 0)
 #set($rawPostData = $rawAPIData + "&")
#end
 
## now we tokenise using the ampersand(s)
#set($tokenisedAmpersand = $rawAPIData.split("&"))
 
## we set up a variable to hold the valid key value pairs
#set($tokenisedEquals = [])
 
## now we set up a loop to find the valid key value pairs, which must contain only one "="
#foreach( $kvPair in $tokenisedAmpersand )
 #set($countEquals = $kvPair.length() - $kvPair.replace("=", "").length())
 #if ($countEquals == 1)
  #set($kvTokenised = $kvPair.split("="))
  #if ($kvTokenised[0].length() > 0)
   ## we found a valid key value pair. add it to the list.
   #set($devNull = $tokenisedEquals.add($kvPair))
  #end
 #end
#end
 
## next we set up our loop inside the output structure "{" and "}"
{
#foreach( $kvPair in $tokenisedEquals )
  ## finally we output the JSON for this pair and append a comma if this isn't the last pair
  #set($kvTokenised = $kvPair.split("="))
 "$util.urlDecode($kvTokenised[0])" : #if($kvTokenised[1].length() > 0)"$util.urlDecode($kvTokenised[1])"#{else}""#end#if( $foreach.hasNext ),#end
#end
}
```

### 6.3 Lambda->API 上の 「統合レスポンス」を設定する

右下にある「統合レスポンス」をクリックする。

![AWSマネジメントコンソール](/img/aws/rest_api_methodtest.png)


### 6.4 「マッピングテンプレート」で値を設定する

以下のように設定

-  Content-Type ： application/json (既に入力されている場合あり)
-  コード ： 以下の通り

```
{
    "text" : $input.json('$')
}
```

## 7. APIをデプロイする

作成したAPIを公開する。

メソッドの設定画面から「アクション」＞「APIのデプロイ」をクリックする。

![AWSマネジメントコンソール](/img/aws/rest_api_deploy.png)

するとウィンドウが表示されるので、以下のように入力し「デプロイ」ボタンを押す。

- デプロイされるステージ名：新しいステージ
- ステージ名 : 何でも良い

![AWSマネジメントコンソール](/img/aws/rest_api_deploy2.png)


## 8.APIを使用する

その後、APIを呼び出すURLが表示されるので、curlコマンドやPostmanなどのツールを利用し、実際に稼働するかを確認する。

