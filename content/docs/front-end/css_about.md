---
title: "CSSとは"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# CSSとは

CSSの基本事項についてを述べる。

CSSは、HTMLに組み込む形で使用する言語で、HTMLで作成した文書に対しCSSでどの部分をどのように装飾するかを指定する形で利用する。

利用方についてを以下で述べる。


## CSSの書式

CSSの記法としては、大きく分けてHTML文書のどこに適用するかを示す**セレクタ**と、具体的にどのような装飾を行うかを示す**宣言ブロック**からなる。

宣言ブロックの中には、各宣言をセミコロン(;)区切りで書き、宣言はプロパティ名とプロパティ値をコロン(:)区切りで記入する。

表記例は以下の通り。

```
p 
{
    color: white;
    background: red;
}
```

この例のうち、最初の「p」がセレクタになり、その後の中括弧{}部分が宣言ブロックである。


## HTML文書への組み込み方

CSSをHTML文書に組み込む方法はいくつかある。


### link要素を使う方法

一つ目は、[link要素](https://wat36.github.io/pages/docs/front-end/html_structure/#link要素)を用いてCSSを組み込む方法である。

link要素は前述の通り、HTML文書に関連する外部ファイルやリソースを示すための要素である。

**外部スタイルシート**(スタイルシートだけを書き込んだファイル)を組み込む際にも、このlink要素が利用できる。

link要素のrel属性では**stylesheet**、href属性ではそのスタイルシートのアドレスを指定する。


例

```
・・・
<head>
    ・・・
    <link rel="stylesheet" href="style.css">
</head>
<body>
        ・・・
</body>
・・・
```
