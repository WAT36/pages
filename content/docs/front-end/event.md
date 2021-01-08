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
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>タイトル</title>
</head>

<body>
    <div id="event_sample">
        <p id="target">ここにカーソルを持ってくると・・</p>
    </div>
    <script type="text/javascript" src="/js_sample_pages/event_sample.js"></script>
</body>

</html>
```

javascript

```javascript
window.onload = function() {
    var target = document.getElementById('target');

    target.addEventListener('click',function(){
        this.innerText = 'ここにカーソルを持ってくると・・　→　赤くなる！';
        this.style.color = 'red';
    });
}
```

表示例

<hr>
<iframe width="400" height="300" src="/js_sample_pages/event_sample.html">
</iframe>
<hr>
