---
title: "Dockerイメージとコンテナ"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# Dockerイメージとコンテナ

ウォーターフォール型によるアプリケーション開発の場合、開発に使う環境は開発用の環境、検証(テスト)用の環境、本番(実稼働)用の環境というように複数の環境を用意して開発を行うことが多い。

しかし、環境で利用しているミドルウェアのバージョンなどがそれぞれで違っていたりすると、アプリをデプロイしても環境によっては動かないという場合もある。

<img src="/img/container/docker_01.png" width=75%>

Dockerでは、これらアプリケーションの実行に必要なミドルウェア、ライブラリ、ディレクトリなどといったインフラ環境をひとまとめにし、コンテナとして管理する。

また、コンテナはDockerイメージとしてDocker Hubと呼ばれる共有レポジトリで管理される。欲しいDockerイメージ(コンテナ)があった場合はここから引っ張り出すことができ、またユーザー側で作成したDockerイメージ(コンテナ)をDocker Hubに置くこともできる。


<img src="/img/container/docker_02.png" width=75%>


Dockerイメージを元にして作ったコンテナはDocker上であればどこでも動くので、この技術により、ある環境では動くけどある環境では動かない、という問題を解消できる。

Docker上で動かしているコンテナを別の環境上のDockerに移すには、Dockerイメージの形にして移す。

## Dockerイメージ

コンテナは、元となるDockerイメージから作られる。

Dockerイメージの実体は、先述の通りアプリケーションの実行に必要なファイル群が格納されたディレクトリ類をまとめたものである。

Dockerイメージの作り方については、別章で記載する。

ここではまず、各種Dockerコマンドについてを説明する。

# Dockerイメージ・コンテナに関するコマンド

## Dockerイメージをリモート(Docker Hub)からダウンロードする

Dockerイメージをリモートレポジトリ(Docker Hub)からダウンロードするには、**docker pull**コマンドを利用する。

```
$ docker pull [オプション] (Dockerイメージ名)[:タグ名]
```

このコマンドにより、Dockerイメージをローカルにダウンロードできる。

また、Dockerイメージは同じ名前でも**タグ**を使い分けることによって複数登録することができる。Dockerイメージはバージョンや対応OSなどの関係から、同じ内容のものを複数登録する必要があるが、Dockerイメージ名を同じにして、タグ名にバージョン及び対応OS等の名前を振り分けることによって、Dockerイメージを複数管理することが可能になる。特定のタグのイメージをダウンロードしたいときは、docker pullコマンドの時にタグ名も指定する。

なお、タグ名を省略してdocker pullコマンドを実行した場合は、最新版(latestタグ)のイメージがダウンロードされる。


## ローカルにあるDockerイメージを確認する

取得したローカルにあるDockerイメージを確認したい時は、**docker images**コマンドを使う。

```
$ docker images
```

すると、ローカルにあるDockerイメージが一覧表示される。

```
REPOSITORY                   TAG                 IMAGE ID            CREATED             SIZE
mongo                        latest              xxxxxxxxxxxx        20 months ago       427MB
nginx                        latest              yyyyyyyyyyyy        20 months ago       109MB
ubuntu                       latest              zzzzzzzzzzzz        20 months ago       64.2MB
・・・
```

## ローカルのDockerイメージを削除する

ローカルにあるDockerイメージを削除したいときは、**docker rmi**コマンドを使う。

```
$ docker rmi [オプション] イメージ名 [イメージ名]
```

イメージ名はレポジトリ名またはイメージIDを指定する。複数のイメージを削除したい時は、スペース区切りでイメージ名を複数入力する。

## Dockerイメージをリモート(Docker Hub)にアップロードする

DockerイメージをDocker Hubにアップロードするには、**docker push**コマンドを利用する。

```
$ docker push <Docker Hubイメージ名>/イメージ名[:タグ名]
```

## Dockerイメージからコンテナを作る

Dockerイメージからコンテナを作成するには、**docker create**コマンドを使用する。

```
$ docker create [オプション] イメージ名
```

## コンテナを起動する

停止中のコンテナを起動するには、**docker start**コマンドを使用する。

```
$ docker start [コンテナ名,ID]
```


## Dockerイメージからコンテナを作って起動する

DockerイメージをDocker Hubからダウンロードし(docker pull)、そこからコンテナを作成し(docker create)、コンテナを起動する(docker start)過程を別々に述べたが、これらを一気にやる方法がある。

Dockerイメージをダウンロードしてコンテナを作成し、起動するには、**docker run**コマンドを利用する。

```
$ docker run  (Dockerイメージ名) (実行コマンド)
```

## コンテナを停止する

起動中のコンテナを停止するには、**docker stop**コマンドを使用する。

```
$ docker stop コンテナID
```


## コンテナを削除する

コンテナを削除するには、**docker rm**コマンドを使用する。これにより、停止中のコンテナを削除できる。

```
$ docker rm [オプション] コンテナID
```

## ローカルにあるコンテナを一覧表示する

ローカルにあるコンテナを一覧表示するには、**docker ps**コマンドを使用する。

```
$ docker ps [オプション]
```

以上、Dockerイメージ・コンテナの起動に関する一連のコマンドの動作を図に表すと以下のようになる。

<img src="/img/container/docker_03.png" width=100%>
