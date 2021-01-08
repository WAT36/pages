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
