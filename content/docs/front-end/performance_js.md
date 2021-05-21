---
title: "パフォーマンス系API(Javascript)"
weight: 1
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: true
---

# パフォーマンス系API(Javascript)

Javascriptのパフォーマンスに関するAPIを述べる。

# Web Workers

Web Workersは、Webアプリケーションでバックグラウンドスクリプトを生成するためのAPIである。

Web Workersは独立したスレッドで動作するので、UIや他のスクリプトによるユーザインタラクションの処理をブロックする事なく処理を行える。

Web Workersを作成するには、Workerオブジェクトを利用して作成する。