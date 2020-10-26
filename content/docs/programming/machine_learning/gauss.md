---
title: "ガウス関数"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# ガウス関数


{{< tabs "gauss" >}}
{{< tab "Python" >}}

ガウス関数は以下の式で表される関数である。  

<math>
    <mi>a</mi>
    <mi>exp</mi>
    <mrow>
        <mo>(</mo>
            <mo>-</mo>
            <mfrac>
                <mrow>
                    <msup>
                        <mrow>
                            <mi>(x</mi>
                            <mo>-</mo>
                            <mi>&mu;</mi>
                            <mn>)</mn>
                        </mrow>
                        <mn>2</mn>
                    </msup>
                </mrow>
                <mrow>
                    <msup>
                        <mi>&sigma;</mi>
                        <mn>2</mn>
                    </msup>
                </mrow>
            </mfrac>
        <mo>)</mo>
    </mrow>
</math>

ここで、式中の変数は以下の意味を持つ。

- μ：中心(平均)
- σ：標準偏差
- a：高さ(係数)

ここで、
<math>
    <mi>a</mi>
    <mo>=</mo>
    <mfrac>
        <mn>1</mn>
        <mrow>
            <msqrt>
                <mn>2</mn>
                <mi>&pi;</mi>
                <msup>
                    <mi>σ</mi>
                    <mn>2</mn>
                </msup>
            </msqrt>
        </mrow>
    </mfrac>
</math>
とした時、xで積分すると1になるため、確率密度関数としても使われる。

例として、a=1,μ=0,σ=1とした時のガウス関数を示す。

```python
>>> import numpy as np
>>> import matplotlib.pyplot as plt
>>> 
>>> #ガウス関数
>>> def gauss(a,mu,sigma):
...     return a * np.exp( -(x-mu)**2 / sigma**2 )
... 
>>> 
>>> x=np.linspace(-3,3,100)
>>> plt.plot(x,gauss(1,0,1),'black',linewidth=3)
[<matplotlib.lines.Line2D object at 0x11740d908>]
>>> 
>>> plt.ylim(-0.5,1.5)
(-0.5, 1.5)
>>> plt.xlim(-3,3)
(-3, 3)
>>> plt.grid(True)
>>> plt.show()
>>> 
```

実行結果

<img src="/img/datascience/Figure_15.png" width=50%>


{{< /tab >}}
{{< /tabs >}}


