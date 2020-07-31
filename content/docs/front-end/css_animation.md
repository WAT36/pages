---
title: "アニメーション"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# アニメーション

CSSで行えるアニメーションについてをここで述べる。


## transformプロパティ

transformプロパティは、ボックスを回転・拡大縮小・移動・変形を行うプロパティである。

<table style="border:none;">
    <thead>
        <th style="border:none;">値</th>
        <th style="border:none;">意味</th>
    </thead>
    <tr>
        <td style="border:none;">none</td>
        <td style="border:none;">変形しない</td>
    </tr>
    <tr>
        <td style="border:none;">rotate(角度)</td>
        <td style="border:none;">指定した数値分、時計回りに回転させる</td>
    </tr>
    <tr>
        <td style="border:none;">scale(数値,数値)</td>
        <td style="border:none;">指定した数値分、横方向、縦方向の順に拡大縮小する</td>
    </tr>
    <tr>
        <td style="border:none;">scaleX(数値)</td>
        <td style="border:none;">指定した数値分、横方向に拡大縮小する</td>
    </tr>
    <tr>
        <td style="border:none;">scaleY(数値)</td>
        <td style="border:none;">指定した数値分、縱方向に拡大縮小する</td>
    </tr>
    <tr>
        <td style="border:none;">translate(単位付きの数値,単位付きの数値)</td>
        <td style="border:none;">指定した数値分、右方向、下方向の順に移動する</td>
    </tr>
    <tr>
        <td style="border:none;">translateX(単位付きの数値)</td>
        <td style="border:none;">指定した数値分、右方向の順に移動する</td>
    </tr>
    <tr>
        <td style="border:none;">translateY(単位付きの数値)</td>
        <td style="border:none;">指定した数値分、下方向の順に移動する</td>
    </tr>    
    <tr>
        <td style="border:none;">skew(角度)</td>
        <td style="border:none;">指定した数値分、x軸に沿った角度、y軸に沿った角度分、傾斜させる</td>
    </tr>
    <tr>
        <td style="border:none;">skewX(角度)</td>
        <td style="border:none;">指定した数値分、x軸に沿った分傾斜させる</td>
    </tr>
    <tr>
        <td style="border:none;">skewY(角度)</td>
        <td style="border:none;">指定した数値分、y軸に沿った分傾斜させる</td>
    </tr>
</table>

ここで、角度とは数値に以下の単位をつけたものである。


<table style="border:none;">
    <thead>
        <th style="border:none;">値</th>
        <th style="border:none;">意味</th>
    </thead>
    <tr>
        <td style="border:none;">deg</td>
        <td style="border:none;">度</td>
    </tr>
    <tr>
        <td style="border:none;">grad</td>
        <td style="border:none;">グラード(円周の1/400を1とする単位)</td>
    </tr>
    <tr>
        <td style="border:none;">rad</td>
        <td style="border:none;">ラジアン</td>
    </tr>
    <tr>
        <td style="border:none;">turn</td>
        <td style="border:none;">ターン(円周を1とする単位)</td>
    </tr>
</table>


使用例

```
<p style="background-color:red; width:200px; height:200px;">０度</p>
<p style="background-color:red; width:200px; height:200px; transform:rotate(30deg)">３０度</p>
<p style="background-color:red; width:200px; height:200px; transform:rotate(45deg)">４５度</p>
<p style="background-color:red; width:200px; height:200px; transform:rotate(90deg)">９０度</p>

<p style="background-color:green; width:200px; height:200px;">０度</p>
<p style="background-color:green; width:200px; height:200px; transform:skewX(30deg);">３０度</p>
<p style="background-color:green; width:200px; height:200px; transform:skewX(45deg);">４５度</p>
<p style="background-color:green; width:200px; height:200px; transform:skewX(60deg);">６０度</p>
```


表示例

<hr>
<p style="background-color:red; width:200px; height:200px;">０度</p>
<p style="background-color:red; width:200px; height:200px; transform:rotate(30deg)">３０度</p>
<p style="background-color:red; width:200px; height:200px; transform:rotate(45deg)">４５度</p>
<p style="background-color:red; width:200px; height:200px; transform:rotate(90deg)">９０度</p>

<p style="background-color:green; width:200px; height:200px;">０度</p>
<p style="background-color:green; width:200px; height:200px; transform:skewX(30deg);">３０度</p>
<p style="background-color:green; width:200px; height:200px; transform:skewX(45deg);">４５度</p>
<p style="background-color:green; width:200px; height:200px; transform:skewX(60deg);">６０度</p>
<hr>
