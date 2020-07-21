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



## font-familyプロパティ

font-familyプロパティは、フォントの種類を設定するプロパティである。

値にはフォントの種類名を記述する。スペース区切りで複数入力することもできる。その際は、左にあるものから優先されて使われる。


使用例

```
<p style="font-family:serif;">The example of font 1</p>
<p style="font-family:cursive;">The example of font 2</p>
```

表示例

<hr>
<p style="font-family:serif;">The example of font 1</p>
<p style="font-family:cursive;">The example of font 2</p>
<hr>


## font-sizeプロパティ

font-sizeプロパティは、フォントサイズを設定するプロパティである。

設定できる値と意味は以下の通り。

<table>
    <tr>
        <td>数値(単位px)</td>
        <td>・・</td>
        <td>数値に応じたフォントサイズになる</td>
    </tr>
    <tr>
        <td>パーセンテージ(単位%)</td>
        <td>・・</td>
        <td>親要素のフォントサイズに対するパーセンテージ分のフォントサイズになる</td>
    </tr>
    <tr>
        <td>xx-small</td>
        <td rowspan="7">・・</td>
        <td rowspan="7">指定したキーワードで大きさが決まる。xx-smallが最も小さく、xx-largeが最も大きくなる</td>
    </tr>
    <tr>
        <td>x-small</td>
    </tr>
    <tr>
        <td>small</td>
    </tr>
    <tr>
        <td>medium</td>
    </tr>
    <tr>
        <td>large</td>
    </tr>
    <tr>
        <td>x-large</td>
    </tr>
    <tr>
        <td>xx-large</td>
    </tr>
</table>

使用例

```
<p style="font-size:xx-small;">xx-small</p>
<p style="font-size:medium;">medium</p>
<p style="font-size:xx-large;">xx-large</p>
```

表示例

<hr>
<p style="font-size:xx-small;">xx-small</p>
<p style="font-size:medium;">medium</p>
<p style="font-size:xx-large;">xx-large</p>
<hr>

