---
title: "アニメーション"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# CSSのアニメーション

CSSで行えるアニメーションについてを述べる。


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


使用例（html、スクショを記載）

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


使用例（html、スクショを記載）

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


# アニメーション

CSSで言うアニメーションとは、トランジションを連続して行わせたような動きのことを言う。

それを実現するために、CSSではキーフレームという書式を使って表現する。


## @keyframes (キーフレーム)

CSSのアニメーションでは、いつのタイミングでどのような動作をさせるかの指定を、**キーフレーム**と呼ばれる書式で記述する。

書式としては、まず最初に@keyframesと書き、その後にキーフレームの名前を書く。

その後は中括弧{}で囲み、その中に動作させるタイミングを開始時を0%としたパーセンテージで指定して記載する。

その後にまた中括弧{}を書いて囲み、その中に動作させる内容を記載させる、と言う書式である。

```
@keyframe (キーフレームの名前) {

    0% {
        プロパティ名: 値
        ・・・
    }

    30% {
        プロパティ名: 値
        ・・・        
    }

    ・・・
}
```

## animation-name プロパティ

animation-nameプロパティは、キーフレーム名を指定して実行させるためのプロパティである。

（使用例は次節でまとめて記載）


## animation-duration プロパティ

animation-durationプロパティは、アニメーションの再生時間を設定するプロパティである。

値は単位付きの数値で、単位はs（秒）,ms（ミリ秒）のいずれかで指定する。


使用例（css）

```css
@keyframes key1 {
    0%{
        background-color:red; 
    }

    20%{
        background-color:yellow; 
    }

    40%{
        background-color:green; 
    }

    60%{
        background-color:blue; 
    }

    80%{
        background-color:purple; 
    }

    100%{
        background-color:red; 
    }
}

p {
    width:100px; height:100px; 
    padding:0px; margin:0px; 
    animation-name: key1; 
    animation-duration: 30s; 
}
```

使用例（html）

```html
<p>色変化！（一回のみ）</p>
```

表示例

<hr>
<iframe width="400" height="300" src="/css_sample_pages/animation-duration.html">
</iframe>
<hr>


## animation-timing-function プロパティ

animation-timing-functionプロパティは、トランジションの時と同様に、アニメーションにおける速度を一定にしたり、変化をつけた速度に設定するプロパティである。

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

@keyframes key1 {
    0%{
        transform: translate(0px,0px);
    }

    25%{
        transform: translate(200px,0px) rotate(90deg);
    }

    50%{
        transform: translate(200px,200px) rotate(180deg);
    }

    75%{
        transform: translate(0px,200px) rotate(270deg);
    }

    100%{
        transform: translate(0px,0px) rotate(360deg);
    }
}

p {
    width:100px; height:100px; 
    padding:0px; margin:0px; 
    background-color:red; 
    animation-name: key1; 
    animation-duration: 30s; 
    animation-timing-function: linear;
}

```


使用例（html）

```
<p>一回転！（一回のみ）</p>
```


表示例

<hr>
<iframe width="400" height="400" src="/css_sample_pages/animation-timing-function.html">
</iframe>
<hr>


## animation-delayプロパティ

animation-delayプロパティは、アニメーションの開始を遅らせるプロパティである。

値は単位付きの数値で、単位はs（秒）,ms（ミリ秒）のいずれかで指定する。



使用例（css）


```css

@keyframes key1 {
    0%{
        transform: translate(0px,0px);
    }

    25%{
        transform: translate(200px,0px) rotate(90deg);
    }

    50%{
        transform: translate(200px,200px) rotate(180deg);
    }

    75%{
        transform: translate(0px,200px) rotate(270deg);
    }

    100%{
        transform: translate(0px,0px) rotate(360deg);
    }
}

p {
    width:100px; height:100px; 
    padding:0px; margin:0px; 
    background-color:red; 
    animation-name: key1; 
    animation-duration: 30s; 
    animation-timing-function: linear;
    animation-delay: 5s;
}

```


使用例（html）

```
<p>5秒後に一回転！（一回のみ）</p>
```


表示例

<hr>
<iframe width="400" height="400" src="/css_sample_pages/animation-delay.html">
</iframe>
<hr>

## animation-iteration-countプロパティ

animation-iteration-countプロパティは、アニメーションを何回繰り返して再生させるかを設定するプロパティである。

<table style="border:none;">
    <thead>
        <th style="border:none;">値</th>
        <th style="border:none;">意味</th>
    </thead>
    <tr>
        <td style="border:none;">数値</td>
        <td style="border:none;">再生する回数</td>
    </tr>
    <tr>
        <td style="border:none;">infinite</td>
        <td style="border:none;">無限に繰り返す</td>
    </tr>
</table>


使用例（css）


```css

@keyframes key1 {
    0%{
        transform: translate(0px,0px);
    }

    25%{
        transform: translate(200px,0px) rotate(90deg);
    }

    50%{
        transform: translate(200px,200px) rotate(180deg);
    }

    75%{
        transform: translate(0px,200px) rotate(270deg);
    }

    100%{
        transform: translate(0px,0px) rotate(360deg);
    }
}

p {
    width:100px; height:100px; 
    padding:0px; margin:0px; 
    background-color:red; 
    animation-name: key1; 
    animation-duration: 10s; 
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

```


使用例（html）

```
<p>無限に一回転！</p>
```


表示例

<hr>
<iframe width="400" height="400" src="/css_sample_pages/animation-iteration-count.html">
</iframe>
<hr>


## animation-direction プロパティ

animation-directionプロパティは、再生・逆再生の指定を行えるプロパティである。

指定する値と意味は以下の通り。

<table style="border:none;">
    <thead>
        <th style="border:none;">値</th>
        <th style="border:none;">意味</th>
    </thead>
    <tr>
        <td style="border:none;">normal</td>
        <td style="border:none;">キーフレーム通りに再生</td>
    </tr>
    <tr>
        <td style="border:none;">reverse</td>
        <td style="border:none;">キーフレームの逆順に再生する</td>
    </tr>
    <tr>
        <td style="border:none;">alternate</td>
        <td style="border:none;">再生と逆再生を繰り返して行う</td>
    </tr>
    <tr>
        <td style="border:none;">alternate-reverse</td>
        <td style="border:none;">逆再生と再生を繰り返して行う</td>
    </tr>
</table>




使用例（css）


```css

@keyframes key1 {
    0%{
        transform: translate(0px,0px);
    }

    25%{
        transform: translate(200px,0px) rotate(90deg);
    }

    50%{
        transform: translate(200px,200px) rotate(180deg);
    }

    75%{
        transform: translate(0px,200px) rotate(270deg);
    }

    100%{
        transform: translate(0px,0px) rotate(360deg);
    }
}

p {
    width:100px; height:100px; 
    padding:0px; margin:0px; 
    background-color:red; 
    animation-name: key1; 
    animation-duration: 10s; 
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

```


使用例（html）

```
<p>alternate:右回転と左回転順々</p>
```


表示例

<hr>
<iframe width="400" height="400" src="/css_sample_pages/animation-direction.html">
</iframe>
<hr>


## animation-play-state プロパティ

animation-play-stateプロパティは、アニメーションの再生を一時停止させる際に使用するプロパティである。

指定する値と意味は以下の通り。

<table style="border:none;">
    <thead>
        <th style="border:none;">値</th>
        <th style="border:none;">意味</th>
    </thead>
    <tr>
        <td style="border:none;">running</td>
        <td style="border:none;">アニメーションを再生する</td>
    </tr>
    <tr>
        <td style="border:none;">paused</td>
        <td style="border:none;">アニメーションを一時停止させる</td>
    </tr>
</table>



使用例（css）


```css

@keyframes key1 {
    0%{
        transform: translate(0px,0px);
    }

    25%{
        transform: translate(200px,0px) rotate(90deg);
    }

    50%{
        transform: translate(200px,200px) rotate(180deg);
    }

    75%{
        transform: translate(0px,200px) rotate(270deg);
    }

    100%{
        transform: translate(0px,0px) rotate(360deg);
    }
}

p {
    width:100px; height:100px; 
    padding:0px; margin:0px; 
    background-color:red; 
    animation-name: key1; 
    animation-duration: 10s; 
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-play-state: paused;
}

```


使用例（html）

```
<p>alternate:右回転と左回転順々せずにポーズ状態</p>
```


表示例

<hr>
<iframe width="400" height="400" src="/css_sample_pages/animation-play-state.html">
</iframe>
<hr>


## animation-fill-modeプロパティ

animation-fill-modeプロパティは、animation-delayプロパティによって再生が遅延されている間の表示、及び再生終了時の表示を設定するプロパティである。

<table style="border:none;">
    <thead>
        <th style="border:none;">値</th>
        <th style="border:none;">意味</th>
    </thead>
    <tr>
        <td style="border:none;">forwards</td>
        <td style="border:none;">再生終了後はキーフレームの100%の表示のままにする</td>
    </tr>
    <tr>
        <td style="border:none;">backwards</td>
        <td style="border:none;">遅延して再生されてない間はキーフレームの0%の表示にする</td>
    </tr>
    <tr>
        <td style="border:none;">both</td>
        <td style="border:none;">再生終了後はキーフレームの100%、遅延して再生されてない間はキーフレームの0%の表示にする</td>
    </tr>
    <tr>
        <td style="border:none;">none</td>
        <td style="border:none;">キーフレームとは無関係に表示する</td>
    </tr>
</table>



使用例（css）


```css

@keyframes key1 {
    0%{
        background-color: black;
        color: white;
        transform: translate(0px,0px);
    }

    25%{
        background-color: red;
        color: white;
        transform: translate(200px,0px) rotate(90deg);
    }

    50%{
        background-color: yellow;
        color: white;
        transform: translate(200px,200px) rotate(180deg);
    }

    75%{
        background-color: green;
        color: white;
        transform: translate(0px,200px) rotate(270deg);
    }

    100%{
        background-color: white;
        color: black;
        transform: translate(0px,0px) rotate(360deg);
    }
}

p {
    width:100px; height:100px; 
    padding:0px; margin:0px; 
    animation-name: key1; 
    animation-duration: 10s; 
    animation-timing-function: linear;
    animation-delay: 10s;
    animation-fill-mode: both;
}

```


使用例（html）

```
<p>10秒後に開始・最後は白ボックスのまま</p>
```


表示例

<hr>
<iframe width="400" height="400" src="/css_sample_pages/animation-fill-mode.html">
</iframe>
<hr>


## animationプロパティ

animationプロパティは、これまでのアニメーション関連のプロパティの値をまとめて指定出来るプロパティである。

時間を表す値については、1つ目がanimation-durationプロパティ、2つ目がanimation-delayプロパティの値を示す。

使用例（css）


```css

@keyframes key1 {
    0%{
        background-color: white;
        transform: translate(0px,0px);
    }

    25%{
        background-color: red;
        transform: translate(200px,0px) rotate(90deg);
    }

    50%{
        background-color: yellow;
        transform: translate(200px,200px) rotate(180deg);
    }

    75%{
        background-color: green;
        transform: translate(0px,200px) rotate(270deg);
    }

    100%{
        background-color: white;
        transform: translate(0px,0px) rotate(360deg);
    }
}

p {
    width:100px; height:100px; 
    padding:0px; margin:0px; 
    animation: key1 10s linear 10s infinite;
}

```


使用例（html）

```
<p>10秒後に開始して無限に一回転</p>
```


表示例

<hr>
<iframe width="400" height="400" src="/css_sample_pages/animation.html">
</iframe>
<hr>
