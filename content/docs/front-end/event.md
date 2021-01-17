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

html

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


# イベントの種類

イベントの種類としては、主に以下のようなものがある。

- ウインドウイベント
- フォームイベント
- キーボードイベント
- マウスイベント
- タッチイベント


# イベントの発火と伝播

今度は以下のような例を考えてみる。

html

```html
<div id="main2">
    <p>このp要素にカーソルを置くと・・・・</p>
    <p id="target2">このp要素(target)にカーソルを持ってくると・・</p>
</div>
```

javascript（main->main2,target->target2と変更）

```javascript
window.onload = function() {
    var target = document.getElementById('target2');

    target.addEventListener('mousemove',function(){
        this.innerText = 'このp要素(target)にカーソルを持ってくると・・　→　赤くなる！';
        this.style.color = "red";
    });

    var main = document.getElementById('main2');

    main.addEventListener('mousemove',function(){
        this.innerText = 'このp要素にカーソルを置くと・・・・　→　青くなる！';
        this.style.color = "blue";
    });
};
```

表示例

---

<div id="main2">
    <p>このp要素にカーソルを置くと・・・・</p>
    <p id="target2">このp要素(target)にカーソルを持ってくると・・</p>
</div>
<script type="text/javascript" src="/js_sample_pages/event_sample.js"></script>

---

この例では、id="main"の中にid="target"の要素があり、またその両方にイベントが設定されている。

この時に、id="target"の部分にカーソルを持ってくると、親のid="main"のイベントも走ってしまう。

このような事象はなぜ発生してしまうのだろうか？

ここにはイベントのメカニズムが関わっている。ユーザーの操作でイベントが発生した時、ブラウザはDOMツリーの上の方からそのターゲットを探しにいく。

そこで、対象の要素を発見した時、イベントが**発火**し、設定された処理が動く。

実はここで終わらず、今度はその箇所から親要素に向けてイベントは**伝播**していく。その際に、設定されているイベントがある場合、そのタイミングでそのイベントの処理が走ってしまう。

図に示すと以下の通り。まずはDOMツリーの一番上から探して行き、

<img src="/img/front-end/event_ignition.png">


該当のイベントが発火すると、その場所から上へと辿って行き(伝播)、途上でイベントがあった場合はそれも走る。

<img src="/img/front-end/event_propagation.png">


このような、イベントの伝播をさせたくない場合は、javascriptのaddEventListenerでの処理関数の引数に**event**を指定し、さらに処理内容に**event.stopPropagation()**を追加させる。これにより、伝播をストップできる。

javascript例（main->main3,target->target3と変更）

```javascript
window.onload = function() {
    var target = document.getElementById('target3');

    target.addEventListener('mousemove',function(event){
        this.innerText = 'このp要素(target)にカーソルを持ってくると・・　→　赤くなる！';
        this.style.color = "red";
        event.stopPropagation();  //伝播をストップさせる。
    });

    var main = document.getElementById('main3');

    main.addEventListener('mousemove',function(){
        this.innerText = 'このp要素にカーソルを置くと・・・・　→　青くなる！';
        this.style.color = "blue";
    });
};
```

表示例

---

<div id="main3">
    <p>このp要素にカーソルを置くと・・・・</p>
    <p id="target3">このp要素(target)にカーソルを持ってくると・・</p>
</div>
<script type="text/javascript" src="/js_sample_pages/event_sample.js"></script>

---