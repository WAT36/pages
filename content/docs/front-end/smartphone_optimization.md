---
title: "スマートフォン最適化"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# スマートフォン最適化

スマートフォン最適化についてを述べる。


## CSSスプライト

CSSスプライトとは、複数の画像をつなげて1つのファイルにまとめ、それをCSSで表示範囲を指定し利用する方法である。

複数の画像を個々に利用していると、その画像の数だけ画像の読み込みの通信をすることになり、非効率になる場合がある。

その対策として、複数の画像を1つにまとめることで、通信回数が削減され、効率性が向上する。

この手法は、通信が遅く不安定であるモバイル環境において有効である。

実装方法としては、CSSのbackground-imageプロパティで背景画像を連結して繰り返し表示させ、width,heightで表示範囲、background-positionで表示位置を調整する。


使用例(css)

```css
<!DOCTYPE HTML>
<html>
<head>
<title>CSSスプライト_サンプル</title>

<style type="text/css">
    .splite {
        background-image: url(img_small.jpg);
        width: 50px;
        height: 50px;
        background-position: 100% 100%;
    }

    .splite1 {
        background-position: 0 0px;
    }

    .splite2 {
        background-position: 0 -50px;
    }

    .splite3 {
        background-position: 0 -100px;
    }

    .splite4 {
        background-position: 0 -150px;
    }
</style>

</head>
<body>

<p class="splite splite1"></p></p>
<p class="splite splite2"></p></p>
<p class="splite splite3"></p></p>
<p class="splite splite4"></p></p>


</body>
</html>
```

使用例(iframe)

```
<iframe width="500" height="400" src="/css_sample_pages/css_splite.html">
</iframe>
```

表示例

<hr>
<iframe width="500" height="400" src="/css_sample_pages/css_splite.html">
</iframe>
<hr>


## 高画像度画面向けの対応


デバイスによってディスプレイのピクセルの長さがCSSで扱うピクセルの長さと異なる場合がある。これは、解像度の違いより画素の大きさが異なることなどにより発生する。

この事により、拡大、縮小等によって画像がぼやけて表示されてしまうなどと言う問題が起こりうる場合がある。

この問題を回避するには、メディアクエリを利用する事で、デバイスの特性により適用するCSSを使い分けていくと言う方法が考えられる。

