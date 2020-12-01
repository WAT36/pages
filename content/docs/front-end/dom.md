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
    <div>
        <p>Hello!</p>
        <p>World!</p>
    </div>
</body>

</html>
```

これをDOMツリーで書き表すと以下のようになる。

<img src="/img/front-end/dom.png" width=100%>
