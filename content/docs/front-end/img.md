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


