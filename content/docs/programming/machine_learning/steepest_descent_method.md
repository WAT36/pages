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

<math>
<mi mathvariant="bold-italic">w</mi>
<mo>(</mo>
<mi>t</mi>
<mo>+</mo>
<mn>1</mn>
<mo>)</mo>
<mo>=</mo>
<mi mathvariant="bold-italic">w</mi>
<mo>(</mo>
<mi>t</mi>
<mo>)</mo>
<mo>=</mo>
<mi>α</mi>
<mi>∇</mi>
<mi>J</mi>
<mfenced open="|" close=""> <mi></mi>
</mfenced>
<msub>
<mi></mi>
<mrow>
    <mi mathvariant="bold-italic">w</mi>
    <mo>(</mo>
    <mi>t</mi>
    <mo>)</mo>
</mrow>
</msub>

</math>

ここでαは**学習率**と呼ばれるパラメータで、1回の移動で<b>w</b>をどれだけ移動させるかの度合を示す。

w<sub>0</sub>,w<sub>1</sub>それぞれで表すと以下のようになる。

<math>
<msub>
<mi>w</mi>
<mn>0</mn>
</msub>
<mo>(</mo>
<mi>t</mi>
<mo>+</mo>
<mn>1</mn>
<mo>)</mo>
<mo>=</mo>
<msub>
<mi>w</mi>
<mn>0</mn>
</msub>
<mo>(</mo>
<mi>t</mi>
<mo>)</mo>
<mo>-</mo>
<mi>α</mi>
    <mfrac> 
        <mrow><mo>&part;</mo><mi>J</mi></mrow> 
        <mrow><mo>&part;</mo><msub><mi>w</mi><mn>0</mn></msub></mrow>
    </mfrac>
<mfenced open="|" close=""> 
<mi></mi>
</mfenced>
<msub>
<mi></mi>
<mrow>
<msub>
<mi>w</mi>
<mn>0</mn>
</msub>
<mo>(</mo>
<mi>t</mi>
<mo>)</mo>
<mo>,</mo>
<msub>
<mi>w</mi>
<mn>1</mn>
</msub>
<mo>(</mo>
<mi>t</mi>
<mo>)</mo>
</mrow>
</msub>
</math>
<br>
<math>
<msub>
<mi>w</mi>
<mn>1</mn>
</msub>
<mo>(</mo>
<mi>t</mi>
<mo>+</mo>
<mn>1</mn>
<mo>)</mo>
<mo>=</mo>
<msub>
<mi>w</mi>
<mn>1</mn>
</msub>
<mo>(</mo>
<mi>t</mi>
<mo>)</mo>
<mo>-</mo>
<mi>α</mi>
    <mfrac> 
        <mrow><mo>&part;</mo><mi>J</mi></mrow> 
        <mrow><mo>&part;</mo><msub><mi>w</mi><mn>1</mn></msub></mrow>
    </mfrac>
<mfenced open="|" close=""> 
<mi></mi>
</mfenced>
<msub>
<mi></mi>
<mrow>
<msub>
<mi>w</mi>
<mn>0</mn>
</msub>
<mo>(</mo>
<mi>t</mi>
<mo>)</mo>
<mo>,</mo>
<msub>
<mi>w</mi>
<mn>1</mn>
</msub>
<mo>(</mo>
<mi>t</mi>
<mo>)</mo>
</mrow>
</msub>
</math>

それではこの式を利用するために、この式に出てくるJをw<sub>0</sub>,w<sub>1</sub>で偏微分した値を求めてみよう。  

まずJは前述の平均二乗誤差の定義から以下のような式である。  

<math>
<mi>J</mi>
<mo>=</mo>
    <mfrac> 
        <mn>1</mn> 
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
    <msup>
        <mrow>
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
        </mrow>
        <mn>2</mn> 
    </msup>

</math>

ここで
<math>
<msub>
<mn>y</mn>
<mn>n</mn>
</msub>
<mo>=</mo>
<msub>
<mn>w</mn>
<mn>0</mn>
</msub>
<mn>x</mn>
<mo>+</mo>
<msub>
<mn>w</mn>
<mn>1</mn>
</msub>
</math>
より

<math>
<mi>J</mi>
<mo>=</mo>
    <mfrac> 
        <mn>1</mn> 
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
    <msup>
        <mrow>
            <mo>(</mo>
            <msub>
                <mi>w</mi>
                <mn>0</mn> 
            </msub>
            <msub>
                <mi>x</mi>
                <mi>n</mi> 
            </msub>
            <mo>+</mo>
            <msub>
                <mi>w</mi>
                <mn>1</mn> 
            </msub>
            <mo>-</mo>
            <msub>
                <mi>t</mi>
                <mi>n</mi> 
            </msub>
            <mo>)</mo>
        </mrow>
        <mn>2</mn> 
    </msup>
</math>

これをw<sub>0</sub>,w<sub>1</sub>でそれぞれ偏微分すると

<math>
    <mfrac> 
        <mrow><mo>&part;</mo><mi>J</mi></mrow> 
        <mrow><mo>&part;</mo><msub><mi>w</mi><mn>0</mn></msub></mrow>
    </mfrac>
<mo>=</mo>
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
                <mi>w</mi>
                <mn>0</mn> 
            </msub>
            <msub>
                <mi>x</mi>
                <mi>n</mi> 
            </msub>
            <mo>+</mo>
            <msub>
                <mi>w</mi>
                <mn>1</mn> 
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
<mo>=</mo>
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
</math>
<br>
<math>
    <mfrac> 
        <mrow><mo>&part;</mo><mi>J</mi></mrow> 
        <mrow><mo>&part;</mo><msub><mi>w</mi><mn>1</mn></msub></mrow>
    </mfrac>
<mo>=</mo>
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
                <mi>w</mi>
                <mn>0</mn> 
            </msub>
            <msub>
                <mi>x</mi>
                <mi>n</mi> 
            </msub>
            <mo>+</mo>
            <msub>
                <mi>w</mi>
                <mn>1</mn> 
            </msub>
            <mo>-</mo>
            <msub>
                <mi>t</mi>
                <mi>n</mi> 
            </msub>
            <mo>)</mo>
<mo>=</mo>
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
</math>


になる。これより、上式は

<math>
<msub>
    <mi>w</mi>
    <mn>0</mn> 
</msub>
<mo>(</mo>
<mi>t</mi>
<mo>+</mo>
<mn>1</mn>
<mo>)</mo>
<mo>=</mo>
<msub>
    <mi>w</mi>
    <mn>0</mn> 
</msub>
<mo>(</mo>
<mi>t</mi>
<mo>)</mo>
<mo>-</mo>
<mn>α</mn>
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
</math>
<br>
<math>
<msub>
    <mi>w</mi>
    <mn>1</mn> 
</msub>
<mo>(</mo>
<mi>t</mi>
<mo>+</mo>
<mn>1</mn>
<mo>)</mo>
<mo>=</mo>
<msub>
    <mi>w</mi>
    <mn>1</mn> 
</msub>
<mo>(</mo>
<mi>t</mi>
<mo>)</mo>
<mo>-</mo>
<mn>α</mn>
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
</math>

となる。これを利用して求めてみよう。

コード例を以下に記載する。

まずは平均二乗誤差Jのw<sub>0</sub>,<sub>1</sub>における勾配を求める関数をd_mseとおくと以下のようになる。(w,x,tを入力とする)

```python
import numpy as np
def d_mse(w,x,t):
    y = w[0] * x + w[1]
    d_w0 = 2 * np.mean((y-t)*x)
    d_w1 = 2 * np.mean(y-t)
    return d_w0,d_w1
```

試しに、w=[10,10]での平均二乗誤差を算出してみる。データは前章で使ったデータを利用する。

```python
>>> 
>>> import numpy as np
>>> #入力値
... x = np.array([167.9,164.3,171.6,172.7,162.8,170.2,172.3,163.8,168.8,167.2,172.3,166.4,173.1,176.9,178.4,167.1,177.4,173.7,172.0,174.1])
>>> #実測値
... t  = np.array([58.0,58.2,60.1,65.2,55.0,60.9,61.9,56.4,62.9,57.0,64.9,55.9,68.0,67.9,69.1,60.8,65.6,66.1,59.9,69.5])
>>> 
>>> def d_mse(w,x,t):
...     #略
... 
>>> 
>>> d_w = d_mse([10,10],x,t)
>>> 
>>> print(d_w)
(564976.373, 3308.6699999999996)
>>> 
```

w=[10,10]ではw<sub>0</sub>方向への勾配が大きいことがわかる。

ではこのJの勾配を算出する関数d_mseを利用した勾配法を行う関数steepest_descent_method(x,t)を実装してみよう。
wは先ほどの[10,10]から始めるものとし、学習率αは今回は0.001として行う。

```python
import numpy as np
def steepest_descent_method(x,t):
    w=[10,10]           #wの初期値
    alpha=0.001         #学習率
    N=10000             #繰り返し回数
    min_dJ=0.1          #勾配法をやめる勾配の絶対値の閾値
    w_i=np.zeros([N,2]) #w_i[j]にはj回の勾配法で算出したwの値が入る
    w_i[0,:]=w          #w_iの最初の1行をwにする
    for i in range(1,N):
        dJ=d_mse(w_i[i-1],x,t)
        w_i[i,0]=w_i[i-1,0]-alpha*dJ[0] #w0(t+1)=w0(t)-α*∂J/∂w0
        w_i[i,1]=w_i[i-1,1]-alpha*dJ[1] #w1(t+1)=w1(t)-α*∂J/∂w1
        if( max(np.absolute(dJ)) < min_dJ):
            break
    w0=w_i[i,0]     
    w1=w_i[i,1]     
    w_i=w_i[:i,:]   
    return w0,w1,dJ,w_i
```

これを利用し、平均二乗誤差Jの最小値を勾配法を用いて求めて見る。

```python
>>> import numpy as np
>>> import matplotlib.pyplot as plt
>>> def d_mse(w,x,t):
...     # 略
>>> 
>>> def steepest_descent_method(x,t):
...     # 略
>>> 
>>> 
>>> xn=100
>>> x0=np.linspace(-25,25,xn)
>>> x1=np.linspace(120,170,xn)
>>> xx0,xx1=np.meshgrid(x0,x1)
>>> J=np.zeros((len(x0),len(x1)))

```