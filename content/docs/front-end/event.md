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
    <p>ここにカーソルを持ってくると・・</p>
    <script src="event_sample.js"></script>
</body>

</html>
```

javascript

```javascript
window.onload = function() {
    var target = document.getElementsByTagName('p');

    target.addEventListener('',function(){
        this.innerText = 'ここにカーソルを持ってくると・・　→　赤くなる！'
        this.style.color = "red";
    });
}
```