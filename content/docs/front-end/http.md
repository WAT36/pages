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


# HTTPの開始行(リクエストメッセージ)

HTTPメッセージの一番最初に書く開始行は以下のような構造になる。

```
メソッド  /任意のパス(+クエリストリング)  HTTP/1.1
```

クエリストリングとはリクエストと同時に送るデータのことで、任意のパスの後に"?"を書き、その後にデータを記入する。

また、メソッドとは以下のいずれかである。

<table>
    <thead>
        <th>メソッド名</th>
        <th>説明</th>
    </thead>
    <tr>
        <td>GET</td>
        <td>指定したURL(URI)で識別されるリソースを取得</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>指定したURL(URI)で識別されるリソースの子リソースの作成、またはリソースへのデータの追加などを要求</td>
    </tr>
    <tr>
        <td>PUT</td>
        <td>指定したURL(URI)に対してエンティティ(メッセージボディ)に含まれる情報を保存することを要求</td>
    </tr>
    <tr>
        <td>HEAD</td>
        <td>GETと同じだがヘッダのみを取得</td>
    </tr>
    <tr>
        <td>OPTIONS</td>
        <td>指定したURL(URI)がサポートしているメソッドを取得</td>
    </tr>
    <tr>
        <td>DELETE</td>
        <td>指定したURL(URI)で識別されるリソースの削除を要求</td>
    </tr>
    <tr>
        <td>TRACE</td>
        <td>自分宛にリクエストメッセージを要求するループバック試験に使用</td>
    </tr>
</table>

このうちよく使われるのはGETとPOSTである。


# HTTPのレスポンスメッセージ

HTTPのレスポンスメッセージの例は以下の通り。


```
HTTP/1.1 200 OK
```

```
Date:Wed,  19 Aug 2020 23:48:50 GMT
Server:Apache
Content-type:text/html
```

```
(改行)
```

```
<!DOCTYPE html>
・・・
・・・
```

ここで、レスポンスメッセージの開始行には、レスポンスの状態を示す3桁の数字「ステータスコード」が含まれている。

ステータスコードは以下のように分類される。

<table>
    <thead>
        <th>ステータスコード</th>
        <th>説明</th>
    </thead>
    <tr>
        <td>1xx</td>
        <td>Informational(情報提供のコード)</td>
    </tr>
    <tr>
        <td>2xx</td>
        <td>Success(成功)</td>
    </tr>
    <tr>
        <td>3xx</td>
        <td>Redirection(転送)</td>
    </tr>
    <tr>
        <td>4xx</td>
        <td>Client Error(クライアントエラー)</td>
    </tr>
    <tr>
        <td>5xx</td>
        <td>Server Error(サーバーエラー)</td>
    </tr>
</table>


# HTTPのヘッダフィールド

ヘッダフィールドには、メッセージの外部情報（メタ情報）を扱うためのHTTPヘッダが含まれる。

HTTPヘッダとして代表的なものを示す。

<table>
    <thead>
        <th>ヘッダ名</th>
        <th>説明</th>
    </thead>
    <tr>
        <td>Accept</td>
        <td>受入可能なメディア型を指定</td>
    </tr>
    <tr>
        <td>Authorization</td>
        <td>HTTP認証の認証情報</td>
    </tr>
    <tr>
        <td>Cache-Control</td>
        <td>キャッシュの振る舞いを支持</td>
    </tr>
    <tr>
        <td>Content-Language</td>
        <td>エンティティの自然言語</td>
    </tr>
    <tr>
        <td>Content-Length</td>
        <td>メッセージボディの大きさ</td>
    </tr>
    <tr>
        <td>Content-Type</td>
        <td>メッセージボディのメディア型</td>
    </tr>
    <tr>
        <td>Cookie</td>
        <td>ブラウザに保存されたクッキーの値</td>
    </tr>
    <tr>
        <td>Expires</td>
        <td>レスポンスの有効期間</td>
    </tr>
    <tr>
        <td>If-Modified-Since</td>
        <td>指定時刻以降に更新されているかを確認。条件付きGETとともに使用</td>
    </tr>
    <tr>
        <td>Last-Modified</td>
        <td>リソースの最終更新時刻</td>
    </tr>
    <tr>
        <td>Referer</td>
        <td>リンクされている元のリソースのURL(URI)</td>
    </tr>
    <tr>
        <td>Set-Cookie</td>
        <td>Webサーバが生成したクッキーの値</td>
    </tr>
    <tr>
        <td>User-Agent</td>
        <td>ユーザーエージェントの名前</td>
    </tr>
</table>
