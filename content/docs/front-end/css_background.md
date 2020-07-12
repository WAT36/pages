---
title: "CSSでの背景"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# CSSでの背景

CSSでの背景の設定方法についてを述べる。

## background-colorプロパティ

background-colorプロパティは背景色を設定するプロパティである。

iframeを使い、使用例を示す。

```
<iframe width="200" height="150" style="background-color:red">
</iframe>
```

表示例

<hr>
<iframe width="200" height="150" style="background-color:red">
</iframe>
<hr>


## background-imageプロパティ

background-imageプロパティは、背景に画像を表示させるプロパティである。

値には、**url(画像のURL)**の形で画像を指定し入力する。

CSSで利用するには、body要素に適用させる。

下記のhtmlをiframeに組み込んで表示させる。

```html
<!DOCTYPE HTML>
<html>
<head>
<title>background-imageサンプル</title>

<style type="text/css">
    body {
        background-image: url(img_small.jpg);
    }

    h1 {
        color:greenyellow
    }
</style>

</head>
<body>

<h1>background-imageのサンプル</h1>

</body>
</html>
```

iframe使用例

```
<iframe width="500" height="400" src="/css_sample_pages/background-image.html">
</iframe>
```

表示例

<hr>
<iframe width="500" height="400" src="/css_sample_pages/background-image.html">
</iframe>
<hr>
