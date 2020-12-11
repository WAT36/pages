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

## 要素の取得方法

では、JavascriptからこのDOMをどのように操作するのか？まずは、このノード(要素)を取得する方法についてを述べる。

### ID名で取得

Javascriptから、要素のID名を使ってノードを取得する方法は以下の通り。

```javascript
document.getElementById('ID名')
```

### クラス名で取得

同様に、要素のクラス名を使ってノードを取得する方法は以下の通り。

```javascript
document.getElementsByClassName('クラス名');
```

### タグ名での取得

タグ名での取得は以下の通り。

```javascript
document.getElementsByTagName('タグ名');
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

### 子要素の取得

子要素を取得する方法はいくつかある。

子要素のうち最初の要素を取得するには**firstChild**、最後の要素は**lastChild**、子要素を全て配列として取得するには**childNodes**を利用する。

```javascript
//例、ID名で取得
var id = document.getElementById('ID名');

//子要素のうち最初の要素を取得
var first = id.firstChild;

//子要素のうち最後の要素を取得
var last = id.lastChild;

//子要素を全て配列として取得
var child = id.childNodes;
```

#### フォームの取得

HTMLのフォームを取得するには、**forms**を利用する。

document.formsとする事で、HTML文書内のフォームを全て取得できる。フォームが複数あった場合は、配列として取得できる。

```javascript
//フォームを全て取得
var forms = document.forms;
```

## DOMの操作方法

DOMで取得した要素の操作方法について述べる。

### 要素の情報の取得

例で示したHTMLにおいて、取得した要素の内部の情報は、**innerText**を使うことで取得できる。

```javascript
var target = document.getElementById('main').firstElementChild;

//要素の内部の情報(テキスト)を取得
var text = target.innerText;
console.log(text);
```


### 要素の情報の変更

同様に、取得した要素の内部の情報を変更するには、**innerText**を使うことで変更できる。

```javascript
var target = document.getElementById('main').firstElementChild;

//要素の内部の情報(テキスト)を変更する
target.innerText = 'テキストを変更しました';
```