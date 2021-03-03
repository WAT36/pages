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

CSSでは、ボックスの各部分の長さなどを設定することができる。

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
        <th style="border:none;">値の数</th>
        <th style="border:none;">適用箇所</th>
        <th style="border:none;">例</th>
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
        <td style="border:none;">margin 10px 10px 10px 10px;</td>
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

```
<p style="background-color: #66ccff; margin: 10px;">マージン上下左右10px</p>
<p style="background-color: #66ccff; margin: 10px 20px;">マージン上下10px、左右20px</p>
<p style="background-color: #66ccff; margin: 10px 20px 30px;">マージン上10px、左右20px、下30px</p>
<p style="background-color: #66ccff; margin: 10px 20px 30px 40px;">マージン上10px、右20px、下30px、左40px</p>
<p style="background-color: #66ccff; margin: auto;">マージンauto</p>
```

表示例

<hr>
<p style="background-color: #66ccff; margin: 10px;">マージン上下左右10px</p>
<p style="background-color: #66ccff; margin: 10px 20px;">マージン上下10px、左右20px</p>
<p style="background-color: #66ccff; margin: 10px 20px 30px;">マージン上10px、左右20px、下30px</p>
<p style="background-color: #66ccff; margin: 10px 20px 30px 40px;">マージン上10px、右20px、下30px、左40px</p>
<p style="background-color: #66ccff; margin: auto;">マージンauto</p>
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
        <th style="border:none;">値の数</th>
        <th style="border:none;">適用箇所</th>
        <th style="border:none;">例</th>
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
        <td style="border:none;">padding 10px 10px 10px 10px;</td>
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

```
<p style="background-color: #66ff99; padding: 10px;">パディング上下左右10px</p>
<p style="background-color: #66ff99; padding: 10px 20px;">パディング上下10px、左右20px</p>
<p style="background-color: #66ff99; padding: 10px 20px 30px;">パディング上10px、左右20px、下30px</p>
<p style="background-color: #66ff99; padding: 10px 20px 30px 40px;">パディング上10px、右20px、下30px、左40px</p>
```

表示例

<hr>
<p style="background-color: #66ff99; padding: 10px;">パディング上下左右10px</p>
<p style="background-color: #66ff99; padding: 10px 20px;">パディング上下10px、左右20px</p>
<p style="background-color: #66ff99; padding: 10px 20px 30px;">パディング上10px、左右20px、下30px</p>
<p style="background-color: #66ff99; padding: 10px 20px 30px 40px;">パディング上10px、右20px、下30px、左40px</p>
<hr>

## ボーダー関連のプロパティ


同じように、CSSではボックスのボーダーの種類を設定することができる。

そのためのプロパティは以下の通り。


<table>
    <thead>
        <th>プロパティ名</th>
        <th>設定対象</th>
        <th>設定する値</th>
    </thead>
    <tr>
        <td>border-top-style</td>
        <td>上のボーダーの線種</td>
        <td rowspan="5">
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
        <td>border-bottom-style</td>
        <td>下のボーダーの線種</td>
    </tr>
    <tr>
        <td>border-left-style</td>
        <td>左のボーダーの線種</td>
    </tr>
    <tr>
        <td>border-right-style</td>
        <td>右のボーダーの線種</td>
    </tr>
    <tr>
        <td>border-style</td>
        <td>上下左右のボーダーの線種(値1~4個)</td>
    </tr>
    <tr>
        <td>border-top-width</td>
        <td>上のボーダーの太さ</td>
        <td rowspan="5">
            数値(単位px):数値に応じた太さ<br>
            thin:細い<br>
            medium:中くらい<br>
            thick:太い<br>
            他
        </td>
    </tr>
    <tr>
        <td>border-bottom-width</td>
        <td>下のボーダーの太さ</td>
    </tr>
    <tr>
        <td>border-left-width</td>
        <td>左のボーダーの太さ</td>
    </tr>
    <tr>
        <td>border-right-width</td>
        <td>右のボーダーの太さ</td>
    </tr>
    <tr>
        <td>border-width</td>
        <td>上下左右のボーダーの太さ(値1~4個)</td>
    </tr>
    <tr>
        <td>border-top-color</td>
        <td>上のボーダーの色</td>
        <td rowspan="5">
            色を示す値
        </td>
    </tr>
    <tr>
        <td>border-bottom-color</td>
        <td>下のボーダーの色</td>
    </tr>
    <tr>
        <td>border-left-color</td>
        <td>左のボーダーの色</td>
    </tr>
    <tr>
        <td>border-right-color</td>
        <td>右のボーダーの色</td>
    </tr>
    <tr>
        <td>border-color</td>
        <td>上下左右のボーダーの色(値1~4個)</td>
    </tr>
    <tr>
        <td>border-top</td>
        <td>上のボーダーの線種・太さ・色</td>
        <td rowspan="5">
            線種・太さ・色を示す値を空白区切りで指定
        </td>
    </tr>
    <tr>
        <td>border-bottom</td>
        <td>下のボーダーの線種・太さ・色</td>
    </tr>
    <tr>
        <td>border-left</td>
        <td>左のボーダーの線種・太さ・色</td>
    </tr>
    <tr>
        <td>border-right</td>
        <td>右のボーダーの線種・太さ・色</td>
    </tr>
    <tr>
        <td>border</td>
        <td>上下左右のボーダーの線種・太さ・色(全てに同じ値を適用)</td>
    </tr>
</table>


使用例

```html
<table style="border-style:double dotted dashed groove">
    <tr>
        <td>border-style</td>
    </tr>
</table>
<br>
<table style="border-style:double; border-width:thin medium thick">
    <tr>
        <td>border-width</td>
    </tr>
</table>
```

表示例

<hr>
<table style="border-style:double dotted dashed groove">
    <tr>
        <td>border-style</td>
    </tr>
</table>
<br>
<table style="border-style:double; border-width:thin medium thick">
    <tr>
        <td>border-width</td>
    </tr>
</table>
<hr>

## ボックス関連のプロパティ

ボックス全体に関するプロパティを示す。

<table style="border:none;">
    <thead>
        <th style="border:none;">値の数</th>
        <th style="border:none;">適用箇所</th>
    </thead>
    <tr>
        <td style="border:none;">box-sizing</td>
        <td style="border:none;">適用箇所を示す。例として<br>content-box:要素内容を表示する領域のみ<br>border-box:ボーダー領域まで含める</td>
    </tr>
    <tr>
        <td style="border:none;">width</td>
        <td style="border:none;">ボックスの幅</td>
    </tr>
    <tr>
        <td style="border:none;">height</td>
        <td style="border:none;">ボックスの高さ</td>
    </tr>
    <tr>
        <td style="border:none;">min-width</td>
        <td style="border:none;">ボックスの最小の幅</td>
    </tr>
    <tr>
        <td style="border:none;">min-height</td>
        <td style="border:none;">ボックスの最小の高さ</td>
    </tr>
    <tr>
        <td style="border:none;">max-width</td>
        <td style="border:none;">ボックスの最大の幅</td>
    </tr>
    <tr>
        <td style="border:none;">max-height</td>
        <td style="border:none;">ボックスの最大の高さ</td>
    </tr>
</table>



使用例

```html
<p style="background-color: #66ff99;">p sample1</p>
<p style="background-color: #66ff99; width:200px">p sample2</p>
<p style="background-color: #66ff99; width:200px; height:200px">p sample3</p>
```

表示例

<hr>
<p style="background-color: #66ff99;">p sample1</p>
<p style="background-color: #66ff99; width:200px">p sample2</p>
<p style="background-color: #66ff99; width:200px; height:200px">p sample3</p>
<hr>


## border-radiusプロパティ

border-radiusプロパティは、ボックスの角を丸くするプロパティである。

<table>
    <thead>
        <th>プロパティ名</th>
        <th>設定対象</th>
    </thead>
    <tr>
        <td>border-top-left-radius</td>
        <td>左上の角丸</td>
    </tr>
    <tr>
        <td>border-top-right-radius</td>
        <td>右上の角丸</td>
    </tr>
    <tr>
        <td>border-bottom-right-radius</td>
        <td>右下の角丸</td>
    </tr>
    <tr>
        <td>border-bottom-left-radius</td>
        <td>左下の角丸</td>
    </tr>
    <tr>
        <td>border-radius</td>
        <td>上下左右の角丸(値1~4個)</td>
    </tr>
</table>

値には、丸くする部分を円の1/4とした時の円弧とした時の、円の半径を単位付きの数値(px,%など)で指定する。


使用例

```html
<p style="background-color: #66ff99; height:100px; border-radius: 10px">p 全10px</p>
<p style="background-color: #66ff99; height:100px; border-radius: 10px 30px">p 左上右下10px,右上左下30px</p>
<p style="background-color: #66ff99; height:100px; border-radius: 10px 30px 50px">p 左上10px,右上左下30px,右下50px</p>
<p style="background-color: #66ff99; height:100px; border-radius: 10px 30px 50px 70px">p 左上10px,右上30px,右下50px,左下70px</p>
```

表示例

<hr>
<p style="background-color: #66ff99; height:100px; border-radius: 10px">p 全10px</p>
<p style="background-color: #66ff99; height:100px; border-radius: 10px 30px">p 左上右下10px,右上左下30px</p>
<p style="background-color: #66ff99; height:100px; border-radius: 10px 30px 50px">p 左上10px,右上左下30px,右下50px</p>
<p style="background-color: #66ff99; height:100px; border-radius: 10px 30px 50px 70px">p 左上10px,右上30px,右下50px,左下70px</p>
<hr>


## box-shadowプロパティ


<table style="border:none;">
    <thead>
        <th style="border:none;">値</th>
        <th style="border:none;">意味</th>
    </thead>
    <tr>
        <td style="border:none;">数値(単位px)</td>
        <td style="border:none;">2~4個まで指定でき、意味は１個目から右にずらす範囲、下にずらす範囲、ぼかす範囲、四方に拡張させる範囲を表す。</td>
    </tr>
    <tr>
        <td style="border:none;">色を示す値</td>
        <td style="border:none;">影の色を示す。</td>
    </tr>
    <tr>
        <td style="border:none;">inset</td>
        <td style="border:none;">この値を入れると、影が内側に表示される。</td>
    </tr>
    <tr>
        <td style="border:none;">none</td>
        <td style="border:none;">影を表示しない。</td>
    </tr>
</table>


使用例

```html
<p style="background-color: #66ff99; height:50px; box-shadow:10px">p 右10px</p>
<br>
<p style="background-color: #66ff99; height:50px; box-shadow:10px 10px">p 右下10px</p>
<br>
<p style="background-color: #66ff99; height:50px; box-shadow:10px 10px 10px">p 右下10px, ぼかし10px</p>
<br>
<p style="background-color: #66ff99; height:50px; box-shadow:10px 10px 10px 10px">p 右下10px, ぼかし10px, 四方10px</p>
<br>
<p style="background-color: #66ff99; height:50px; box-shadow:10px 10px 10px 10px #663399">p 右下10px, ぼかし10px, 四方10px</p>
<br>
<p style="background-color: #66ff99; height:50px; box-shadow:10px 10px 10px 10px inset">p 右下10px, ぼかし10px, 四方10px</p>
```

表示例

<hr>
<p style="background-color: #66ff99; height:50px; box-shadow:10px">p 右10px</p>
<br>
<p style="background-color: #66ff99; height:50px; box-shadow:10px 10px">p 右下10px</p>
<br>
<p style="background-color: #66ff99; height:50px; box-shadow:10px 10px 10px">p 右下10px, ぼかし10px</p>
<br>
<p style="background-color: #66ff99; height:50px; box-shadow:10px 10px 10px 10px">p 右下10px, ぼかし10px, 四方10px</p>
<br>
<p style="background-color: #66ff99; height:50px; box-shadow:10px 10px 10px 10px #663399">p 右下10px, ぼかし10px, 四方10px</p>
<br>
<p style="background-color: #66ff99; height:50px; box-shadow:10px 10px 10px 10px inset">p 右下10px, ぼかし10px, 四方10px</p>
<hr>


## floatプロパティ

floatプロパティは、ボックスを左または右に寄せて配置し、後続の要素をその反対側に記載させるようにするプロパティである。

指定する値と意味は以下の通り。

<table style="border:none;">
    <thead>
        <th style="border:none;">値</th>
        <th style="border:none;">意味</th>
    </thead>
    <tr>
        <td style="border:none;">left</td>
        <td style="border:none;">ボックスを左側に寄せ、後続の要素を右側に配置させる</td>
    </tr>
    <tr>
        <td style="border:none;">right</td>
        <td style="border:none;">ボックスを右側に寄せ、後続の要素を左側に配置させる</td>
    </tr>
    <tr>
        <td style="border:none;">none</td>
        <td style="border:none;">ボックスを寄せない</td>
    </tr>
</table>

使用例

```
<img src="/css_sample_pages/img_small.jpg" style="float:left">
<p style="background-color: #66ff99;">p要素ボックス左</p>
<p style="background-color: #66ff99;">←左に画像</p>
<br>
<br>
<br>
<img src="/css_sample_pages/img_small.jpg" style="float:right">
<p style="background-color: #66ff99;">p要素ボックス右</p>
<p style="background-color: #66ff99;">右に画像→</p>
<br>
<br>
<br>
```

表示例

<hr>
<img src="/css_sample_pages/img_small.jpg" style="float:left">
<p style="background-color: #66ff99;">p要素ボックス左</p>
<p style="background-color: #66ff99;">←左に画像</p>
<br>
<br>
<br>
<img src="/css_sample_pages/img_small.jpg" style="float:right">
<p style="background-color: #66ff99;">p要素ボックス右</p>
<p style="background-color: #66ff99;">右に画像→</p>
<br>
<br>
<br>
<hr>


## clearプロパティ

clearプロパティは、floatプロパティで寄せられたボックスの反対側に、後続の要素がくる状態を解除するプロパティである。

指定する値と意味は以下の通り。

<table style="border:none;">
    <thead>
        <th style="border:none;">値</th>
        <th style="border:none;">意味</th>
    </thead>
    <tr>
        <td style="border:none;">left</td>
        <td style="border:none;">直前にfloat:leftがあった時、後続の要素が右に来るという状態を解除する</td>
    </tr>
    <tr>
        <td style="border:none;">right</td>
        <td style="border:none;">直前にfloat:rightがあった時、後続の要素が左に来るという状態を解除する</td>
    </tr>
    <tr>
        <td style="border:none;">both</td>
        <td style="border:none;">直前にfloat:leftまたはright があった時、後続の要素が左右どちらかに来るという状態を解除する</td>
    </tr>
    <tr>
        <td style="border:none;">none</td>
        <td style="border:none;">float関連の解除をしない</td>
    </tr>
</table>


使用例

```
<img src="/css_sample_pages/img_small.jpg" style="float:left">
<p style="background-color: #66ff99">p要素ボックス右<br>←左に画像</p>
<p style="clear:none">clearを指定しないと後続の要素も回り込みます</p>
<br>
<br>
<img src="/css_sample_pages/img_small.jpg" style="float:left">
<p style="background-color: #66ff99">p要素ボックス右<br>←左に画像</p>
<p style="clear:left">clearを指定すると後続の要素は回り込みません</p>
```

表示例

<hr>
<img src="/css_sample_pages/img_small.jpg" style="float:left">
<p style="background-color: #66ff99">p要素ボックス右<br>←左に画像</p>
<p style="clear:none">clearを指定しないと後続の要素も回り込みます</p>
<br>
<br>
<img src="/css_sample_pages/img_small.jpg" style="float:left">
<p style="background-color: #66ff99">p要素ボックス右<br>←左に画像</p>
<p style="clear:left">clearを指定すると後続の要素は回り込みません</p>
<hr>


## displayプロパティ

displayプロパティは、要素の表示形式を設定するプロパティである。

インライン要素をブロックレベル要素に、あるいはその逆などの表示をさせることができる。

<table>
    <thead>
        <th>プロパティ名</th>
        <th>設定対象</th>
    </thead>
    <tr>
        <td>inline</td>
        <td>インライン要素と同じ表示にする</td>
    </tr>
    <tr>
        <td>block</td>
        <td>ブロックレベル要素と同じ表示にする</td>
    </tr>
    <tr>
        <td>list-item</td>
        <td>リストと同じ表示にする</td>
    </tr>
    <tr>
        <td>table</td>
        <td>テーブル(table要素)と同じ表示にする</td>
    </tr>
    <tr>
        <td>inline-table</td>
        <td>インラインテーブルと同じ表示にする</td>
    </tr>
    <tr>
        <td>table-row-group</td>
        <td>tbody要素と同じ表示にする</td>
    </tr>
    <tr>
        <td>table-header-group</td>
        <td>thead要素と同じ表示にする</td>
    </tr>
    <tr>
        <td>table-footer-group</td>
        <td>tfoot要素と同じ表示にする</td>
    </tr>
    <tr>
        <td>table-row</td>
        <td>tr要素と同じ表示にする</td>
    </tr>
    <tr>
        <td>table-column-group</td>
        <td>colgroup要素と同じ表示にする</td>
    </tr>
    <tr>
        <td>table-column</td>
        <td>col要素と同じ表示にする</td>
    </tr>
    <tr>
        <td>table-cell</td>
        <td>td要素と同じ表示にする</td>
    </tr>
    <tr>
        <td>table-caption</td>
        <td>caption要素と同じ表示にする</td>
    </tr>
    <tr>
        <td>ruby</td>
        <td>ruby要素と同じ表示にする</td>
    </tr>
    <tr>
        <td>ruby-base</td>
        <td>rb要素と同じ表示にする</td>
    </tr>
    <tr>
        <td>ruby-text</td>
        <td>rt要素と同じ表示にする</td>
    </tr>
    <tr>
        <td>none</td>
        <td>ボックスが無い状態で表示する</td>
    </tr>
</table>

使用例

```html
<p style="background-color: #66ff99; display:block">ブロック1</p>
<p style="background-color: #66ff99; display:block">ブロック2</p>
<p style="background-color: #66ff99; display:block">ブロック3</p>
<p style="background-color: #66ff99; display:block">ブロック4</p>
<br>
<p style="background-color: #66ff99; display:inline">インライン1</p>
<p style="background-color: #66ff99; display:inline">インライン2</p>
<p style="background-color: #66ff99; display:inline">インライン3</p>
<p style="background-color: #66ff99; display:inline">インライン4</p>
```

表示例

<hr>
<p style="background-color: #66ff99; display:block">ブロック1</p>
<p style="background-color: #66ff99; display:block">ブロック2</p>
<p style="background-color: #66ff99; display:block">ブロック3</p>
<p style="background-color: #66ff99; display:block">ブロック4</p>
<br>
<p style="background-color: #66ff99; display:inline">インライン1</p>
<p style="background-color: #66ff99; display:inline">インライン2</p>
<p style="background-color: #66ff99; display:inline">インライン3</p>
<p style="background-color: #66ff99; display:inline">インライン4</p>
<hr>


## visibilityプロパティ

visiblityプロパティは、ボックスが透明になったかのように見えなくさせることのできるプロパティである。


指定する値と意味は以下の通り。

<table style="border:none;">
    <thead>
        <th style="border:none;">値</th>
        <th style="border:none;">意味</th>
    </thead>
    <tr>
        <td style="border:none;">visible</td>
        <td style="border:none;">ボックスを見える状態にする</td>
    </tr>
    <tr>
        <td style="border:none;">hidden</td>
        <td style="border:none;">ボックスを見えなくさせる</td>
    </tr>
    <tr>
        <td style="border:none;">collapse</td>
        <td style="border:none;">テーブル内の要素に指定された場合、その要素は表示されなくなる</td>
    </tr>
</table>


使用例

```
<p>下に画像３個、２個目をhiddenさせる</p>
<img src="/css_sample_pages/img_small.jpg" style="display:inline">
<img src="/css_sample_pages/img_small.jpg" style="display:inline; visibility:hidden">
<img src="/css_sample_pages/img_small.jpg" style="display:inline">
<br>
<br>
<p>表</p>
<table style="border:none;">
    <tr>
        <td style="border:none;">0,0</td>
        <td style="border:none; visibility:collapse">1,0</td>
        <td style="border:none;">2,0</td>
    </tr>
    <tr>
        <td style="border:none; visibility:collapse">0,1</td>
        <td style="border:none;">1,1</td>
        <td style="border:none; visibility:collapse">2,1</td>
    </tr>
    <tr>
        <td style="border:none;">0,2</td>
        <td style="border:none; visibility:collapse">1,2</td>
        <td style="border:none;">2,2</td>
    </tr>
</table>
```

表示例

<hr>
<p>下に画像３個、２個目をhiddenさせる</p>
<img src="/css_sample_pages/img_small.jpg" style="display:inline">
<img src="/css_sample_pages/img_small.jpg" style="display:inline; visibility:hidden">
<img src="/css_sample_pages/img_small.jpg" style="display:inline">
<br>
<br>
<p>表</p>
<table style="border:none;">
    <tr>
        <td style="border:none;">0,0</td>
        <td style="border:none; visibility:collapse">1,0</td>
        <td style="border:none;">2,0</td>
    </tr>
    <tr>
        <td style="border:none; visibility:collapse">0,1</td>
        <td style="border:none;">1,1</td>
        <td style="border:none; visibility:collapse">2,1</td>
    </tr>
    <tr>
        <td style="border:none;">0,2</td>
        <td style="border:none; visibility:collapse">1,2</td>
        <td style="border:none;">2,2</td>
    </tr>
</table>
<hr>


## overflowプロパティ

overflowプロパティは、要素内容がボックスに入りきらなくなった時に、はみ出た部分を表示するかしないかなどの設定をするプロパティである。

指定する値と意味は以下の通り。

<table style="border:none;">
    <thead>
        <th style="border:none;">値</th>
        <th style="border:none;">意味</th>
    </thead>
    <tr>
        <td style="border:none;">visible</td>
        <td style="border:none;">ボックスからはみ出た部分も表示する</td>
    </tr>
    <tr>
        <td style="border:none;">hidden</td>
        <td style="border:none;">ボックスからはみ出た部分は表示しない</td>
    </tr>
    <tr>
        <td style="border:none;">scroll</td>
        <td style="border:none;">ボックスからはみ出た部分は表示しないが、スクロールによって表示できるようにする</td>
    </tr>
    <tr>
        <td style="border:none;">auto</td>
        <td style="border:none;">状況に応じてスクロール可能にする</td>
    </tr>
</table>

使用例

```
<p style="background-color: #66ff99; height:100px; width:100px; overflow:visible">
あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん
</p>
<br>
<br>
<br>
<p style="background-color: #66ff99; height:100px; width:100px; overflow:hidden">
あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん
</p>
<br>
<br>
<br>
<p style="background-color: #66ff99; height:100px; width:100px; overflow:scroll">
あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん
</p>
```

表示例

<hr>
<p style="background-color: #66ff99; height:100px; width:100px; overflow:visible">
あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん
</p>
<br>
<br>
<br>
<p style="background-color: #66ff99; height:100px; width:100px; overflow:hidden">
あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん
</p>
<br>
<br>
<br>
<p style="background-color: #66ff99; height:100px; width:100px; overflow:scroll">
あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん
</p>
<hr>

