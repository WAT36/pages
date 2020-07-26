---
title: "CSSでのボックス"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# CSSのボックス

CSSで扱うボックスについて。

前述した通り、HTMLでは要素内容の表示にはボックスと呼ばれる単位で表示される。

ボックスの詳細は以下の図の通り。

<img src="/img/front-end/css_box.png" width=80%>

CSSでは、ボックスの各要素を設定することができる。

ここでは、ボックスに関連するCSSのプロパティについてを記載する。

## マージン関連のプロパティ

CSSでは、ボックスのマージンの長さを設定することができる。

そのためのプロパティは以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">margin-top</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">マージンの上部分</td>
    </tr>
    <tr>
        <td style="border:none;">margin-bottom</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">マージンの下部分</td>
    </tr>
    <tr>
        <td style="border:none;">margin-left</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">マージンの左部分</td>
    </tr>
    <tr>
        <td style="border:none;">margin-right</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">マージンの右部分</td>
    </tr>
    <tr>
        <td style="border:none;">margin</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">マージンの各部分(指定できる値は1~4個)</td>
    </tr>
</table>

中でも、marginプロパティは設定した値の数で、以下の通りに意味合いが変わってくる。


<table style="border:none;">
    <thead>
        <td style="border:none;">値の数</td>
        <td style="border:none;">適用箇所</td>
        <td style="border:none;">例</td>
    </thead>
    <tr>
        <td style="border:none;">1</td>
        <td style="border:none;">上下左右全て</td>
        <td style="border:none;">margin 10px;</td>
    </tr>
    <tr>
        <td style="border:none;">2</td>
        <td style="border:none;">上下  左右</td>
        <td style="border:none;">margin 10px 10px;</td>
    </tr>
    <tr>
        <td style="border:none;">3</td>
        <td style="border:none;">上 左右 下</td>
        <td style="border:none;">margin 10px 10px 10px;</td>
    </tr>
    <tr>
        <td style="border:none;">4</td>
        <td style="border:none;">上 右 下 左</td>
        <td style="border:none;">margin 10px 10px 10px;</td>
    </tr>
</table>


margin関連のプロパティに設定する値は以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">数値(単位px)</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">pxの値が長さになる</td>
    </tr>
    <tr>
        <td style="border:none;">数値(単位%)</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">要素内容を表示する領域の幅に対する比率の長さになる</td>
    </tr>
    <tr>
        <td style="border:none;">auto</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">ボックスの状況から自動設定する</td>
    </tr>
</table>


使用例

```html
<!DOCTYPE HTML>
<html>
<head>
<title>marginサンプル</title>

<style type="text/css">
    p.sample1 {background-color: #66ccff; margin: 10px;} 
    p.sample2 {background-color: #66ccff; margin: 10px 20px;}
    p.sample3 {background-color: #66ccff; margin: 10px 20px 30px;}
    p.sample4 {background-color: #66ccff; margin: 10px 20px 30px 40px;}
    p.sample5 {background-color: #66ccff; margin: auto;}
</style>

</head>
<body>
    <hr>
    <p class="sample1">マージン上下左右10px</p>
    <hr>
    <p class="sample2">マージン上下10px、左右20px</p>
    <hr>
    <p class="sample3">マージン上10px、左右20px、下30px</p>
    <hr>
    <p class="sample4">マージン上10px、右20px、下30px、左40px</p>
    <hr>
    <p class="sample5">マージンauto</p>
    <hr>
</body>
</html>
```


iframe使用例

```
<iframe width="500" height="300" src="/css_sample_pages/box-margin.html">
</iframe>
```

表示例

<hr>
<iframe width="500" height="300" src="/css_sample_pages/box-margin.html">
</iframe>
<hr>

## パディング関連のプロパティ

同様に、CSSではボックスのパディングの長さを設定することができる。

そのためのプロパティは以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">padding-top</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">パディングの上部分</td>
    </tr>
    <tr>
        <td style="border:none;">padding-bottom</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">パディングの下部分</td>
    </tr>
    <tr>
        <td style="border:none;">padding-left</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">パディングの左部分</td>
    </tr>
    <tr>
        <td style="border:none;">padding-right</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">パディングの右部分</td>
    </tr>
    <tr>
        <td style="border:none;">padding</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">パディングの各部分(指定できる値は1~4個)</td>
    </tr>
</table>


同様に、paddingプロパティは設定した値の数で、以下の通りに意味合いが変わってくる。


<table style="border:none;">
    <thead>
        <td style="border:none;">値の数</td>
        <td style="border:none;">適用箇所</td>
        <td style="border:none;">例</td>
    </thead>
    <tr>
        <td style="border:none;">1</td>
        <td style="border:none;">上下左右全て</td>
        <td style="border:none;">padding 10px;</td>
    </tr>
    <tr>
        <td style="border:none;">2</td>
        <td style="border:none;">上下  左右</td>
        <td style="border:none;">padding 10px 10px;</td>
    </tr>
    <tr>
        <td style="border:none;">3</td>
        <td style="border:none;">上 左右 下</td>
        <td style="border:none;">padding 10px 10px 10px;</td>
    </tr>
    <tr>
        <td style="border:none;">4</td>
        <td style="border:none;">上 右 下 左</td>
        <td style="border:none;">padding 10px 10px 10px;</td>
    </tr>
</table>


padding関連のプロパティに設定する値は以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">数値(単位px)</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">pxの値が長さになる</td>
    </tr>
    <tr>
        <td style="border:none;">数値(単位%)</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">要素内容を表示する領域の幅に対する比率の長さになる</td>
    </tr>
</table>


使用例

```html
<!DOCTYPE HTML>
<html>
<head>
<title>paddingサンプル</title>

<style type="text/css">
    p.sample1 {background-color: #66ff99; padding: 10px;} 
    p.sample2 {background-color: #66ff99; padding: 10px 20px;}
    p.sample3 {background-color: #66ff99; padding: 10px 20px 30px;}
    p.sample4 {background-color: #66ff99; padding: 10px 20px 30px 40px;}
</style>

</head>
<body>
    <hr>
    <p class="sample1">パディング上下左右10px</p>
    <hr>
    <p class="sample2">パディング上下10px、左右20px</p>
    <hr>
    <p class="sample3">パディング上10px、左右20px、下30px</p>
    <hr>
    <p class="sample4">パディング上10px、右20px、下30px、左40px</p>
    <hr>
</body>
</html>
```


iframe使用例

```
<iframe width="500" height="300" src="/css_sample_pages/box-padding.html">
</iframe>
```

表示例

<hr>
<iframe width="500" height="300" src="/css_sample_pages/box-padding.html">
</iframe>
<hr>

## ボーダー関連のプロパティ


同じように、CSSではボックスのボーダーの種類を設定することができる。

そのためのプロパティは以下の通り。


<table style="border:none;">
    <thead>
        <td style="border:none;">プロパティ名</td>
        <td style="border:none;">設定対象</td>
        <td style="border:none;">設定する値</td>
    </thead>
    <tr>
        <td style="border:none;">border-top-style</td>
        <td style="border:none;">上のボーダーの線種</td>
        <td style="border:none;" rowspan="5">
            solid:実線<br>
            double:二重線<br>
            dotted:点線<br>
            dashed:破線<br>
            groove:溝線<br>
            inset:内側が低くなるような線<br>
            outset:内側が高くなるような線<br>
            none,hidden:表示しない<br>
            他
        </td>
    </tr>
    <tr>
        <td style="border:none;">border-bottom-style</td>
        <td style="border:none;">下のボーダーの線種</td>
    </tr>
    <tr>
        <td style="border:none;">border-left-style</td>
        <td style="border:none;">左のボーダーの線種</td>
    </tr>
    <tr>
        <td style="border:none;">border-right-style</td>
        <td style="border:none;">右のボーダーの線種</td>
    </tr>
    <tr>
        <td style="border:none;">border-style</td>
        <td style="border:none;">上下左右のボーダーの線種(値1~4個)</td>
    </tr>
</table>