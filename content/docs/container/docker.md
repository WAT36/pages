---
title: "Docker"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# Docker

ウォーターフォール型によるアプリケーション開発の場合、開発に使う環境は開発用の環境、検証(テスト)用の環境、本番(実稼働)用の環境というように複数の環境を用意して開発を行うことが多い。

しかし、環境で利用しているミドルウェアやOSのバージョンなどがそれぞれで違っていたりすると、アプリをデプロイしても環境によっては動かないという場合もある。

<img src="/img/container/docker_01.png" width=75%>

