---
title: "解析解"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 解析解

先程の直線モデルの例では勾配法を用いてw<sub>0</sub>、w<sub>1</sub>の値を求めたが、実は勾配法を用いなくても数式を計算していけば最適なw<sub>0</sub>、w<sub>1</sub>が求められる場合がある。

勾配法のような数値計算法で求められた近似的な解は数値解といい、方程式を解くことによって求められた厳密な解は**解析解**という。

先程の勾配法の章において、平均二乗誤差Jが極小になる時がw<sub>0</sub>、w<sub>1</sub>の求める値なので、この条件式からw0、w1の解析解を求めていく。

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
        <mi>&Sum;</mi> 
            <mrow>
                <mi>n</mi>
                <mo>=</mo>
                <mn>0</mn> 
            </mrow>
            <mi>N-1</mi> 
    </munderover> 
            <mn>(</mn>
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
            <mn>)</mn>
            <msub>
                <mi>x</mi>
                <mi>n</mi> 
            </msub>
<mo>=</mo>
<mn>0</mn>
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
        <mi>&Sum;</mi> 
            <mrow>
                <mi>n</mi>
                <mo>=</mo>
                <mn>0</mn> 
            </mrow>
            <mi>N-1</mi> 
    </munderover> 
            <mn>(</mn>
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
            <mn>)</mn>
<mo>=</mo>
<mn>0</mn>
</math>


この2式は以下のように展開できる。

<math>
    <msub>
        <mi>w</mi>
        <mn>0</mn> 
    </msub>
    <mfrac> 
        <mn>1</mn> 
        <mi>N</mi>
    </mfrac>
    <munderover> 
        <mi>&Sum;</mi> 
            <mrow>
                <mi>n</mi>
                <mo>=</mo>
                <mn>0</mn> 
            </mrow>
            <mi>N-1</mi> 
    </munderover> 
    <msup>
        <mrow>
        <msub>
            <mi>x</mi>
            <mi>n</mi> 
        </msub>
        </mrow>
        <mi>2</mi>
    </msup>
<mo>+</mo>
    <msub>
        <mi>w</mi>
        <mn>1</mn> 
    </msub>
    <mfrac> 
        <mn>1</mn> 
        <mi>N</mi>
    </mfrac>
    <munderover> 
        <mi>&Sum;</mi> 
            <mrow>
                <mi>n</mi>
                <mo>=</mo>
                <mn>0</mn> 
            </mrow>
            <mi>N-1</mi> 
    </munderover> 
    <msub>
        <mi>x</mi>
        <mi>n</mi> 
    </msub>
<mo>-</mo>
    <mfrac> 
        <mn>1</mn> 
        <mi>N</mi>
    </mfrac>
    <munderover> 
        <mi>&Sum;</mi> 
            <mrow>
                <mi>n</mi>
                <mo>=</mo>
                <mn>0</mn> 
            </mrow>
            <mi>N-1</mi> 
    </munderover> 
    <msub>
        <mi>t</mi>
        <mi>n</mi> 
    </msub>
    <msub>
        <mi>x</mi>
        <mi>n</mi> 
    </msub>
<mo>=</mo>
<mn>0</mn>
</math>
<br>
<br>
<math>
    <msub>
        <mi>w</mi>
        <mn>0</mn> 
    </msub>
    <mfrac> 
        <mn>1</mn> 
        <mi>N</mi>
    </mfrac>
    <munderover> 
        <mi>&Sum;</mi> 
            <mrow>
                <mi>n</mi>
                <mo>=</mo>
                <mn>0</mn> 
            </mrow>
            <mi>N-1</mi> 
    </munderover> 
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
    <mfrac> 
        <mn>1</mn> 
        <mi>N</mi>
    </mfrac>
    <munderover> 
        <mi>&Sum;</mi> 
            <mrow>
                <mi>n</mi>
                <mo>=</mo>
                <mn>0</mn> 
            </mrow>
            <mi>N-1</mi> 
    </munderover> 
    <msub>
        <mi>t</mi>
        <mi>n</mi> 
    </msub>
<mo>=</mo>
<mn>0</mn>
</math>


この時、
<math>
    <mfrac> 
        <mn>1</mn> 
        <mi>N</mi>
    </mfrac>
    <munderover> 
        <mi>&Sum;</mi> 
            <mrow>
                <mi>n</mi>
                <mo>=</mo>
                <mn>0</mn> 
            </mrow>
            <mi>N-1</mi> 
    </munderover> 
    <msub>
        <mi>x</mi>
        <mi>n</mi> 
    </msub>
</math>
はx<sub>n</sub>の平均値を表す。

ここで、avg(x)をxの平均値を算出する関数とおくと、上式は以下のように置き換えられる。

<math>
<msub>
    <mi>w</mi>
    <mn>0</mn> 
</msub>
<mi>avg</mi>
<mo>(</mo>
<msup>
    <mrow>
    <msub>
        <mi>x</mi>
        <mi>n</mi> 
    </msub>
    </mrow>
    <mi>2</mi>
</msup>
<mo>)</mo>
<mo>+</mo>
<msub>
    <mi>w</mi>
    <mn>1</mn> 
</msub>
<mi>avg</mi>
<mo>(</mo>
<msub>
    <mi>x</mi>
    <mi>n</mi> 
</msub>
<mo>)</mo>
<mo>-</mo>
<mi>avg</mi>
<mo>(</mo>
<msub>
    <mi>t</mi>
    <mi>n</mi> 
</msub>
<msub>
    <mi>x</mi>
    <mi>n</mi> 
</msub>
<mo>)</mo>
<mo>=</mo>
<mn>0</mn>
</math>
<br>
<br>
<math>
<msub>
    <mi>w</mi>
    <mn>0</mn> 
</msub>
<mi>avg</mi>
<mo>(</mo>
<msub>
    <mi>x</mi>
    <mi>n</mi> 
</msub>
<mo>)</mo>
<mo>+</mo>
<msub>
    <mi>w</mi>
    <mn>1</mn> 
</msub>
<mo>-</mo>
<mi>avg</mi>
<mo>(</mo>
<msub>
    <mi>t</mi>
    <mi>n</mi> 
</msub>
<mo>)</mo>
<mo>=</mo>
<mn>0</mn>
</math>

これらの式をw0、w1についてそれぞれ解くと、w0、w1は以下のように表される。

<math style="display: block;"> 
<mtable columnalign="right center left"> 
<mtr>
<mtd>
<msub>
    <mi>w</mi>
    <mn>0</mn> 
</msub>
</mtd>
<mtd>
<mo>=</mo>
</mtd>
<mtd>
<mfrac> 
    <mrow>
    <mi>avg</mi>
    <mo>(</mo>
    <msub>
        <mi>t</mi>
        <mi>n</mi> 
    </msub>
    <msub>
        <mi>x</mi>
        <mi>n</mi> 
    </msub>
    <mo>)</mo>
    <mo>-</mo>
    <mi>avg</mi>
    <mo>(</mo>
    <msub>
        <mi>t</mi>
        <mi>n</mi> 
    </msub>
    <mo>)</mo>
    <mi>avg</mi>
    <mo>(</mo>
    <msub>
        <mi>x</mi>
        <mi>n</mi> 
    </msub>
    <mo>)</mo>
    </mrow>
    <mrow>
    <mi>avg</mi>
    <mn>(</mn>
    <msup>
        <mrow>
        <msub>
            <mi>x</mi>
            <mi>n</mi> 
        </msub>
        </mrow>
        <mi>2</mi>
    </msup>
    <mn>)</mn>
    <mo>-</mo>
    <msup>
    <mrow>
    <mi>avg</mi>
    <mo>(</mo>
    <msup>
        <msub>
            <mi>x</mi>
            <mi>n</mi> 
        </msub>
    </msup>
    <mo>)</mo>
    </mrow>
    <mn>2</mn>
    </mrow>
</mfrac>
</mtd>
</math>
<br>
<br>
<math style="display: block;"> 
<mtable columnalign="right center left"> 
<mtr> 
<mtd>
<msub>
    <mi>w</mi>
    <mn>1</mn> 
</msub>
</mtd>
<mtd>
<mo>=</mo>
</mtd>
<mtd>
    <mi>avg</mi>
    <mn>(</mn>
    <msup>
        <msub>
            <mi>t</mi>
            <mi>n</mi> 
        </msub>
    </msup>
    <mn>)</mn>
<mo>-</mo>
<msub>
    <mi>w</mi>
    <mn>0</mn> 
</msub>
    <mi>avg(</mi>
    <msup>
        <msub>
            <mi>x</mi>
            <mi>n</mi> 
        </msub>
    </msup>
    <mn>)</mn>
</mtd>
</mtr>
<mtr>
<mtd>
</mtd>
<mtd>
<mo>=</mo>
</mtd>
<mtd>
    <mi>avg</mi>
    <mn>(</mn>
    <msup>
        <msub>
            <mi>t</mi>
            <mi>n</mi> 
        </msub>
    </msup>
    <mn>)</mn>
<mo>-</mo>
<mfrac> 
    <mrow>
    <mi>avg</mi>
    <mo>(</mo>
    <msub>
        <mi>t</mi>
        <mi>n</mi> 
    </msub>
    <msub>
        <mi>x</mi>
        <mi>n</mi> 
    </msub>
    <mo>)</mo>
    <mo>-</mo>
    <mi>avg</mi>
    <mo>(</mo>
    <msub>
        <mi>t</mi>
        <mi>n</mi> 
    </msub>
    <mo>)</mo>
    <mi>avg</mi>
    <mo>(</mo>
    <msub>
        <mi>x</mi>
        <mi>n</mi> 
    </msub>
    <mo>)</mo>
    </mrow>
    <mrow>
    <mi>avg</mi>
    <mn>(</mn>
    <msup>
        <mrow>
        <msub>
            <mi>x</mi>
            <mi>n</mi> 
        </msub>
        </mrow>
        <mi>2</mi>
    </msup>
    <mn>)</mn>
    <mo>-</mo>
    <msup>
    <mrow>
    <mi>avg</mi>
    <mo>(</mo>
    <msup>
        <msub>
            <mi>x</mi>
            <mi>n</mi> 
        </msub>
    </msup>
    <mo>)</mo>
    </mrow>
    <mn>2</mn>
    </mrow>
</mfrac>
    <mi>avg(</mi>
    <msup>
        <msub>
            <mi>x</mi>
            <mi>n</mi> 
        </msub>
    </msup>
    <mn>)</mn>
</mtd>
</mtr>
</mtable>
</math>

では、実際にx、tを代入してw0、w1を求めてみよう。(x,tは前章のnpyファイルから取得)

```python
import numpy as np
  
def d_mse(w,x,t):
    y = w[0] * x + w[1]
    d_w0 = 2 * np.mean((y-t)*x)
    d_w1 = 2 * np.mean(y-t)
    return d_w0,d_w1

#入力値
x = np.load('x.npy')
#実測値
t = np.load('t.npy')

#t*x
tx = [t[i]*x[i] for i in range(len(x))]
#x^2
xx = [x[i]*x[i] for i in range(len(x))]

#w0
w0 = (np.mean(tx) - np.mean(t)*np.mean(x))/(np.mean(xx) - np.mean(x)*np.mean(x))
#w1
w1 = np.mean(t) - w0*np.mean(x)

print("w0 = {0:.9f}".format(w0))
print("w1 = {0:.9f}".format(w1))

dJ=d_mse([w0,w1],x,t)
print("dJ(w0,w1) = [{0:.9f} {1:.9f}]".format(dJ[0],dJ[1]))
```

実行結果

```
w0 = 0.906006875
w1 = -92.445073277
dJ(w0,w1) = [-0.000000000 -0.000000000]
```

となり、閾値を設定して求めた前述の勾配法よりもより詳細な値が求められる。

では、当初の目的であったこの求めたw<sub>0</sub>,w<sub>1</sub>を使った直線モデルの式を求めてみる。


```python
import numpy as np
import matplotlib.pyplot as plt

x = np.load('x.npy')
t = np.load('t.npy')

def f(x):
    return (0.906006875 * x) - 92.445073277

y = f(x)

plt.scatter(x,t)

x=np.append(x,0)
y=np.append(y,f(0))
x=np.append(x,200)
y=np.append(y,f(200))

plt.plot(x,y,color='red')
plt.xlim(160,180)
plt.ylim(50,75)
plt.grid(True)
plt.show()
```

実行結果

<img src="/img/datascience/Figure_19.png" width=50%>

<font color="#dcdcdc">(最初になんとなく求めたのとそこまで変わらない気がするが、)</font>

これでこの入力データにおいて、直線モデルでの最も誤差が少ない最適な式が求められた。
