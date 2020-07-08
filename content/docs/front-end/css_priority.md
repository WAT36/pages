---
title: "CSS適用の優先順位"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# CSS適用の優先順位


## 指定元による優先順位

CSSはWebページの製作者だけが指定できるものではなく、閲覧しているユーザも独自に指定でき、また使用しているブラウザもブラウザが有するCSS(及びそれに近い物)を適用した上で表示している。

このうち、どのCSSを優先して適用すべきなのか？

CSSが複数指定されていた場合は、指定元により適用の優先順位というものが指定されている。

その優先順位は

<pre>
製作者のCSS  >  ユーザーのCSS  >  ブラウザのCSS
</pre>

のようになっている。


## !important

例えばユーザーが指定したCSSやブラウザ内のCSSの指定した宣言を優先して適用させたい場合はどのようにすれば良いか。

その際に使用するのが**!important**文である。

!important文が最後に付いた宣言は、製作者のCSSよりも優先して適用される。

しかし、!importantが付けられていても、指定元によって優先順位がある。指定元及び!importantの有無による優先度は以下のとおり。

<pre>
優先度  高
↑
|   ブラウザ    !important付き
|   ユーザー    !important付き
|   製作者      !important付き
|   製作者
|   ユーザー
|   ブラウザ
↓
優先度  低
</pre>


## 詳細度による優先順位

セレクタにはその種類によって、**詳細度**という３桁の数値が割り振られている。

!important文が無く、指定元が同じ場合は、この詳細度によって優先度が決まってくる。

詳細度の数値は以下の法則によって決められる。

- ３桁目：IDセレクタの個数
- ２桁目：クラスセレクタの個数 + 属性セレクタの個数 + 擬似クラスの個数
- １桁目：タイプセレクタの個数 + 擬似要素の個数

例として、以下のようなセレクタのときの詳細度を記載する。

<table style="border:none;">
    <tr>
        <td style="border:none;">span div#top</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">102</td>
    </tr>
    <tr>
        <td style="border:none;">div#top</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">101</td>
    </tr>
    <tr>
        <td style="border:none;">#top</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">100</td>
    </tr>
    <tr>
        <td style="border:none;">span.address</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">011</td>
    </tr>    
    <tr>
        <td style="border:none;">.address</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">010</td>
    </tr>
    <tr>
        <td style="border:none;">span div</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">002</td>
    </tr>
    <tr>
        <td style="border:none;">div</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">001</td>
    </tr>
    <tr>
        <td style="border:none;">*</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">000</td>
    </tr>
</table>