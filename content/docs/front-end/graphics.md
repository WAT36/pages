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
ctx.beginPath();
ctx.fillStyle = "red"
ctx.arc(30,30,20,0,Math.PI*2,false);
ctx.stroke();
```


表示例

<hr>
<hr>
<canvas id="sample" width="100" height="100"></canvas>
<hr>
<hr>
