---
title: "Docker"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# Docker

ウォーターフォール型によるアプリケーション開発の場合、開発に使う環境は開発用の環境、検証(テスト)用の環境、本番(実稼働)用の環境というように複数の環境を用意して開発を行うことが多い。

しかし、環境で利用しているミドルウェアのバージョンなどがそれぞれで違っていたりすると、アプリをデプロイしても環境によっては動かないという場合もある。

<img src="/img/container/docker_01.png" width=75%>

Dockerでは、これらアプリケーションの実行に必要なミドルウェア、ライブラリ、ディレクトリなどといったインフラ環境をひとまとめにし、コンテナとして管理する。

また、コンテナはDockerイメージとしてDocker Hubと呼ばれる共有レポジトリで管理される。欲しいDockerイメージ(コンテナ)があった場合はここから引っ張り出すことができ、またユーザー側で作成したDockerイメージ(コンテナ)をDocker Hubに置くこともできる。


<img src="/img/container/docker_02.png" width=75%>


Dockerイメージを元にして作ったコンテナはDocker上であればどこでも動くので、この技術により、ある環境では動くけどある環境では動かない、という問題を解消できる。

Docker上で動かしているコンテナを別の環境上のDockerに移すには、Dockerイメージの形にして移す。

## Dockerイメージを作る

コンテナは、元となるDockerイメージから作られる。

Dockerイメージの実体は、先述の通りアプリケーションの実行に必要なファイル群が格納されたディレクトリ類をまとめたものである。

では、Dockerイメージはどのようにして作るのか？


Dockerイメージは、Dockerコマンドを使って作成する方法、Dockerfileという設定ファイルを作ってそこから作る方法がある。


## Dockerイメージをリモート(Docker Hub)にアップロードする

DockerイメージをDocker Hubにアップロードするには、**docker image push**コマンドを利用する。

```
$ docker image push <Docker Hubイメージ名>/イメージ名[:タグ名]
```

## Dockerイメージをリモート(Docker Hub)からダウンロードする

Dockerイメージをリモートレポジトリ(Docker Hub)からダウンロードするには、**docker image pull**コマンドを利用する。

```
$ docker image pull [オプション] (Dockerイメージ名)[:タグ名]
```

このコマンドにより、Dockerイメージをローカルにダウンロードできる。

また、Dockerイメージは同じ名前でも**タグ**を使い分けることによって複数登録することができる。Dockerイメージはバージョンや対応OSなどの関係から、同じ内容のものを複数登録する必要があるが、Dockerイメージ名を同じにして、タグ名にバージョン及び対応OS等の名前を振り分けることによって、Dockerイメージを管理することが可能になる。特定のタグのイメージをダウンロードしたいときは、docker image pullコマンドの時にタグ名も指定する。

なお、タグ名を省略してdocker image pullコマンドを実行した場合は、最新版のイメージがダウンロードされる。


## ローカルにあるDockerイメージを確認する

取得したローカルにあるDockerイメージを確認したい時は、**docker image ls**コマンドを使う。

```
$ docker image ls
```

## ローカルのDockerイメージを削除する

ローカルにあるDockerイメージを削除したいときは、**docker image rm**コマンドを使う。

```
$ docker image rm [オプション] イメージ名 [イメージ名]
```

イメージ名はレポジトリ名またはイメージIDを指定する。複数のイメージを削除したい時は、スペース区切りでイメージ名を複数入力する。

また、未使用のDockerイメージを一挙に削除するには、**docker image prune**コマンドを使用する。

```
$ docker image prune [オプション]
```


## Dockerイメージからコンテナを作る

Dockerイメージからコンテナを作成するには、**docker container create**コマンドを使用する。

```
$ docker container create [オプション] イメージ名
```

## コンテナを起動する

停止中のコンテナを起動するには、**docker container start**コマンドを使用する。

```
$ docker container start [コンテナ名,ID]
```


## Dockerイメージからコンテナを作って起動する

Dockerイメージからコンテナを作成し(docker container create)、コンテナを起動する(docker container start)過程を別々に述べたが、この２つを一気にやる方法がある。

Dockerイメージからコンテナを作成し、起動するには、**docker container run**コマンドを利用する。

```
$ docker container run  (Dockerイメージ名) (実行コマンド)
```

## コンテナを停止する

起動中のコンテナを停止するには、**docker container stop**コマンドを使用する。

```
$ docker container stop コンテナID
```


## コンテナを削除する

コンテナを削除するには、**docker container rm**コマンドを使用する。これにより、停止中のコンテナを削除できる。

```
$ docker container rm [オプション] コンテナID
```




