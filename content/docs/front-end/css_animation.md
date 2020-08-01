---
title: "アニメーション"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# CSSのアニメーション

CSSで行えるアニメーションについてをここで述べる。


# 回転・拡大縮小・移動

ボックスを回転・拡大縮小・移動などさせるプロパティについてを述べる。


## transformプロパティ

transformプロパティは、ボックスを回転・拡大縮小・移動・変形を行うプロパティである。

<table style="border:none;">
    <thead>
        <th style="border:none;">値</th>
        <th style="border:none;">意味</th>
    </thead>
    <tr>
        <td style="border:none;">none</td>
        <td style="border:none;">変形しない</td>
    </tr>
    <tr>
        <td style="border:none;">rotate(角度)</td>
        <td style="border:none;">指定した数値分、時計回りに回転させる</td>
    </tr>
    <tr>
        <td style="border:none;">scale(数値,数値)</td>
        <td style="border:none;">指定した数値分、横方向、縦方向の順に拡大縮小する</td>
    </tr>
    <tr>
        <td style="border:none;">scaleX(数値)</td>
        <td style="border:none;">指定した数値分、横方向に拡大縮小する</td>
    </tr>
    <tr>
        <td style="border:none;">scaleY(数値)</td>
        <td style="border:none;">指定した数値分、縱方向に拡大縮小する</td>
    </tr>
    <tr>
        <td style="border:none;">translate(単位付きの数値,単位付きの数値)</td>
        <td style="border:none;">指定した数値分、右方向、下方向の順に移動する</td>
    </tr>
    <tr>
        <td style="border:none;">translateX(単位付きの数値)</td>
        <td style="border:none;">指定した数値分、右方向の順に移動する</td>
    </tr>
    <tr>
        <td style="border:none;">translateY(単位付きの数値)</td>
        <td style="border:none;">指定した数値分、下方向の順に移動する</td>
    </tr>    
    <tr>
        <td style="border:none;">skew(角度)</td>
        <td style="border:none;">指定した数値分、x軸に沿った角度、y軸に沿った角度分、傾斜させる</td>
    </tr>
    <tr>
        <td style="border:none;">skewX(角度)</td>
        <td style="border:none;">指定した数値分、x軸に沿った分傾斜させる</td>
    </tr>
    <tr>
        <td style="border:none;">skewY(角度)</td>
        <td style="border:none;">指定した数値分、y軸に沿った分傾斜させる</td>
    </tr>
</table>

ここで、角度とは数値に以下の単位をつけたものである。


<table style="border:none;">
    <thead>
        <th style="border:none;">値</th>
        <th style="border:none;">意味</th>
    </thead>
    <tr>
        <td style="border:none;">deg</td>
        <td style="border:none;">度</td>
    </tr>
    <tr>
        <td style="border:none;">grad</td>
        <td style="border:none;">グラード(円周の1/400を1とする単位)</td>
    </tr>
    <tr>
        <td style="border:none;">rad</td>
        <td style="border:none;">ラジアン</td>
    </tr>
    <tr>
        <td style="border:none;">turn</td>
        <td style="border:none;">ターン(円周を1とする単位)</td>
    </tr>
</table>


使用例

```
<p style="background-color:red; width:200px; height:200px;">０度</p>
<p style="background-color:red; width:200px; height:200px; transform:rotate(30deg)">３０度</p>
<p style="background-color:red; width:200px; height:200px; transform:rotate(45deg)">４５度</p>
<p style="background-color:red; width:200px; height:200px; transform:rotate(90deg)">９０度</p>

<p style="background-color:green; width:200px; height:200px;">０度</p>
<p style="background-color:green; width:200px; height:200px; transform:skewX(30deg);">３０度</p>
<p style="background-color:green; width:200px; height:200px; transform:skewX(45deg);">４５度</p>
<p style="background-color:green; width:200px; height:200px; transform:skewX(60deg);">６０度</p>
```


表示例

<hr>
<p style="background-color:red; width:200px; height:200px;">０度</p>
<p style="background-color:red; width:200px; height:200px; transform:rotate(30deg)">３０度</p>
<p style="background-color:red; width:200px; height:200px; transform:rotate(45deg)">４５度</p>
<p style="background-color:red; width:200px; height:200px; transform:rotate(90deg)">９０度</p>

<p style="background-color:green; width:200px; height:200px;">０度</p>
<p style="background-color:green; width:200px; height:200px; transform:skewX(30deg);">３０度</p>
<p style="background-color:green; width:200px; height:200px; transform:skewX(45deg);">４５度</p>
<p style="background-color:green; width:200px; height:200px; transform:skewX(60deg);">６０度</p>
<hr>


## transform-originプロパティ

transform-originプロパティは、transformプロパティでボックスを回転・移動・変形させる時に、原点とする位置を設定するプロパティである。

指定する値と意味は以下の通り。なお、値は1~3つまで指定出来る。1つ目は横方向の左からの位置、2つ目は縦方向の上からの位置、3つ目は3D用のz方向の位置を示す。

<table style="border:none;">
    <thead>
        <th style="border:none;">値</th>
        <th style="border:none;">意味</th>
    </thead>
    <tr>
        <td style="border:none;">単位付きの数値</td>
        <td style="border:none;">ボックスの左上からの距離</td>
    </tr>
    <tr>
        <td style="border:none;">パーセンテージ</td>
        <td style="border:none;">ボックスの大きさに対するパーセンテージ</td>
    </tr>
    <tr>
        <td style="border:none;">top</td>
        <td style="border:none;">縦方向の0%</td>
    </tr>
    <tr>
        <td style="border:none;">bottom</td>
        <td style="border:none;">縦方向の100%</td>
    </tr>
    <tr>
        <td style="border:none;">center</td>
        <td style="border:none;">縦方向の50%/横方向の50%</td>
    </tr>
    <tr>
        <td style="border:none;">left</td>
        <td style="border:none;">横方向の0%</td>
    </tr>
    <tr>
        <td style="border:none;">right</td>
        <td style="border:none;">横方向の100%</td>
    </tr>
</table>


使用例

```
<div style="border-style: double; height: 100px; width: 100px; padding: 0px; margin:0px">
<p style="background-color:red; width:95px; height:95px; padding:0px; margin:0px; transform:rotate(45deg);">center center(デフォルト)を中心に45度回転</p>
</div>
<br>
<br>
<div style="border-style: double; height: 100px; width: 100px; padding: 0px; margin:0px">
<p style="background-color:red; width:95px; height:95px; padding:0px; margin:0px; transform:rotate(45deg); transform-origin:right bottom;">right bottom(右下)を中心に45度回転</p>
</div>
```

表示例

<hr>
<div style="border-style: double; height: 100px; width: 100px; padding: 0px; margin:0px">
<p style="background-color:red; width:95px; height:95px; padding:0px; margin:0px; transform:rotate(45deg);">center center(デフォルト)を中心に45度回転</p>
</div>
<br>
<br>
<div style="border-style: double; height: 100px; width: 100px; padding: 0px; margin:0px">
<p style="background-color:red; width:95px; height:95px; padding:0px; margin:0px; transform:rotate(45deg); transform-origin:right bottom;">right bottom(右下)を中心に45度回転</p>
</div>
<hr>


# トランジション

例えばセレクタの:hoverを使うとカーソルが上に来た時に、:activeを使うとクリックした時に、そこの表示が別の状態に切り替わる。その切り替わりを滑らかに変化させるのがCSSで言う**トランジション**である。

トランジションは、ある状態から別のある状態へと移る二状態の変化を表現できる。このセクションでは、トランジションに関するプロパティについてを述べる。


## transition-property プロパティ

transition-propertyは、トランジションを適用するプロパティ名を指定するプロパティである<sub style="color:gray">(ややこしい・・)</sub>


<table style="border:none;">
    <thead>
        <th style="border:none;">値</th>
        <th style="border:none;">意味</th>
    </thead>
    <tr>
        <td style="border:none;">プロパティ名</td>
        <td style="border:none;">アクション時にトランジションを適用したいプロパティ名。空白区切りで複数入力可</td>
    </tr>
    <tr>
        <td style="border:none;">all</td>
        <td style="border:none;">トランジション適用可能な全てのプロパティに適用する</td>
    </tr>
    <tr>
        <td style="border:none;">none</td>
        <td style="border:none;">適用しない</td>
    </tr>
</table>

(使用例は次にまとめる)

## transition-duration プロパティ

transition-durationプロパティは、トランジションをどれほどの時間をかけて実行するかを設定するプロパティである。

値は単位付きの数値で、単位はs（秒）,ms（ミリ秒）のいずれかで指定する。


使用例(css)


```css
div.duration {
    border-style: double; height: 100px; width: 100px; 
    padding: 0px; margin:0px
}

p.sample1 {
    background-color:red; width:100px; height:100px; 
    padding:0px; margin:0px; 
    transition-property: transform;
    transition-duration: 5s;
}

p.sample1:hover{
    transform:rotate(360deg);
}

p.sample2 {
    background-color:red; width:100px; height:100px; 
    padding:0px; margin:0px; 
    transition-property: background-color;
    transition-duration: 5s;
}

p.sample2:active{
    background-color:yellow;
}

```

使用例（html、コード載せると何故か変になる・・のでスクショを記載）

<img src="/img/front-end/transition-duration.png" width=100%>



表示例

<hr>
<iframe width="400" height="300" src="/css_sample_pages/transition-duration.html">
</iframe>
<hr>


## transition-timing-function プロパティ

transition-timing-functionプロパティは、トランジションの速度を一定にしたり、変化をつけた速度に設定するプロパティである。

指定する値と意味は以下の通り。

<table style="border:none;">
    <thead>
        <th style="border:none;">値</th>
        <th style="border:none;">意味</th>
    </thead>
    <tr>
        <td style="border:none;">ease</td>
        <td style="border:none;">加速をつけて、ゆっくり始まり、ゆっくり終わる（デフォルト）</td>
    </tr>
    <tr>
        <td style="border:none;">ease-in</td>
        <td style="border:none;">ゆっくり始まり、一定速度で終わる</td>
    </tr>
    <tr>
        <td style="border:none;">ease-out</td>
        <td style="border:none;">一定速度で始まり、ゆっくり終わる</td>
    </tr>
    <tr>
        <td style="border:none;">ease-in-out</td>
        <td style="border:none;">ゆっくり始まり、ゆっくり終わる</td>
    </tr>
    <tr>
        <td style="border:none;">linear</td>
        <td style="border:none;">最初から最後まで一定速度</td>
    </tr>
</table>



使用例（css）


```css
div.timing {
    border-style: double; height: 100px; width: 100px; 
    padding: 0px; margin:0px
}

p.timing1 {
    background-color:red; width:100px; height:100px; 
    padding:0px; margin:0px; 
    transition-property: transform;
    transition-duration: 5s;
    transition-timing-function: ease;
}

p.timing2 {
    background-color:red; width:100px; height:100px; 
    padding:0px; margin:0px; 
    transition-property: background-color;
    transition-duration: 5s;
    transition-timing-function: linear;
}

p[class^="timing"]:hover{
    transform:rotate(360deg);
}
```


使用例（html、ここもコード載せると何故か変になる・・のでスクショを記載）

<img src="/img/front-end/transition-timing-function.png" width=100%>


表示例

<hr>
<iframe width="400" height="300" src="/css_sample_pages/transition-timing-function.html">
</iframe>
<hr>


## transition-delay プロパティ

transition-delayプロパティは、トランジションの開始を遅らせるプロパティである。

値には、時間の単位をつけた数値を指定する。


使用例（css）


```css
div.delay {
    border-style: double; height: 100px; width: 100px; 
    padding: 0px; margin:0px
}

p.delay1 {
    background-color:red; width:100px; height:100px; 
    padding:0px; margin:0px; 
    transition-property: transform;
    transition-duration: 5s;
}

p.delay2 {
    background-color:red; width:100px; height:100px; 
    padding:0px; margin:0px; 
    transition-property: transform;
    transition-duration: 5s;
    transition-delay: 3s;
}

p[class^="delay"]:hover{
    transform:rotate(360deg);
}
```


使用例（html、ここもコード載せると何故か変になる・・のでスクショを記載）

<img src="/img/front-end/transition-delay.png" width=100%>


表示例

<hr>
<iframe width="400" height="300" src="/css_sample_pages/transition-delay.html">
</iframe>
<hr>


## transition プロパティ

transitionプロパティは、これまでのtransition関連のプロパティの値をまとめて指定出来るプロパティである。

値は空白で区切って複数指定可能である。


使用例（css）

```css
p {
    background-color:red; width:100px; height:100px; 
    padding:0px; margin:0px; 
    transition: transform 5s linear;
}

p:hover{
    transform:rotate(360deg);
}
```

（html）

```html
<p>カーソル乗せると一回転！(linear)</p>
```

表示例

<hr>
<iframe width="400" height="300" src="/css_sample_pages/transition.html">
</iframe>
<hr>

