---
title: "ウィンドウ"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# ウィンドウ

ウィンドウオブジェクトとは、ブラウザ上の各ウィンドウを示すオブジェクトである。このオブジェクトには様々なプロパティ、メソッドなどを含んでいる。

# 主なプロパティ

ウィンドウオブジェクトの主なプロパティは以下の通り。


<table style="border:none;">
    <tr>
        <th style="border:none;">プロパティ名</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">closed</td>
        <td style="border:none;">ウィンドウが閉じられている場合true</td>
    </tr>
    <tr>
        <td style="border:none;">innerHeight</td>
        <td style="border:none;">ウィンドウの内側の高さ</td>
    </tr>
    <tr>
        <td style="border:none;">innerWidth</td>
        <td style="border:none;">ウィンドウの内側の幅</td>
    </tr>
    <tr>
        <td style="border:none;">length</td>
        <td style="border:none;">ウィンドウのframeの数</td>
    </tr>
    <tr>
        <td style="border:none;">name</td>
        <td style="border:none;">ウィンドウの名前</td>
    </tr>
    <tr>
        <td style="border:none;">outerHeight</td>
        <td style="border:none;">ウィンドウの外側の高さ</td>
    </tr>
    <tr>
        <td style="border:none;">outerWidth</td>
        <td style="border:none;">ウィンドウの外側の幅</td>
    </tr>
    <tr>
        <td style="border:none;">pageXOffset</td>
        <td style="border:none;">スクロールで表示されている画面の横位置</td>
    </tr>
    <tr>
        <td style="border:none;">pageYOffset</td>
        <td style="border:none;">スクロールで表示されている画面の縦位置</td>
    </tr>
    <tr>
        <td style="border:none;">self</td>
        <td style="border:none;">ウィンドウオブジェクト自身</td>
    </tr>

</table>

例えばウィンドウの縦横の長さを表示するプログラムを作ってみる。

javascript

```javascript
window.onload = function() {
    var h = document.getElementById('height');
    h.innerText = window.innerHeight + 'px';

    var l = document.getElementById('length');
    l.innerText = window.innerWidth + 'px';

};

window.onresize = function() {
    var h = document.getElementById('height');
    h.innerText = window.innerHeight + 'px';

    var l = document.getElementById('length');
    l.innerText = window.innerWidth + 'px';
};
```

html

```html
<div>ウィンドウの高さ</div>
<div id="height">x px</div>
<br>
<div>ウィンドウの幅</div>
<div id="length">x px</div>
```


表示例

<hr>
<hr>
<div>ウィンドウの高さ</div>
<div id="height">x px</div>
<br>
<div>ウィンドウの幅</div>
<div id="length">x px</div>
<script type="text/javascript" src="/js_sample_pages/window_sample.js"></script>
<hr>
<hr>
