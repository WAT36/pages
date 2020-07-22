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

(フォントはGoogle Fonts([https://fonts.google.com/specimen/Rowdies?sidebar.open&selection.family=Rowdies](https://fonts.google.com/specimen/Rowdies?sidebar.open&selection.family=Rowdies))から拝借しました)


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


## font-weightプロパティ

font-weightプロパティは、フォントの太さを設定するプロパティである。

設定できる値と意味は以下の通り。

<table>
    <tr>
        <td>bold</td>
        <td>・・</td>
        <td>太字にする</td>
    </tr>
    <tr>
        <td>100</td>
        <td rowspan="9">・・</td>
        <td rowspan="9">指定したキーワードで大きさが決まる。100が最も小さく、900が最も大きくなる.400の時が基準で、「bold」の時は700の時の太さになる。(しかし、フォントによっては９段階の太さを設定していないものもあるので、値を変えても変化がない場合もある)</td>
    </tr>
    <tr>
        <td>200</td>
    </tr>
    <tr>
        <td>300</td>
    </tr>
    <tr>
        <td>400</td>
    </tr>
    <tr>
        <td>500</td>
    </tr>
    <tr>
        <td>600</td>
    </tr>
    <tr>
        <td>700</td>
    </tr>
    <tr>
        <td>800</td>
    </tr>
    <tr>
        <td>900</td>
    </tr>
    <tr>
        <td>bolder</td>
        <td>・・</td>
        <td>現在の太さよりも一段階太くする</td>
    </tr>
    <tr>
        <td>lighter</td>
        <td>・・</td>
        <td>現在の太さよりも一段階細くする</td>
    </tr>
    <tr>
        <td>normal</td>
        <td>・・</td>
        <td>標準の太さ(400)にする</td>
    </tr>
</table>

使用例

```
<p style="font-weight:100;">font-weight:100</p>
<p style="font-weight:300;">font-weight:300</p>
<p style="font-weight:500;">font-weight:500</p>
<p style="font-weight:700;">font-weight:700</p>
<p style="font-weight:900;">font-weight:900</p>
```

表示例

<hr>
<p style="font-weight:100;">font-weight:100</p>
<p style="font-weight:300;">font-weight:300</p>
<p style="font-weight:500;">font-weight:500</p>
<p style="font-weight:700;">font-weight:700</p>
<p style="font-weight:900;">font-weight:900</p>
<hr>


## font-styleプロパティ


font-styleプロパティは、イタリックまたは斜体の書体を選択するためのプロパティである。

設定できる値と意味は以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">oblique</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">斜体で表示する。</td>
    </tr>
    <tr>
        <td style="border:none;">italic</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">イタリック体で表示する。フォントにイタリック体での表示形式がない場合は、「oblique」の時と同じになる</td>
    </tr>
    <tr>
        <td style="border:none;">normal</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">標準のフォントで表示</td>
    </tr>
</table>

使用例

```
<p style="font-style:oblique;">oblique</p>
<p style="font-style:italic ;">italic</p>
```

表示例

<hr>
<p style="font-style:oblique;">oblique</p>
<p style="font-style:italic ;">italic</p>
<hr>


## font-variantプロパティ

font-variantプロパティは、フォントをスモールキャップ（小文字を小さい大文字で表す形式）で表したい時に利用するプロパティである。

設定できる値と意味は以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">normal</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">標準のフォントで表示</td>
    </tr>
    <tr>
        <td style="border:none;">small-caps</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">スモールキャップで表示。ただしスモールキャップが設定されていないフォントでは、単純に大文字を縮小したものを小文字として表示する。</td>
    </tr>
</table>

使用例

```
<p style="font-variant:normal    ;">ABCDEFGhijklmn</p>
<p style="font-variant:small-caps;">ABCDEFGhijklmn</p>
```

表示例

<hr>
<p style="font-variant:normal    ;">ABCDEFGhijklmn</p>
<p style="font-variant:small-caps;">ABCDEFGhijklmn</p>
<hr>


## fontプロパティ

fontプロパティは、これまでに出たfont-xx関連のプロパティの値をまとめて指定できるプロパティである。

値はスペース区切りで複数入力する方式だが、左から以下の順番で指定するという決まりがあるので注意。

- font-weight,font-style,font-variantの値（省略可）
- font-sizeの値（省略不可）
- line-heightの値をfont-sizeの後にスラッシュを書いて指定（省略可）
- font-familyの値（省略不可）

使用例

```
<p style="font: oblique xx-large cursive;">ABCDEFGhijklmn</p>
<p style="font: 900 small-caps medium serif;">ABCDEFGhijklmn</p>
```

表示例

<hr>
<p style="font: oblique xx-large cursive;">ABCDEFGhijklmn</p>
<p style="font: 900 small-caps medium serif;">ABCDEFGhijklmn</p>
<hr>