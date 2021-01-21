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

- ウィンドウイベント
- フォームイベント
- キーボードイベント
- マウスイベント
- タッチイベント

## ウィンドウイベント

ウィンドウイベントとは、ブラウザのボタンが押された時、ページが遷移した時などといった、ウィンドウの状態が変化したときに発生する。

ウィンドウイベントのイベントハンドラの種類を以下に記載する。

<table style="border:none;">
    <tr>
        <td style="border:none;">onafterprint</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">印刷直後</td>
    </tr>
    <tr>
        <td style="border:none;">onbeforeprint</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">印刷直前</td>
    </tr>
    <tr>
        <td style="border:none;">onbeforeunload</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">ページ遷移直前</td>
    </tr>
    <tr>
        <td style="border:none;">onblur</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">フォーカスが外れた時</td>
    </tr>
    <tr>
        <td style="border:none;">onerror</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">Javascriptエラーが発生した時</td>
    </tr>
    <tr>
        <td style="border:none;">onfocus</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">フォーカスされた</td>
    </tr>
    <tr>
        <td style="border:none;">onhashchange</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">URLのハッシュが変更</td>
    </tr>
    <tr>
        <td style="border:none;">onload</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">ページの読み込みが完了した時</td>
    </tr>
    <tr>
        <td style="border:none;">onmessage</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">メッセージを受信</td>
    </tr>
    <tr>
        <td style="border:none;">onoffline</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">ネットワークがオンラインからオフラインになった時</td>
    </tr>
    <tr>
        <td style="border:none;">ononline</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">ネットワークがオフラインからオンラインになった時</td>
    </tr>
    <tr>
        <td style="border:none;">onpagehide</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">他のページへの遷移などで元のページが隠された時</td>
    </tr>
    <tr>
        <td style="border:none;">onpageshow</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">ページの読み込みが完了した時</td>
    </tr>
    <tr>
        <td style="border:none;">onpopstate</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">履歴が取り出された時</td>
    </tr>
    <tr>
        <td style="border:none;">onredo</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">やり直す(redo)ボタンが押された時</td>
    </tr>
    <tr>
        <td style="border:none;">onresize</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">ウィンドウのサイズが変更された時</td>
    </tr>
    <tr>
        <td style="border:none;">onstorage</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">ローカルストレージまたはセッションストレージが変更された時</td>
    </tr>
    <tr>
        <td style="border:none;">onundo</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">やり直す(redo)ボタンが押された時</td>
    </tr>
    <tr>
        <td style="border:none;">onunload</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">他ページに移動した時</td>
    </tr>
</table>

## フォームイベント

フォームイベントとは、フォーム上をフォーカスした、フォームを入力した場合など、フォームの状態が変化した場合に発生するイベントである。

フォームイベントのイベントハンドラの種類を以下に記載する。

<table style="border:none;">
    <tr>
        <td style="border:none;">onblur</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">フォーカスが外れた時</td>
    </tr>
    <tr>
        <td style="border:none;">onchange</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">変更された時</td>
    </tr>
    <tr>
        <td style="border:none;">onfocus</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">フォーカスされた</td>
    </tr>
    <tr>
        <td style="border:none;">onformchange</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">フォームの値が変更された時</td>
    </tr>
    <tr>
        <td style="border:none;">onforminput</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">フォームの値が入力された時</td>
    </tr>
    <tr>
        <td style="border:none;">onselect</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">要素が選択された時</td>
    </tr>
    <tr>
        <td style="border:none;">onsubmit</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">送信(submit)ボタンが押された時</td>
    </tr>
</table>

## キーボードイベント

キーボードイベントとはキーを押すなど、キーボードの状態が変化した場合に発生するイベントである。

イベントハンドラは以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">onkeydown</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">キーが押された</td>
    </tr>
    <tr>
        <td style="border:none;">onkeypress</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">キーが押して離された</td>
    </tr>
    <tr>
        <td style="border:none;">onkeyup</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">キーが離された</td>
    </tr>
</table>

## マウスイベント

マウスイベントはマウスのボタンを押す、ドラッグするなど、マウスの状態が変化した場合に生ずるイベントである。

イベントハンドラは以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">onclick</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">ボタンがクリックされた</td>
    </tr>
    <tr>
        <td style="border:none;">oncontextmenu</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">マウスの右ボタンが押された</td>
    </tr>
    <tr>
        <td style="border:none;">ondblclick</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">ダブルクリックされた時</td>
    </tr>
    <tr>
        <td style="border:none;">ondrag</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">ドラッグされた時</td>
    </tr>
    <tr>
        <td style="border:none;">ondragend</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">ドラッグが終わった時</td>
    </tr>
    <tr>
        <td style="border:none;">ondragstart</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">ドラッグが始まった時</td>
    </tr>
    <tr>
        <td style="border:none;">onmousedown</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">ボタンが押された時</td>
    </tr>
    <tr>
        <td style="border:none;">onmousemove</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">マウスポインタが移動された時</td>
    </tr>
    <tr>
        <td style="border:none;">onmouseout</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">マウスポインタが要素から外れた時</td>
    </tr>
    <tr>
        <td style="border:none;">onmouseover</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">マウスポインタが要素上に入った時</td>
    </tr>
    <tr>
        <td style="border:none;">onmousemove</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">マウスポインタが移動された時</td>
    </tr>
    <tr>
        <td style="border:none;">onscroll</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">スクロールバーを操作した時</td>
    </tr>
</table>


## タッチイベント

タッチイベントは、タッチパネルの画面を触るなど、タッチパネルの状態が変化した場合に発生する。

イベントハンドラを以下に示す。

<table style="border:none;">
    <tr>
        <td style="border:none;">ontouchstart</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">指が置かれた時</td>
    </tr>
    <tr>
        <td style="border:none;">ontouchmove</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">指がドラッグされた時</td>
    </tr>
    <tr>
        <td style="border:none;">ontouchend</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">指が離れた時</td>
    </tr>
</table>

## ドラッグ&ドロップイベント

ドラッグ&ドロップイベントは先述したマウスイベントの一種である。

設定方法は、以下の通り。

- ドラッグする要素にdraggable属性を設定
- ドラッグする要素にドラッグ開始時のハンドラを設定
- ハンドラにドラッグ(・ドロップ)時の処理を記述

サンプルコードを以下に示す。

javascript

```javascript
function dragHandler(event){
    //動作結果を表示するオブジェクトを取得
    var p = document.getElementById("status");

    //ドラッグするデータの識別子をDataTransferオブジェクトにセット
    event.dataTransfer.setData("text","COIN");

    //動作結果を表示
    p.innerHTML="ドラッグされました！";
}

function dropHandler(event){
    var p = document.getElementById("status");
    id = event.dataTransfer.getData('text');
    p.innerHTML = id + ' → ドロップされました！'
    event.preventDefault();
}
```

html

```html
<div id="from" draggable="true" ondragstart="dragHandler(event);">
<p>この要素を下にドラッグして・・</p>
</div>
<br>
<div id="to" ondragover="event.preventDefault();" ondrop="dropHandler(event);">
<p>ここにドロップしてみよう！</p>
</div>
<div>
<p id="status">まだドラッグ&ドロップされてません</p>
</div>
```

表示例

<hr>
<hr>
<div id="from" draggable="true" ondragstart="dragHandler(event);">
<p>この要素を下にドラッグして・・</p>
</div>
<br>
<div id="to" ondragover="event.preventDefault();" ondrop="dropHandler(event);">
<p>ここにドロップしてみよう！</p>
</div>
<div>
<p id="status">まだドラッグ&ドロップされてません</p>
</div>
<script type="text/javascript" src="/js_sample_pages/event_sample.js"></script>
<hr>
<hr>

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