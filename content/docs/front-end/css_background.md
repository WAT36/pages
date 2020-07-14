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


## background-clipプロパティ

background-clipプロパティは、背景画像をボックスのどの領域に表示させるかを設定するプロパティである。

設定できる値は以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">border-box</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">ボーダー以内の領域に表示させる</td>
    </tr>
    <tr>
        <td style="border:none;">padding-box</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">パディング以内の領域に表示させる</td>
    </tr>
    <tr>
        <td style="border:none;">content-box</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">要素内容を表示させる領域に表示させる</td>
    </tr>
</table>


使用例

```html
<!DOCTYPE HTML>
<html>
<head>
<title>background-clipサンプル</title>

<style type="text/css">
    p {
        width:300px; height:200px; padding:10px;
        border:dashed 3px black; 
        color:white;
        background-image:url(img_small.jpg);
        background-clip:content-box;
    }
</style>

</head>
<body>

<p>background-clipのサンプル</p>

</body>
</html>
```

iframe使用例

```
<iframe width="400" height="300" src="/css_sample_pages/background-clip.html">
</iframe>
```

表示例

<hr>
<iframe width="400" height="300" src="/css_sample_pages/background-clip.html">
</iframe>
<hr>


## background-repeatプロパティ

background-repeatプロパティは、背景画像を繰り返して表示させるか、及びその表示のさせ方を設定するプロパティである。

設定する値は以下の通り。デフォルトではrepeatである。

<table style="border:none;">
    <tr>
        <td style="border:none;">repeat-x</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">横方向に画像を連続して表示させる</td>
    </tr>
    <tr>
        <td style="border:none;">repeat-y</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">縦方向に画像を連続して表示させる</td>
    </tr>
    <tr>
        <td style="border:none;">repeat</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">画像を全体に連続して表示させる</td>
    </tr>
    <tr>
        <td style="border:none;">no-repeat</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">画像を１つだけ表示させる</td>
    </tr>
</table>


使用例

```html
<!DOCTYPE HTML>
<html>
<head>
<title>background-repeatサンプル</title>

<style type="text/css">
    body {
        background-image: url(img_small.jpg);
        background-repeat: repeat-x;
    }

    h1 {
        color:greenyellow
    }
</style>

</head>
<body>

<h1>background-repeatのサンプル</h1>

</body>
</html>
```

iframe使用例

```
<iframe width="500" height="400" src="/css_sample_pages/background-repeat.html">
</iframe>
```

表示例

<hr>
<iframe width="500" height="400" src="/css_sample_pages/background-repeat.html">
</iframe>
<hr>


## background-sizeプロパティ

background-sizeプロパティは、背景画像を表示するサイズを設定するプロパティである。

値は以下のキーワードか、幅・高さを示す数値２つを指定する。（数値を１つ指定した場合は幅として認識される。）デフォルトはautoである。

<table style="border:none;">
    <tr>
        <td style="border:none;">contain</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">画像の縦横比を保った状態で、画像全体が表示される最大サイズにする</td>
    </tr>
    <tr>
        <td style="border:none;">cover</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">画像の縦横比を保った状態で、画像全体が表示される最小サイズにする</td>
    </tr>
    <tr>
        <td style="border:none;">auto</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">画像の縦横比を保った状態</td>
    </tr>
    <tr>
        <td style="border:none;">(数値)%</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">背景の表示領域に対するパーセンテージ分のサイズにする</td>
    </tr>
</table>



使用例

```html
<!DOCTYPE HTML>
<html>
<head>
<title>background-sizeサンプル</title>

<style type="text/css">
    body {
        background-image: url(img_small.jpg);
        background-size: cover;
    }

    h1 {
        color:greenyellow
    }
</style>

</head>
<body>

<h1>background-sizeのサンプル</h1>

</body>
</html>
```

iframe使用例

```
<iframe width="500" height="400" src="/css_sample_pages/background-size.html">
</iframe>
```

表示例

<hr>
<iframe width="500" height="400" src="/css_sample_pages/background-size.html">
</iframe>
<hr>


## background-originプロパティ

background-originプロパティは、ボックスにおいて画像を表示させる基準となる位置を設定する要素である。

設定する値は以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">border-box</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">ボーダー領域の左上を基準とする</td>
    </tr>
    <tr>
        <td style="border:none;">padding-box</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">パディング領域の左上を基準とする</td>
    </tr>
    <tr>
        <td style="border:none;">content-box</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">要素内容を表示させる領域の左上を基準とする</td>
    </tr>
</table>


使用例

```html
<!DOCTYPE HTML>
<html>
<head>
<title>background-originサンプル</title>

<style type="text/css">
    p {
        width:300px; height:200px; padding:10px;
        border:dashed 3px black; 
        color:white;
        background-image:url(img_small.jpg);
        background-origin:content-box;
    }
</style>

</head>
<body>

<p>background-originのサンプル</p>

</body>
</html>
```

iframe使用例

```
<iframe width="400" height="300" src="/css_sample_pages/background-origin.html">
</iframe>
```

表示例

<hr>
<iframe width="400" height="300" src="/css_sample_pages/background-origin.html">
</iframe>
<hr>


## background-positionプロパティ

background-positionプロパティは、背景に画像を表示させる位置を設定するプロパティである。画像が繰り返し表示される場合には、まずその位置に画像が表示され、そこから繰り返し表示される。

設定する値は縦方向と横方向の２つで、以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">top</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">一番上(縦方向の0%)</td>
    </tr>
    <tr>
        <td style="border:none;">bottom</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">一番下(縦方向の100%)</td>
    </tr>
    <tr>
        <td style="border:none;">left</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">一番左(横方向の0%)</td>
    </tr>
    <tr>
        <td style="border:none;">right</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">一番右(横方向の100%)</td>
    </tr>
    <tr>
        <td style="border:none;">center</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">中央(縦・横方向の50%)</td>
    </tr>
    <tr>
        <td style="border:none;">(パーセンテージ)</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">それぞれの方向に対するパーセンテージ。数値の後に%をつける</td>
    </tr>
</table>



使用例

```html
<!DOCTYPE HTML>
<html>
<head>
<title>background-positionサンプル</title>

<style type="text/css">
    body {
        background-image: url(img_small.jpg);
        background-repeat: no-repeat;
        background-position: 100% 100%;
    }

    h1 {
        color:black
    }
</style>

</head>
<body>

<h1>この上が0%</h1>
<h1>background-positionのサンプル</h1>
<br>
<br>
<br>
<br>
<h1>background-positionのサンプル</h1>
<h1>この下が100%</h1>
</body>
</html>
```

iframe使用例

```
<iframe width="500" height="400" src="/css_sample_pages/background-position.html">
</iframe>
```

表示例

<hr>
<iframe width="500" height="400" src="/css_sample_pages/background-position.html">
</iframe>
<hr>


## background-attachment プロパティ

background-attachmentプロパティは、ページをスクロールしたときに背景画像も一緒にスクロールさせるか否かを設定する。


設定する値は以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">scroll</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">背景画像も一緒にスクロールする</td>
    </tr>
    <tr>
        <td style="border:none;">fixed</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">スクロールしても背景画像を動かさない</td>
    </tr>
</table>


使用例

```html
<!DOCTYPE HTML>
<html>
<head>
<title>background-attachmentサンプル</title>

<style type="text/css">
    body {
        background-image: url(img_small.jpg);
        background-attachment: fixed;
    }

    h1 {
        color:black
    }
</style>

</head>
<body>

<h1>background-attachmentのサンプル</h1>
<h1>1</h1>
<h1>2</h1>
<h1>3</h1>
<h1>4</h1>
<h1>5</h1>
<h1>6</h1>
<h1>7</h1>
<h1>8</h1>
<h1>9</h1>
<h1>10</h1>
</body>
</html>
```

iframe使用例

```
<iframe width="500" height="200" src="/css_sample_pages/background-attachment.html" scrolling="yes">
</iframe>
```

表示例

<hr>
<iframe width="500" height="400" src="/css_sample_pages/background-attachment.html" scrolling="yes">
</iframe>
<hr>
