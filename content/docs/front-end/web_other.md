---
title: "その他のWeb関連技術"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

<h1>その他のWeb関連技術</h1>

ここまでで述べられてないWeb関連技術についてを述べる。

# 文書


## XHTML

XHTMLとは、HTMLをXMLの文法で定義し直して書かれた文書である。

HTMLとの相違点は以下の通り。

- 文書の先頭にXML宣言文が必要
- 文字の大文字・小文字が区別される
- 要素は必ず開始タグと終了タグで囲まれてないといけない


## マイクロデータ

マイクロデータとは、文書の意味や属性を示すデータを、メタデータとして文書に埋め込ませたものである。

マイクロデータを利用することで、検索エンジンなどのプログラムにWebページの詳しい情報を伝えることができる。

マイクロデータで、以下の3つの属性を使用して表現する。

- itemscope ・・・  意味付けブロックの開始の宣言
- itemtype  ・・・  データの種別(URL)
- itemprop  ・・・  データのプロパティ名


## RDFa (Resource Description Framework in Attributes)

RDFaとは、RDFによるメタデータをXHTMLで書かれた構造活文書に埋め込むための仕様である。

その前にRDFとは何か？についてだが、RDFはメタデータを表記するためのデータ形式の一つである。

(RDFの記載例は略)

一見マイクロデータと用途は同じに見えるが、RDFaはRDF(XML由来)を元にしているため、XML文書全般でも利用が可能という特徴がある。


## OGP (Open Graph Protocol)

OGPは、Webページの内容を示した情報を、プログラムから読める形でWebページに付加しておくための仕様である。

活用例としてはSNSがある。OGPに対応したページにある「いいね!」ボタンなどをクリックすると、その情報が自分のSNSのページに記載されたり、または他のリコメンデーションなど、様々な機能に活用される。



# データ操作

## JavaScript

JavaScriptというオブジェクト指向プログラミング言語があり、この言語で実装したスクリプトを、HTML文書に組み込んで使用することができる。

HTMLからJavascriptを利用するには、script要素を利用してHTML文書に直接書く方法（下例）と、

```html
<script type="text/javascript">
 //Javascriptのコードを記述する
</script>
```

同じくscript要素のsrc属性にJavascriptのファイルを指定する方法（下例）がある。

```html
<script type="text/javascript" src="test.js"></script>
```


## DOM(Document Object Model)

DOMとはHTML,XML文書にJavaScript等のプログラムからアクセスするためのAPIである。

JavaScriptを用いてDOMを利用する事で、文書を取得したり操作することが可能になる。
