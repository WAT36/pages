---
title: "その他"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---


# その他(CSS)

CSSについてその他、括れてない手法についてを述べる。


# グラデーション

CSSで、画像が指定可能なところにおいては、画像の場所を示すurl()の代わりに、**linear-gradient()**または**radial-gradient()**と言う書式を使い、グラデーションを表示させることができる。

以下でその方法についてを述べる。

## linear-gradientプロパティ

linear-graientプロパティは、直線状のグラデーションを設定するプロパティである。

書式は以下の通り。

```
linear-gradient(方向,色1,色2)
```

ここで、引数の「方向」に設定する値は以下の通り。

<table style="border:none;">
    <thead>
        <th style="border:none;">値</th>
        <th style="border:none;">意味</th>
    </thead>
    <tr>
        <td style="border:none;">数値(角度)</td>
        <td style="border:none;">指定した角度を境としたグラデーション</td>
    </tr>
    <tr>
        <td style="border:none;">to [top,bottom,left,right]</td>
        <td style="border:none;">指定した方向へのグラデーション</td>
    </tr>
</table>


使用例(css)

```css
p {
    width:300px; height:300px; 
    padding:0px; margin:0px;
    background-image:linear-gradient(180deg,red,blue);
}
```

(html)

```html
<p>linear-gradientの例</p>
```


表示例

<iframe width="350" height="350" src="/css_sample_pages/linear-gradient.html">
</iframe>


## radial-gradientプロパティ

radial-gradientプロパティは、放射状のグラデーションを設定するプロパティである。

書式は以下の通り。

```
radial-gradient(at 中心の位置,中心の色,外側の色)
```

ここで、引数の「中心の位置」に設定する値は以下の通り。

<table style="border:none;">
    <thead>
        <th style="border:none;">値</th>
        <th style="border:none;">意味</th>
    </thead>
    <tr>
        <td style="border:none;">top</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">一番上(縦方向の0%)</td>
    </tr>
    <tr>
        <td style="border:none;">bottom</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">一番下(縦方向の100%)</td>
    </tr>
    <tr>
        <td style="border:none;">left</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">一番左(横方向の0%)</td>
    </tr>
    <tr>
        <td style="border:none;">right</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">一番右(横方向の100%)</td>
    </tr>
    <tr>
        <td style="border:none;">center</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">中央(縦・横方向の50%)</td>
    </tr>
    <tr>
        <td style="border:none;">(パーセンテージ)</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">それぞれの方向に対するパーセンテージ。数値の後に%をつける</td>
    </tr>
</table>


使用例(css)

```css
p {
    width:300px; height:300px; 
    padding:0px; margin:0px;
    background-image:radial-gradient(at bottom,blue,red);
}
```

(html)

```html
<p>radial-gradientの例</p>
```


表示例

<iframe width="350" height="350" src="/css_sample_pages/radial-gradient.html">
</iframe>


# リスト関連のプロパティ

リスト関連について、紹介し切れていないプロパティについてを述べる。


## list-style-typeプロパティ

list-style-typeプロパティは、リストの行頭記号の種類を設定するプロパティである。

設定する値と意味は以下の通り。


<table style="border:none;">
    <thead>
        <th style="border:none;">値</th>
        <th style="border:none;">意味</th>
    </thead>
    <tr>
        <td style="border:none;">none</td>
        <td style="border:none;">行頭記号を消す</td>
    </tr>
    <tr>
        <td style="border:none;">disc</td>
        <td style="border:none;">黒丸にする</td>
    </tr>
    <tr>
        <td style="border:none;">circle</td>
        <td style="border:none;">白抜きの丸にする</td>
    </tr>
    <tr>
        <td style="border:none;">square</td>
        <td style="border:none;">四角にする</td>
    </tr>
    <tr>
        <td style="border:none;">decimal</td>
        <td style="border:none;">数字にする</td>
    </tr>
    <tr>
        <td style="border:none;">decimal-leading-zero</td>
        <td style="border:none;">先頭に0をつけた数字にする(01,02,03..)</td>
    </tr>
    <tr>
        <td style="border:none;">lower-roman</td>
        <td style="border:none;">小文字のローマ数字にする</td>
    </tr>
    <tr>
        <td style="border:none;">upper-roman</td>
        <td style="border:none;">大文字のローマ数字にする</td>
    </tr>
    <tr>
        <td style="border:none;">lower-latin</td>
        <td style="border:none;">小文字のアルファベットにする</td>
    </tr>
    <tr>
        <td style="border:none;">upper-latin</td>
        <td style="border:none;">大文字のアルファベットにする</td>
    </tr>
    <tr>
        <td style="border:none;">lower-alpha</td>
        <td style="border:none;">小文字のアルファベットにする</td>
    </tr>
    <tr>
        <td style="border:none;">upper-alpha</td>
        <td style="border:none;">大文字のアルファベットにする</td>
    </tr>
    <tr>
        <td style="border:none;">lower-greek</td>
        <td style="border:none;">小文字のギリシャ文字にする</td>
    </tr>
</table>


使用例

```html
<ul style="list-style-type:circle">
<li>その１</li>
<li>その２</li>
<li>その３</li>
</ul>
<br>
<ul style="list-style-type:lower-greek">
<li>その１</li>
<li>その２</li>
<li>その３</li>
</ul>
```


表示例

<ul style="list-style-type:circle">
<li>その１</li>
<li>その２</li>
<li>その３</li>
</ul>
<br>
<ul style="list-style-type:lower-greek">
<li>その１</li>
<li>その２</li>
<li>その３</li>
</ul>


## list-style-image プロパティ

list-style-imageプロパティは、リストの行頭記号に表示する画像を設定するプロパティである。

設定する値と意味は以下の通り。


<table style="border:none;">
    <thead>
        <th style="border:none;">値</th>
        <th style="border:none;">意味</th>
    </thead>
    <tr>
        <td style="border:none;">url(...)</td>
        <td style="border:none;">画像のURLを指定し、その画像が行頭記号として表示される。</td>
    </tr>
    <tr>
        <td style="border:none;">none</td>
        <td style="border:none;">画像を行頭記号として表示させない</td>
    </tr>
</table>


使用例(css)


```css
ul {
    list-style-image: url(list-style-image.png);
}
```


(html)

```html
<ul>
    <li>その１</li>
    <li>その２</li>
    <li>その３</li>
</ul>
```


表示例

<iframe width="400" height="200" src="/css_sample_pages/list-style-image.html">
</iframe>


## list-style-position プロパティ

list-style-positionプロパティは、行頭記号の表示位置を設定するプロパティである。

設定する値と意味は以下の通り。

<table style="border:none;">
    <thead>
        <th style="border:none;">値</th>
        <th style="border:none;">意味</th>
    </thead>
    <tr>
        <td style="border:none;">outside</td>
        <td style="border:none;">テキストを表示させる領域の外側に表示させる</td>
    </tr>
    <tr>
        <td style="border:none;">inside</td>
        <td style="border:none;">テキストを表示させる領域の内側に表示させる</td>
    </tr>
</table>


使用例

```html
<ul style="list-style-position:inside">
<li>その１</li>
<li>その２</li>
<li>その３</li>
</ul>
<br>
<ul style="list-style-position:outside">
<li>その１</li>
<li>その２</li>
<li>その３</li>
</ul>
```

表示例

<ul style="list-style-position:inside">
<li>その１</li>
<li>その２</li>
<li>その３</li>
</ul>
<br>
<ul style="list-style-position:outside">
<li>その１</li>
<li>その２</li>
<li>その３</li>
</ul>

## list-style プロパティ

list-styleプロパティは、前述のlist-style系のプロパティの値を空白区切りでまとめて指定できるプロパティである。


使用例

```html
<ul style="list-style:lower-greek inside">
<li>その１</li>
<li>その２</li>
<li>その３</li>
</ul>
```

表示例

<ul style="list-style:lower-greek inside">
<li>その１</li>
<li>その２</li>
<li>その３</li>
</ul>

# テーブル関連のプロパティ

テーブル関連について、紹介し切れていないプロパティについてを述べる。

## caption-sideプロパティ

caption-sideプロパティは、キャプションを表の上か下かどちらかに表示させるかを設定するプロパティである。

値はtop,bottomのいずれかを指定する。


使用例

```html
<table>
    <caption style="caption-side:bottom">キャプションbottom</caption>
    <tr>
        <td>0,0</td>
        <td>1,0</td>
    </tr>
    <tr>
        <td>0,1</td>
        <td>1,1</td>
    </tr>
</table>
```

表示例

<table>
    <caption style="caption-side:bottom">キャプションbottom</caption>
    <tr>
        <td>0,0</td>
        <td>1,0</td>
    </tr>
    <tr>
        <td>0,1</td>
        <td>1,1</td>
    </tr>
</table>

## border-collapseプロパティ

border-collapseプロパティは、ボーダーを隣接するセルと重ねて表示するか、離して標示するかを設定するプロパティである。

値はcollapse(隣接するセルと重ねて表示)、separate(隣接するセルと離して表示)のいずれかである。

使用例

```html
<table style="border-collapse: collapse;">
    <caption>collapse</caption>
    <tr>
        <td style="border: solid 1px;">0,0</td>
        <td style="border: solid 1px;">1,0</td>
    </tr>
    <tr>
        <td style="border: solid 1px;">0,1</td>
        <td style="border: solid 1px;">1,1</td>
    </tr>
</table>
```


表示例

<table style="border-collapse: collapse;">
    <caption>collapse</caption>
    <tr>
        <td style="border: solid 1px;">0,0</td>
        <td style="border: solid 1px;">1,0</td>
    </tr>
    <tr>
        <td style="border: solid 1px;">0,1</td>
        <td style="border: solid 1px;">1,1</td>
    </tr>
</table>


## border-spacingプロパティ

border-spacingプロパティは、テーブルにおいて隣接するセルのボーダーとボーダーの間隔を設定するプロパティである。

先述のborder-collapseプロパティの値がseparateのときに有効となり、値は単位付きの数値を指定する。


使用例

```html
<table style="border-collapse: separate;border-spacing: 2px">
    <caption>separate 2px</caption>
    <tr>
        <td style="border: solid 1px;">0,0</td>
        <td style="border: solid 1px;">1,0</td>
    </tr>
    <tr>
        <td style="border: solid 1px;">0,1</td>
        <td style="border: solid 1px;">1,1</td>
    </tr>
</table>
```


表示例

<table style="border-collapse: separate;border-spacing: 2px">
    <caption>separate 2px</caption>
    <tr>
        <td style="border: solid 1px;">0,0</td>
        <td style="border: solid 1px;">1,0</td>
    </tr>
    <tr>
        <td style="border: solid 1px;">0,1</td>
        <td style="border: solid 1px;">1,1</td>
    </tr>
</table>

## empty-cellsプロパティ

empty-cellsプロパティは、テーブルのセルが空白の時にボーダーを表示するかしないかを設定するプロパティである。

値はshow(表示する),hide(表示しない)のいずれかを指定する。


使用例

```html
<table style="border-collapse: separate;border-spacing: 2px; empty-cells: show;">
    <caption>separate 2px</caption>
    <tr>
        <td style="border: solid 1px;">0,0</td>
        <td style="border: solid 1px;"></td>
    </tr>
    <tr>
        <td style="border: solid 1px;"></td>
        <td style="border: solid 1px;">1,1</td>
    </tr>
</table>
```


表示例

<table style="border-collapse: separate;border-spacing: 2px; empty-cells: show;">
    <caption>separate 2px</caption>
    <tr>
        <td style="border: solid 1px;">0,0</td>
        <td style="border: solid 1px;"></td>
    </tr>
    <tr>
        <td style="border: solid 1px;"></td>
        <td style="border: solid 1px;">1,1</td>
    </tr>
</table>


# 内容を追加するプロパティ

内容を追加するプロパティについて。

## contentプロパティ

contentプロパティは、CSSでコンテンツ（テキスト・画像など）を追加するためのプロパティである。

contentプロパティでは、擬似要素:before、:afterを利用して要素の前後どちらに挿入するかを決定する。

設定する値と意味は以下の通り。


<table style="border:none;">
    <thead>
        <th style="border:none;">値</th>
        <th style="border:none;">意味</th>
    </thead>
    <tr>
        <td style="border:none;">テキスト(ダブルクォートまたはシングルクォートで囲う)</td>
        <td style="border:none;">入力したテキストがそのまま挿入される</td>
    </tr>
    <tr>
        <td style="border:none;">url(...)</td>
        <td style="border:none;">指定した画像が挿入される。</td>
    </tr>
    <tr>
        <td style="border:none;">attr(...)</td>
        <td style="border:none;">指定した属性で指定されている文字列が挿入される。</td>
    </tr>
    <tr>
        <td style="border:none;">counter(...)</td>
        <td style="border:none;">カウンタ変数(後述)の値が挿入される。</td>
    </tr>
    <tr>
        <td style="border:none;">open-quote、close-quote</td>
        <td style="border:none;">quotesプロパティで設定されている値が挿入される。</td>
    </tr>
    <tr>
        <td style="border:none;">none</td>
        <td style="border:none;">コンテンツを追加しない</td>
    </tr>
</table>

使用例(css)

```css
p::before {
    content:"「contentプロパティで挿入された文字です」";
}
```

(html)

```html
<p>ここはp要素の内容です</p>
```


表示例

<iframe width="400" height="100" src="/css_sample_pages/content.html">
</iframe>


## quotesプロパティ

quotesプロパティは、q要素またはcontentプロパティで引用符を追加(open-quote,close-quote)するときにどの引用符を使うかを指定するプロパティである。

使用するには、使う引用符を半角スペースで区切ってペアで指定する。

使用例

```css
q {
    quotes:"->->" "<-<-";
}
```

(html)

```html
<q>ここはq要素で囲まれています</q>
```

表示例

<iframe width="500" height="100" src="/css_sample_pages/quotes.html">
</iframe>


## counter-resetプロパティ

counter-resetプロパティは、値をリセット(0にする)したいカウンタ変数を指定するプロパティである。

値にはカウンタとして用いる変数を指定する。

(使用例は次とまとめる)


## counter-incrementプロパティ

counter-incrementプロパティは、カウンタ変数の値を1増やすプロパティである。

値にはカウンタとして用いる変数を指定する。

使用例(css)

```css
body {
    counter-reset: chapter;
}

p::before {
    counter-increment: chapter;
    content: counter(chapter);
}
```

(html)

```html
<p>p要素1個目</p>
<p>p要素2個目</p>
<p>p要素3個目</p>
<p>p要素4個目</p>
<p>p要素5個目</p>
```


表示例

<iframe width="300" height="300" src="/css_sample_pages/counter.html">
</iframe>
