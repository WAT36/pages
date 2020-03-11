---
title: "勾配法(最急降下法)"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 勾配法(最急降下法)

前述の平均二乗誤差で最も誤差が小さくなるw<sub>0</sub>,w<sub>1</sub>を正確に求めるにはどうすればよいのか？

その一例として、ここでは**勾配法**という方法についてを述べる。


勾配法とは曲面(2変数関数のグラフ)において、最初にある座標を定めて曲面の傾きを求め、そこから傾きの方向(=曲面の座標が低くなる方向)へ座標を移していく、という動作を繰り返し、最終的に傾き0の座標にたどり着くことで曲面が最も小さくなる座標を求めるという方法である。  

前述の平均二乗誤差Jにおいて、この勾配法を利用し最もJが小さくなるw<sub>0</sub>,w<sub>1</sub>の組み合わせを求めることを考える。  

平均二乗誤差Jの(w<sub>0</sub>,w<sub>1</sub>)での傾きは以下のように表される。  

<math>
<mi>∇</mi>
<mi>J</mi>
<mo>=</mo>
<mfenced open="[" close="]"> <mtable>
<mtr> 
    <mtd>
    <mfrac> 
        <mrow><mo>&part;</mo><mi>J</mi></mrow> 
        <mrow><mo>&part;</mo><msub><mi>w</mi><mn>0</mn></msub></mrow>
    </mfrac>
    </mtd>
</mtr> 
<mtr>
    <mtd>
    <mfrac> 
        <mrow><mo>&part;</mo><mi>J</mi></mrow> 
        <mrow><mo>&part;</mo><msub><mi>w</mi><mn>1</mn></msub></mrow>
    </mfrac>
    </mtd>
</mtr>
</mtable> 
</mfenced>
<mo>=</mo>
<mfenced open="[" close="]"> 
<mtable>
<mtr> 
    <mtd>
    <mfrac> 
        <mn>2</mn> 
        <mi>N</mi>
    </mfrac>
    <munderover> 
        <mo>&Sum;</mo> 
            <mrow>
                <mi>n</mi>
                <mo>=</mo>
                <mn>0</mn> 
            </mrow>
            <mi>N-1</mi> 
    </munderover> 
    <mo>(</mo>
    <msub>
        <mi>y</mi>
        <mi>n</mi> 
    </msub>
    <mo>-</mo>
    <msub>
        <mi>t</mi>
        <mi>n</mi> 
    </msub>
    <mo>)</mo>
    <msub>
        <mi>x</mi>
        <mi>n</mi> 
    </msub>
    </mtd>
</mtr> 
<mtr>
    <mtd>
    <mfrac> 
        <mn>2</mn> 
        <mi>N</mi>
    </mfrac>
    <munderover> 
        <mo>&Sum;</mo> 
            <mrow>
                <mi>n</mi>
                <mo>=</mo>
                <mn>0</mn> 
            </mrow>
        <mi>N-1</mi> 
    </munderover> 
    <mo>(</mo>
    <msub>
        <mi>y</mi>
        <mi>n</mi> 
    </msub>
    <mo>-</mo>
    <msub>
        <mi>t</mi>
        <mi>n</mi> 
    </msub>
    <mo>)</mo>
    </mtd>
</mtr>
</mtable> 
</mfenced>
</math>

この値はそれぞれJのw<sub>0</sub>,w<sub>1</sub>に関する傾きを示している。

これを利用し、w<sub>0</sub>,w<sub>1</sub>の座標を移動させることで、傾きが0かつJの値が低くなる方向へと近づけていく。

<b>w</b> = [w<sub>0</sub>,w<sub>1</sub>] とし、t回移動させた後の<b>w</b>を<b>w</b>(t)とすると、以下の漸化式が成り立つ。

<b>w</b>(t+1) = <b>w</b>(t) - α∇J|w(t)

ここでαは**学習率**と呼ばれるパラメータで、1回の移動で<b>w</b>をどれだけ移動させるかの度合を示す。

w<sub>0</sub>,w<sub>1</sub>それぞれで表すと以下のようになる。

w<sub>0</sub>(t+1) = w<sub>0</sub>(t) - α(Jをw0で偏微分)|w0(t),w1(t)

w<sub>1</sub>(t+1) = w<sub>1</sub>(t) - α(Jをw1で偏微分)|w0(t),w1(t)

それではこの式を利用するために、この式に出てくるJをw<sub>0</sub>,w<sub>1</sub>で偏微分した値を求めてみよう。  

まずJは前述の平均二乗誤差の定義から以下のような式である。  

(Jの定義式を載せる)

yn = w<sub>0</sub> x + w<sub>1</sub> より

(J = 右辺はyを展開した式)

これをw<sub>0</sub>,w<sub>1</sub>でそれぞれ偏微分すると

(Jを偏微分した式)

になる。これより、上式は

w<sub>0</sub>(t+1) = w<sub>0</sub>(t) - α(↑で求めた式)

w<sub>1</sub>(t+1) = w<sub>1</sub>(t) - α(↑で求めた式)

となる。これを利用して求めてみよう。

コード例を以下に記載する。

まずは平均二乗誤差Jのw<sub>0</sub>,<sub>1</sub>における勾配(↑の　Jを偏微分した式　というやつ)を求める関数をd_mseとおくと以下のようになる。(w,x,tを入力)

```python

def d_mse(w,x,t):
    y = w[0] * x + w[1]
    d_w0 = 2 * np.mean((y-t)*x)
    d_w1 = 2 * np.mean(y-t)
    return d_w0,d_w1

```
