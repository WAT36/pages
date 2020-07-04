---
title: "セレクタ"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# セレクタ

CSSのセレクタについてを述べる。

セレクタにはいくつか種類があり、セレクタの基本的な最小単位のことを**シンプルセレクタ**という。

種類にもよるが、シンプルセレクタを組み合わせたものもセレクタとしてCSSで利用できる。（できないパターンもある）

以下、シンプルセレクタの種類についてを示す。


## タイプセレクタ

要素名をそのままセレクタ名としたものを**タイプセレクタ**という。タイプセレクタを利用すると、指定した要素名の要素全てにCSSの内容が適用される。

<!--
例えば以下のCSSをこのページに適用させてみる。

```css
div { color: green}
```

すると、以下のHTMLが

```
<p>p要素</p>
<div>div要素</div>
```

以下のように表示される。

<hr>
<p>p要素</p>
<div>div要素</div>
<hr>
-->

使用例

```css
div { color: green}
```

## ユニバーサルセレクタ

セレクタの要素名を"*"にすると、全ての要素に適用される。このようなセレクタを**ユニバーサルセレクタ**という。

使用例

```css
* { color: red}
```


## クラスセレクタ

先述のタイプセレクタ 、ユニバーサルセレクタにおいて、ピリオド(.)の後にHTMLのclass属性の値を指定すると、そのclass属性の値を持つ要素が適用対象となる。このようなセレクタを**クラスセレクタ**という。

使用例

```css
span.address { color: blue}
```

## IDセレクタ

タイプセレクタ 、ユニバーサルセレクタにおいて、シャープ(#)の後にHTMLのid属性の値を指定すると、そのid属性の値を持つ要素がCSSの適用対象となる。このようなセレクタを**IDセレクタ**という。

使用例

```css
div#mean { color: gray}
```


## 属性セレクタ

タイプセレクタ 、ユニバーサルセレクタにおいて、大かっこ([])の中に属性名や値を指定すると、その属性の値を持つ要素がCSSの適用対象となる。このようなセレクタを**属性セレクタ**という。

属性セレクタの記法は以下のとおり。

<table style="border:none;">
    <tr>
        <td style="border:none;">[属性名]</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">属性値に関係なく、その属性名が指定されている要素全て</td>
    </tr>
    <tr>
        <td style="border:none;">[属性名="属性値"]</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">その属性名に属性値(完全一致)が指定されている要素</td>
    </tr>
    <tr>
        <td style="border:none;">[属性名~="属性値"]</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">その属性名に属性値(含まれていればOK)が指定されている要素</td>
    </tr>
    <tr>
        <td style="border:none;">[属性名^="属性値"]</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">属性名の値がその属性値で始まっている要素</td>
    </tr>    
    <tr>
        <td style="border:none;">[属性名$="属性値"]</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">属性名の値がその属性値で終わっている要素</td>
    </tr>
</table>

使用例

```css
a[href$=".pdf"] { color: red}
```