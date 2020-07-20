---
title: "CSSでのフォント"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# CSSでのフォント

CSSでのフォントについて示す。

## Webフォント

CSSでフォントを指定しても、ユーザーの環境にそのフォントがインストールされていなければ使用することは基本できない。

しかし、**@font-face**という書式を使用することで、Web上にあるフォントを利用でき、自身のブラウザに表示させることができる。

設定できる値は以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">font-family</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">利用するフォントの名前</td>
    </tr>
    <tr>
        <td style="border:none;">src</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">フォントのURL。url(...)の形で指定する</td>
    </tr>
</table>


使用例として、下記のhtmlをiframeに組み込んで表示させてみる。

(フォントは[https://fonts.google.com/specimen/Rowdies?sidebar.open&selection.family=Rowdies](https://fonts.google.com/specimen/Rowdies?sidebar.open&selection.family=Rowdies)から拝借しました)


```html
<!DOCTYPE HTML>
<html>
<head>
<title>font-faceサンプル</title>

<style type="text/css">
    @font-face {
        font-family: Rowdies;
        src: url(../fonts/Rowdies-Regular.ttf)
    }

    h1 {
        font-family: Rowdies
    }
</style>

</head>
<body>

<h1>The sample of font-face.</h1>

</body>
</html>
```

iframe使用例

```
<iframe width="500" height="200" src="/css_sample_pages/font-face.html">
</iframe>
```

表示例

<hr>
<iframe width="500" height="200" src="/css_sample_pages/font-face.html">
</iframe>
<hr>
