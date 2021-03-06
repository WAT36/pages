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
