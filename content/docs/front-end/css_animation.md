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


## transform-originプロパティ

transform-originプロパティは、transformプロパティでボックスを回転・移動・変形させる時に、原点とする位置を設定するプロパティである。

指定する値と意味は以下の通り。なお、値は1~3つまで指定出来る。1つ目は横方向の左からの位置、2つ目は縦方向の上からの位置、3つ目は3D用のz方向の位置を示す。

<table style="border:none;">
    <thead>
        <th style="border:none;">値</th>
        <th style="border:none;">意味</th>
    </thead>
    <tr>
        <td style="border:none;">単位付きの数値</td>
        <td style="border:none;">ボックスの左上からの距離</td>
    </tr>
    <tr>
        <td style="border:none;">パーセンテージ</td>
        <td style="border:none;">ボックスの大きさに対するパーセンテージ</td>
    </tr>
    <tr>
        <td style="border:none;">top</td>
        <td style="border:none;">縦方向の0%</td>
    </tr>
    <tr>
        <td style="border:none;">bottom</td>
        <td style="border:none;">縦方向の100%</td>
    </tr>
    <tr>
        <td style="border:none;">center</td>
        <td style="border:none;">縦方向の50%/横方向の50%</td>
    </tr>
    <tr>
        <td style="border:none;">left</td>
        <td style="border:none;">横方向の0%</td>
    </tr>
    <tr>
        <td style="border:none;">right</td>
        <td style="border:none;">横方向の100%</td>
    </tr>
</table>


使用例

```
<div style="border-style: double; height: 100px; width: 100px; padding: 0px; margin:0px">
<p style="background-color:red; width:95px; height:95px; padding:0px; margin:0px; transform:rotate(45deg);">center center(デフォルト)を中心に45度回転</p>
</div>
<br>
<br>
<div style="border-style: double; height: 100px; width: 100px; padding: 0px; margin:0px">
<p style="background-color:red; width:95px; height:95px; padding:0px; margin:0px; transform:rotate(45deg); transform-origin:right bottom;">right bottom(右下)を中心に45度回転</p>
</div>
```

表示例

<hr>
<div style="border-style: double; height: 100px; width: 100px; padding: 0px; margin:0px">
<p style="background-color:red; width:95px; height:95px; padding:0px; margin:0px; transform:rotate(45deg);">center center(デフォルト)を中心に45度回転</p>
</div>
<br>
<br>
<div style="border-style: double; height: 100px; width: 100px; padding: 0px; margin:0px">
<p style="background-color:red; width:95px; height:95px; padding:0px; margin:0px; transform:rotate(45deg); transform-origin:right bottom;">right bottom(右下)を中心に45度回転</p>
</div>
<hr>

