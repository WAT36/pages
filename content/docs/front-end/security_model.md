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

