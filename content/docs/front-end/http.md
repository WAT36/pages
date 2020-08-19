---
title: "HTTP・HTTPS"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---


<h1>HTTP・HTTPS</h1>

HTTP、HTTPSプロトコルについてを述べる。

# HTTPプロトコル

HTTP(Hyper Text Transfer Protocol)とは、WebサーバとクライアントのWebブラウザ間でHTML文書などのテキストメッセージを受け渡すためのプロトコルである。

HTTPの通信は、クライアントからサーバへの**HTTPリクエスト**と、サーバからクライアントへの**HTTPレスポンス**の2つに分けられる。

<img src="/img/front-end/http1.png">


# HTTPSプロトコル

HTTPSプロトコルは、大まかにいうとセキュリティを確保した通信路上でHTTP通信を行うプロトコルである。

HTTP通信を行う前に、セキュリティの確保として、データを暗号化して送受信するプロトコルであるSSLプロトコル(またはTLSプロトコル)を利用しセッションを確定する。その後に、HTTPセッションの接続を行う。

<img src="/img/front-end/https.png">


# HTTPのメッセージ構造

HTTPのメッセージは大きく開始行、ヘッダフィールド、CRLFの改行、メッセージボディの4つに分けられる。

- 開始行 (リクエストライン/ステータスライン)
- ヘッダフィールド(０行以上、以下から構成)
 - General-header
 - Request-header
 - Response-header
 - Entity-header
- 改行(CRLF)
- メッセージボディ

