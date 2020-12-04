---
title: "DOM"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# DOM

DOMとはDocument Object Modelの略で、HTML(またはXML)の各要素にアクセスするための仕組みである。Javascriptではこれを用いて、HTMLを操作することが可能になる。

## DOMツリー

DOMツリーとは、HTMLやXMLの内容をツリー状に表現したものである。

例えば、以下のようなHTMLがあったとする。

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>タイトル</title>
</head>

<body>
    <h1>見出し1</h1>
    <div id="main">
        <p>Hello!</p>
        <p>World!</p>
    </div>
</body>

</html>
```

これをDOMツリーで書き表すと以下のようになる。

<img src="/img/front-end/dom.png" width=100%>

また、このDOMツリー内の各要素を**ノード**と言う。

### 要素の取得方法

では、JavascriptからこのDOMをどのように操作するのか？まずは、このノード(要素)を取得する方法についてを述べる。

#### ID名で取得

Javascriptから、要素のID名を使ってノードを取得する方法は以下の通り。

```javascript
document.getElementById('ID名')
```

#### クラス名で取得

同様に、要素のクラス名を使ってノードを取得する方法は以下の通り。

```javascript
document.getElementsByClassName('クラス名')
```

### 親要素を取得

Javascriptで取得したノードの親要素を取得するには、**parentNode**を使用する。

先程の'ID名で取得'で取得したノードの親要素を取得する例を以下に示す。

```javascript
//ID名で取得
var id = document.getElementById('ID名');

//親要素の取得
var parent = id.parentNode;
```