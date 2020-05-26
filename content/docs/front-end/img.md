---
title: "画像・動画・音声"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# 画像・動画・音声

画像・動画・音声についての要素を述べる。

## img要素

img要素は画像を表示させたい時、及びそれが利用できない時に代わりに表示させるテキストを指定する要素である。

属性がいくつかあり、それらを利用する。

<table style="border:none;">
    <tr style="border:none;">
        <td style="border:none;">・</td>
        <td style="border:none;">src</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">表示する画像の相対パスまたはアドレス</td>
    </tr>
    <tr style="border:none;">
        <td style="border:none;">・</td>
        <td style="border:none;">alt</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">画像が利用できない場合に代わりに使用されるテキスト<br>(ブラウザによる)</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">width</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">幅(整数値)</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">height</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">高さ(整数値)</td>
    </tr>
</table>

使用例

```
<img src="/img/front-end/img.jpg" width="100" height="100">

<img src="/img/front-end/img.jpg" width="50" height="50">

<img src="/img/front-end/img.jpg" width="100" height="100" alt="宗谷岬、青空">
```

実行例

<hr>
<img src="/img/front-end/img.jpg" width="100" height="100">

<img src="/img/front-end/img.jpg" width="50" height="50">

<img src="/img/front-end/img.jpg" width="100" height="100" alt="宗谷岬、青空">
<hr>



## picture要素

picture要素はHTML5以降で追加された新しい要素で、複数のsource要素(後述)と一つのimg要素を取りまとめる要素である。これにより、最適なsource要素による画像、source要素が使えないブラウザではimg要素の画像が使われ、柔軟な画像の選定が行われる。

```
<picture>
    <source media="(min-width: 200em)" srcset="/img/front-end/img3.jpg" title="img3.jpg">
    <source media="(min-width: 100em)" srcset="/img/front-end/img2.jpg" title="img2.jpg">
    <img src="/img/front-end/img.jpg" width="50" height="50">
</picture>
```

実行例

<hr>
<picture>
    <source media="(min-width: 200em)" srcset="/img/front-end/img3.jpg" title="img3.jpg">
    <source media="(min-width: 100em)" srcset="/img/front-end/img2.jpg" title="img2.jpg">
    <img src="/img/front-end/img.jpg" width="50" height="50">
</picture>
<hr>