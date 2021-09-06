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

そのような異なるオリジンからのアクセスについて、制御を規定しているのが**CORS(Cross-Origin Resource Sharing)**になる。

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

レスポンスのAccess-Controle-Allow-Originヘッダにアクセス元のオリジンを設定し、レスポンスを送る。

```
HTTP/1.1 200 OK
Access-Controle-Allow-Origin : https://hoge.hoge/index.html
```

# CORSのプリフライトリクエスト

続いてCORSのもう一つの方法について述べる。

シンプルなリクエスト以外の場合はプリフライトリクエストを利用する。プリフライトリクエスト・レスポンスでアクセス可能なことを確認してから、リクエスト・レスポンスを行う。


## プリフライトリクエスト

OPTIONSメソッドにアクセス元のオリジンを設定し、Access-Control-Request-Methodにリクエストするメソッド、Access-Control-Request-HeadersにCORSで指定するヘッダ名を指定する。

```
OPTIONS https://foo.bar HTTP/1.1
・・・
・・・
Origin : https://hoge.hoge/index.html
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PINGOTHER
```

リクエストを受けたサーバは、OPTIONSメソッドの存在により、それがプリフライトリクエストであると認識する。

Originヘッダに、サーバにあらかじめ指定されたオリジン、Access-Control-Request-Methodに指定されたメソッド、Access-Control-Request-Headersに指定されたヘッダが指定されている場合、アクセスを許可する。

<hr>

アクセス可能と判断したサーバは、レスポンス可能なアクセス元オリジンをAccess-Control-Allow-Originヘッダに指定し、メソッドをAccess-Control-Allow-Methods、ヘッダをAccess-Control-Allow-Headers、アクセス許可の有効期限を秒単位でAccess-Control-Max-Ageに設定して返す。

```
HTTP/1.1 200 OK
・・
・・
Access-Control-Allow-Origin: http://foo.bar
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 3600
```

<hr>

プリフライトリクエストのレスポンスを受けたクライアントは、X-PINGOTHERヘッダとOriginヘッダを指定してリクエストを送信する。

```
OPTIONS https://foo.bar HTTP/1.1
・・・
・・・
Origin : https://hoge.hoge/index.html
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PINGOTHER
```

<hr>

するとサーバからOK(Status code=200)が返される。

```
HTTP/1.1 200 OK
・・
・・
Access-Control-Allow-Origin: http://foo.bar
```

# セキュリティモデルとSSL

## 混在コンテンツ(Mixed Content)

HTTPSのページにも関わらず、一部のコンテンツがHTTPで取得されているものを混在コンテンツ(Mixed Content)という。

HTTPで取得されるコンテンツは盗聴や改竄が可能であり、元のページは完全には保護されたことにはならない。

## Secure Contexts

ローカルのファイルや通信、httpsによる外部との通信によるコンテンツで構成される場合など、最小限のセキュリティレベルが保たれている場合、コンテンツはSecure Contexts(保護されたコンテキスト)にあるという。

ユーザーの位置情報等のプライバシーに関する情報を取得するAPIや、接続へのハイジャックの恐れがあるAPI等へのアクセスは、Secure Contextsになければならない、すなわちhttpsでなければ実行されないことでコンテンツを保護することができる。

Secure Contextsであるページか否かはWindowsオブジェクトのisSecureContextプロパティを参照して行う。