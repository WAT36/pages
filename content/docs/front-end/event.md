---
title: "イベント"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# イベント


Javascriptの**イベント**についてを記す。

イベントとは、ユーザーの画面上での何らかの操作を、プログラム上で検知し、利用できるようにする機能である。

画面上での操作とは、例えばあるボタンを押した、あるテキストをフォーカスした、などがある。

例として、以下のようなコードを記載する。

```html
<p id="target">ここにカーソルを持ってくると・・</p>
```

javascript

```javascript
window.onload = function() {
    var target = document.getElementById('target');

    target.addEventListener('mousemove',function(){
        this.innerText = 'ここにカーソルを持ってくると・・　→　赤くなる！';
        this.style.color = "red";
    });
};
```

表示例

---

<p id="target">ここにカーソルを持ってくると・・</p>
<script type="text/javascript" src="/js_sample_pages/event_sample.js"></script>

---

上記のテキストの上にカーソルを持ってくると、指定したイベントが発動してテキストの内容と色が変化する。

イベントを登録するには、DOMで取って来た要素に**addEventListener**関数を利用して行う。

第１引数にはイベントの種類を示す文字列、第２引数にはイベントによって実行される処理を記述する。


ちなみに、javascriptコード内にあるwindow.onloadは、「ウィンドウ」の「読み込みが完了したらこの処理をする」という意味である。ここでは、ページの読み込みが完了したらイベントを登録するという意味になる。


# イベントの発火と伝播

今度は以下のような例を考えてみる。

html

```html
<div id="main">
    <p>このp要素にカーソルを置くと・・・・</p>
    <p id="target">このp要素(target)にカーソルを持ってくると・・</p>
</div>
```

javascript

```javascript
window.onload = function() {
    var target = document.getElementById('target');

    target.addEventListener('mousemove',function(){
        this.innerText = 'このp要素(target)にカーソルを持ってくると・・　→　赤くなる！';
        this.style.color = "red";
    });

    var main = document.getElementById('main');

    main.addEventListener('mousemove',function(){
        this.innerText = 'このp要素にカーソルを置くと・・・・　→　青くなる！';
        this.style.color = "blue";
    });
};
```

表示例

---

<div id="main">
    <p>このp要素にカーソルを置くと・・・・</p>
    <p id="target">このp要素(target)にカーソルを持ってくると・・</p>
</div>
<script type="text/javascript" src="/js_sample_pages/event_sample2.js"></script>

---