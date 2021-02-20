---
title: "グラフィックス・アニメーション"
weight: 1
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: true
---

# グラフィックス・アニメーション

グラフィックス及びアニメーションについてを述べる。

# Canvas(2D)

Canvasを利用すると、Javascriptでブラウザ上に図を描画することができる。

Canvasを利用するには、HTMLでcanvas要素を用意する。

html

```html
<canvas id="sample" width="100" height="100"></canvas>
```

Javascriptから、このcanvas要素を参照し、図の描画を行う。

Javascriptのサンプルコードを以下に示す。

```javascript
//canvas要素取得
var canvas = document.getElementById('sample');
//2d用　コンテキストオブジェクト取得
var context = canvas.getContext('2d');

//円を描画
context.beginPath();
context.fillStyle = "red"
context.arc(30,30,20,0,Math.PI*2,false);
context.stroke();
```


表示例

<hr>
<hr>
<canvas id="sample" width="100" height="100"></canvas>
<script type="text/javascript" src="/js_sample_pages/graphics_sample.js"></script>
<hr>
<hr>

javascriptでは、まずcanvas要素を取得して、その後にgetContext()関数で'2d'を指定する事で2d用のコンテキストオブジェクトを取得する。

その後に、コンテキストオブジェクトのプロパティ、関数を利用して図形の描画を行う。

コンテキストオブジェクトの主なプロパティ、関数は以下の通り。

<table style="border:none;">
    <tr>
        <th style="border:none;">プロパティ名</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">canvas</td>
        <td style="border:none;">操作しているcanvasオブジェクト</td>
    </tr>
    <tr>
        <td style="border:none;">globalAlpha</td>
        <td style="border:none;">図の透明度</td>
    </tr>
    <tr>
        <td style="border:none;">globalCompositeOperation</td>
        <td style="border:none;">図の合成方法</td>
    </tr>
    <tr>
        <td style="border:none;">strokeStyle</td>
        <td style="border:none;">線の色やスタイル</td>
    </tr>
    <tr>
        <td style="border:none;">fillStyle</td>
        <td style="border:none;">塗り潰しの色やスタイル</td>
    </tr>
    <tr>
        <td style="border:none;">shadowOffsetX</td>
        <td style="border:none;">水平方向の影の距離</td>
    </tr>
    <tr>
        <td style="border:none;">shadowOffsetY</td>
        <td style="border:none;">垂直方向の影の距離</td>
    </tr>
    <tr>
        <td style="border:none;">shadowBlur</td>
        <td style="border:none;">影のぼかし効果の設定</td>
    </tr>
    <tr>
        <td style="border:none;">shadowColor</td>
        <td style="border:none;">影の色</td>
    </tr>
    <tr>
        <td style="border:none;">lineWidth</td>
        <td style="border:none;">線の幅</td>
    </tr>
    <tr>
        <td style="border:none;">lineCap</td>
        <td style="border:none;">線の端の形状</td>
    </tr>
    <tr>
        <td style="border:none;">lineJoin</td>
        <td style="border:none;">線の接合箇所の形状</td>
    </tr>
    <tr>
        <td style="border:none;">font</td>
        <td style="border:none;">テキストのフォント</td>
    </tr>
</table>


<table style="border:none;">
    <tr>
        <th style="border:none;">関数</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">save()</td>
        <td style="border:none;">現在の描画状態を保存する</td>
    </tr>
    <tr>
        <td style="border:none;">scale()</td>
        <td style="border:none;">拡大・縮小する</td>
    </tr>
    <tr>
        <td style="border:none;">rotate()</td>
        <td style="border:none;">回転する</td>
    </tr>
    <tr>
        <td style="border:none;">createLinearGradient()</td>
        <td style="border:none;">線形グラデーションを指定する</td>
    </tr>
    <tr>
        <td style="border:none;">createRadialGradient()</td>
        <td style="border:none;">円形グラデーションを指定する</td>
    </tr>
    <tr>
        <td style="border:none;">clearRect()</td>
        <td style="border:none;">四角形の形にクリアする</td>
    </tr>
    <tr>
        <td style="border:none;">fillRect()</td>
        <td style="border:none;">塗り潰された四角形を描く</td>
    </tr>
    <tr>
        <td style="border:none;">strokeRect()</td>
        <td style="border:none;">輪郭の四角形を描く</td>
    </tr>
    <tr>
        <td style="border:none;">fill()</td>
        <td style="border:none;">現在の塗り潰し設定で塗りつぶす</td>
    </tr>
    <tr>
        <td style="border:none;">stroke()</td>
        <td style="border:none;">現在のスタイルで輪郭を描く</td>
    </tr>
    <tr>
        <td style="border:none;">beginPath()</td>
        <td style="border:none;">現在のパスをリセットする</td>
    </tr>
    <tr>
        <td style="border:none;">fillText()</td>
        <td style="border:none;">塗り潰しのテキストを指定した座標に描画する</td>
    </tr>
    <tr>
        <td style="border:none;">strokeText()</td>
        <td style="border:none;">輪郭のテキストを指定した座標に描画する</td>
    </tr>
    <tr>
        <td style="border:none;">moveTo()</td>
        <td style="border:none;">新しい開始点を座標指定する</td>
    </tr>
    <tr>
        <td style="border:none;">lineTo()</td>
        <td style="border:none;">直前の座標と指定した座標を結ぶ直線を引く</td>
    </tr>
    <tr>
        <td style="border:none;">quadraticCurveTo()</td>
        <td style="border:none;">２次ベジェ曲線を引く</td>
    </tr>
    <tr>
        <td style="border:none;">bezierCurveTo()</td>
        <td style="border:none;">３次ベジェ曲線を引く</td>
    </tr>
    <tr>
        <td style="border:none;">arcTo()</td>
        <td style="border:none;">直前の座標と直線で繋がる円弧を作成する</td>
    </tr>
    <tr>
        <td style="border:none;">rect()</td>
        <td style="border:none;">四角形を描画する</td>
    </tr>
    <tr>
        <td style="border:none;">arcTo()</td>
        <td style="border:none;">円弧を描画する</td>
    </tr>
</table>

色々使った例を以下に示す。

html

```html
<canvas id="sample2" width="400" height="200"></canvas>
```

Javascript

```javascript
//canvas要素取得
var canvas2 = document.getElementById('sample2');
//2d用　コンテキストオブジェクト取得
var context2 = canvas2.getContext('2d');

//円を描画
context2.beginPath();
context2.strokeStyle = "red";
context2.fillStyle = "yellow";
context2.arc(30,30,20,0,Math.PI*2,false);
context2.stroke();
context2.fill();

//四角形を描画
context2.beginPath();
context2.strokeStyle = "blue";
context2.fillStyle = "green";
context2.rect(10,120,40,40);
context2.stroke();

//テキスト
context2.beginPath();
context2.strokeStyle = "black";
context2.fillStyle = "white";
context2.strokeText('Text',200,40);
context2.fillText('Text',200,80);

//線
context2.beginPath();
context2.lineWidth = 1;
context2.moveTo(200,120);
context2.lineTo(250,120);
context2.stroke();
context2.beginPath();
context2.lineWidth = 5;
context2.moveTo(200,140);
context2.lineTo(250,140);
context2.stroke();
context2.lineWidth = 10;
context2.moveTo(200,160);
context2.lineTo(250,160);
context2.stroke();

//円弧
context2.beginPath();
context2.lineWidth = 1;
context2.arc(300,20,30,Math.PI/4,Math.PI*3/4,false);
context2.stroke();

//ベジェ曲線
context2.beginPath();
context2.lineWidth = 1;
context2.moveTo(300,150);
context2.bexierCurveTo(350,200,380,200,350,150);
context2.stroke();
```

表示例

<hr>
<hr>
<canvas id="sample2" width="400" height="200"></canvas>
<script type="text/javascript" src="/js_sample_pages/graphics_sample.js"></script>
<hr>
<hr>
