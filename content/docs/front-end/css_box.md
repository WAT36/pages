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
<p style="background-color: #66ff99; float:left">p要素ボックス左<br>右に画像→</p>
<img src="/css_sample_pages/img_small.jpg">
<br>
<p style="background-color: #66ff99; float:right">p要素ボックス右<br>←左に画像</p>
<img src="/css_sample_pages/img_small.jpg">
```

表示例

<hr>
<p style="background-color: #66ff99; float:left">p要素ボックス左<br>右に画像→</p>
<img src="/css_sample_pages/img_small.jpg">
<br>
<p style="background-color: #66ff99; float:right">p要素ボックス右<br>←左に画像</p>
<img src="/css_sample_pages/img_small.jpg">
<hr>
