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

<hr>
<iframe width="350" height="350" src="/css_sample_pages/linear-gradient.html">
</iframe>
<hr>


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

<hr>
<iframe width="350" height="350" src="/css_sample_pages/radial-gradient.html">
</iframe>
<hr>

