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

# 擬似クラス

ある要素が特定の状態にある時のみを適用対象とするセレクタを**擬似クラス**という。使用するには、セレクタの要素名の後に続けて書く。

擬似クラスは多種類あるが、以下に一部を示す。

<table style="border:none;">
    <tr>
        <td style="border:none;">:link</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">a要素で、リンク先にまだアクセスしていない場合</td>
    </tr>
    <tr>
        <td style="border:none;">:visited</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">a要素で、リンク先に既にアクセスしている場合</td>
    </tr>
    <tr>
        <td style="border:none;">:hover</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">マウスカーソルが上にある状態</td>
    </tr>
    <tr>
        <td style="border:none;">:active</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">マウスのボタンが押されている状態</td>
    </tr>    
    <tr>
        <td style="border:none;">:first-child</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">子要素の中で一番最初の要素</td>
    </tr>    
    <tr>
        <td style="border:none;">:last-child</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">子要素の中で一番最後の要素</td>
    </tr>    
    <tr>
        <td style="border:none;">:only-child</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">唯一の子要素である場合</td>
    </tr>    
    <tr>
        <td style="border:none;">:focus</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">フォーカス(選択)されたとき</td>
    </tr>    
    <tr>
        <td style="border:none;">:checked</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">ラジオボタンやチェックボックスなどが選択されたとき</td>
    </tr>    
    <tr>
        <td style="border:none;">:empty</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">要素内容が空の時</td>
    </tr>    
</table>

使用例

```css
a:link { color: blue}
```


# 擬似要素

要素内容の一部のみをCSSの適用対象とするセレクタを**擬似要素**という。

主な擬似要素は以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">::first-line</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">要素内容の１行目</td>
    </tr>
    <tr>
        <td style="border:none;">::first-letter</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">要素内容の１文字目</td>
    </tr>
    <tr>
        <td style="border:none;">::before</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">要素の始めにcontent宣言の内容を追加</td>
    </tr>
    <tr>
        <td style="border:none;">::after</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">要素の終りにcontent宣言の内容を追加</td>
    </tr>
</table>


使用例

```css
p::first-letter { color: red}
```

