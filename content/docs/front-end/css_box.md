---
title: "CSSでのボックス"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# CSSのボックス

CSSで扱うボックスについて。

前述した通り、HTMLでは要素内容の表示にはボックスと呼ばれる単位で表示される。

ボックスの詳細は以下の図の通り。

<img src="/img/front-end/css_box.png" width=80%>

CSSでは、ボックスの各要素を設定することができる。

ここでは、ボックスに関連するCSSのプロパティについてを記載する。

## マージン関連のプロパティ

CSSでは、ボックスのマージンの長さを設定することができる。

そのためのプロパティは以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">margin-top</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">マージンの上部分</td>
    </tr>
    <tr>
        <td style="border:none;">margin-bottom</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">マージンの下部分</td>
    </tr>
    <tr>
        <td style="border:none;">margin-left</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">マージンの左部分</td>
    </tr>
    <tr>
        <td style="border:none;">margin-right</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">マージンの右部分</td>
    </tr>
    <tr>
        <td style="border:none;">margin</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">マージンの各部分(指定できる値は1~4個)</td>
    </tr>
</table>

中でも、marginプロパティは設定した値の数で、以下の通りに意味合いが変わってくる。


<table style="border:none;">
    <thead>
        <td style="border:none;">値の数</td>
        <td style="border:none;">適用箇所</td>
        <td style="border:none;">例</td>
    </thead>
    <tr>
        <td style="border:none;">1</td>
        <td style="border:none;">上下左右全て</td>
        <td style="border:none;">margin 10px;</td>
    </tr>
    <tr>
        <td style="border:none;">2</td>
        <td style="border:none;">上下  左右</td>
        <td style="border:none;">margin 10px 10px;</td>
    </tr>
    <tr>
        <td style="border:none;">3</td>
        <td style="border:none;">上 左右 下</td>
        <td style="border:none;">margin 10px 10px 10px;</td>
    </tr>
    <tr>
        <td style="border:none;">4</td>
        <td style="border:none;">上 右 下 左</td>
        <td style="border:none;">margin 10px 10px 10px;</td>
    </tr>
    <tr>
        <td style="border:none;">margin</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">マージンの各部分(指定できる値は1~4個)</td>
    </tr>
</table>


margin関連のプロパティにプロパティに設定する値は以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">数値(単位px)</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">pxの値が長さになる</td>
    </tr>
    <tr>
        <td style="border:none;">数値(単位%)</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">要素内容を表示する領域の幅に対する比率の長さになる</td>
    </tr>
    <tr>
        <td style="border:none;">auto</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">ボックスの状況から自動設定する</td>
    </tr>
</table>


（使用例と表示例を見せる）
