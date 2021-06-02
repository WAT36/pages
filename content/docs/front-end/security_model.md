---
title: "セキュリティモデル(Javascript)"
weight: 1
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: true
---

# セキュリティモデル(Javascript)

Javascriptのセキュリティモデルに関する事項を述べる。

# クロスオリジン制約

コンテンツを取得する場合、それぞれのコンテンツのオリジンが同一の場合は「同一オリジン」からの取得という。異なる場合は「クロスオリジン」からの取得という。

オリジンとはスキーム・ホスト名・ポート番号で構成される、ドメインを表す物である。

例えば、以下の2つはスキームがhttps、ホスト名がhoge.hoge、ポート番号が443と同一なので、同一オリジンとなる。

```
https://hoge.hoge:443/index.html
https://hoge.hoge/sitemap.html
```

以下は、スキームが異なるのでクロスオリジンとなる。

```
http://hoge.hoge/sitemap.html
https://hoge.hoge/sitemap.html
```

# CORS(Cross-Originn Resource Sharing)

コンテンツによっては異なるオリジンのコンテンツ(CSSやフォントなど)で構成される場合もある。

そのような異なるオリジンからのアクセスについて、制御を規定しているのがCORS(Cross-Origin Resource Sharing)になる。

CORSでは、クライアントとサーバ間のHTTPの仕様と、リクエストを受けるサーバ側で許可するオリジン、HTTPメソッド、HTTPヘッダなどによるアクセス制御を規定する。

CORSには2通りの方法がある。1つはシンプルにリクエスト・レスポンスの形式を取るもの、もう1つは、1つ目に加えてHTTPリクエストの前にOPTIONSメソッドを用いてサーバとブラウザ間で安全を確かめるものである。

このうち、シンプルにリクエスト・レスポンスの形式を取る物についてまず述べる。これは以下の条件の場合に使用される。

- メソッドが「GET」「HEAD」「POST」のいずれかである。
- ヘッダが「Accept」「Accept-Lannguage」「Conntent-Language」「Content-Type」のいずれかである。
- Content-Typeが「applicationn/x-www-form-urlencoded」「multipart/form-data」「text/plain」のいずれかである。

リクエストとレスポンスの例は以下の通り。

## リクエスト

リクエストはアクセス元のオリジンをOriginヘッダに設定し、クロスオリジンのサーバにリクエストを送る。

```
GET https://foo.bar HTTP/1.1
Origin : https://hoge.hoge/index.html
```

## レスポンス

リクエストを受け付けたサーバは、Originヘッダに指定されたオリジンを見て、それが許可されているオリジンの設定に含まれている場合のみにレスポンスを返す。

レスポンスのAccess-Controle-Allow-Originnヘッダにアクセス元のオリジンを設定し、レスポンスを送る。

```
HTTP/1.1 200 OK
Access-Controle-Allow-Origin : https://hoge.hoge/index.html
```
