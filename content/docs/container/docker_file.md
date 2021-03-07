---
title: "Dockerfile"
date: 2021-03-07T00:21:02+09:00
---

# Dockerfile

Dockerでは、**Dockerfile** という名のファイルを使って、Dockerイメージを作り出すことができる。

Dockerfile内で利用する専用のコマンドがあるので、いくつか述べておく。

## FROM

FROMコマンドは、作成するDockerイメージのベースとなるイメージを記載する。
Dockerfile起動時、このイメージがローカルに無い場合は、自動でDocker hubからプルしてくる。

例

```dockerfile
FROM ubuntu:20.04
```

## RUN

RUNコマンドは、イメージをビルドしてコンテナを作るときに、コンテナの最上位のレイヤーにおいてOSのコマンドを指定して実行するためのコマンドである。
例として、先程のubuntuイメージからコンテナを作った後にpythonをインストールしたい場合、以下の様に記述する。

```dockerfile
RUN apt-get update && apt-get install -y python3
```

## CMD

CMDコマンドは、コンテナが起動した直後に実行するOSのコマンドを記載するためのコマンドである。

RUNコマンドと違う点は、RUNコマンドはイメージからコンテナ作成後に実行するコマンドで、CMDコマンドはコンテナ作成後からコンテナ起動後に実行するコマンドを指定するものである。


## COPY

COPYコマンドはホスト上のファイルやディレクトリをコンテナ内にコピーするコマンドである。

```dockerfile
COPY <ホスト上のファイル又はディレクトリ> <コンテナ上のパス>
```


# DockerfileからDockerイメージをビルドする

では、DockerfileからDockerイメージを作成するにはどうすれば良いか。

Dockerイメージの作成には、**docker build**コマンドを利用する。

```
$ docker build [-t] <イメージ名>[:タグ名] <Dockerfileのあるディレクトリ>
```

イメージにタグ名も明記したい場合は、-tオプションも指定する。
