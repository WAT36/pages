---
title: "２次元入力２クラス分類"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---


# ２次元入力２クラス分類

前章では１次元入力であったが、次は２次元入力の場合を考えてみる。

[１次元入力２クラス分類]({{< relref "/docs/programming/machine_learning/1d_2class.md" >}})で使用したデータに、pHのデータも加えた２次元入力のデータを新たに作成する。(入力データは[こちら](https://github.com/WAT36/python/blob/master/machine_learning/classification/x_2d2class.npy)、目標データは[こちら](https://github.com/WAT36/python/blob/master/machine_learning/classification/t_2d2class.npy))

図示すると以下のようになる。(コードは[こちら](https://github.com/WAT36/python/blob/master/machine_learning/classification/2d_2class_plt.py))

<img src="/img/datascience/Figure_32.png" width=50%>

このデータから、２次元入力２クラス分類についてを考えてみよう。


## ロジスティック回帰モデル

前述の１次元入力２クラス分類と同じく、２次元入力２クラス分類のときもロジスティック回帰モデルを適用することを考えてみる。２次元入力２クラス分類の場合のロジスティック回帰モデルはどのようになるだろうか。

１次元入力の場合は

{{< katex  >}}
\begin{aligned}
\tag{1}  y  &=  \sigma ( w_{0} x + w_{1} ) \\
            &=  \frac{1}{1 + \exp(-(w_{0} x + w_{1}))}
\end{aligned}
{{< /katex >}}

であった。

２次元入力の場合は、パラメータw<sub>0</sub>,w<sub>1</sub>,w<sub>2</sub>、入力変数をx<sub>0</sub>,x<sub>1</sub>と置いたとき、以下のように表される。

{{< katex  >}}
\begin{aligned}
\tag{2}  y  &=  \sigma ( w_{0} x_{0} + w_{1} x_{1} + w_{2} ) \\
            &=  \frac{1}{1 + \exp(-(w_{0} x_{0} + w_{1} x_{1} + w_{2}))}
\end{aligned}
{{< /katex >}}

ここから、最適なパラメータwを求めていこう。

１次元入力２クラス分類の時と同じく、平均交差エントロピー誤差関数は以下の式の通りになる。

{{< katex  >}}
\tag{3}  - \frac{1}{N} \log P( { \bf T } \mid { \bf X } ) 
            E( { \bf w } ) =   - \frac{1}{N} \sum_{n=0}^{N-1} ( t_{n} \log y_{n} + (1 - t_{n}) \log (1 - y_{n}) ) 
{{< /katex >}}

同様にしてパラメータw<sub>0</sub>,w<sub>1</sub>,w<sub>2</sub>での偏微分を求めると以下のようになる。


{{< katex  >}}
\tag{4} \frac{\partial }{\partial w_{0} }　E( { \bf w } )
        = \frac{1}{N} \sum_{n=0}^{N-1} ( y_{n} - t_{n} ) x_{n,0}
{{< /katex >}}


{{< katex  >}}
\tag{5} \frac{\partial }{\partial w_{1} }　E( { \bf w } )
        = \frac{1}{N} \sum_{n=0}^{N-1} ( y_{n} - t_{n} ) x_{n,1}
{{< /katex >}}

{{< katex  >}}
\tag{6} \frac{\partial }{\partial w_{2} }　E( { \bf w } )
        = \frac{1}{N} \sum_{n=0}^{N-1} ( y_{n} - t_{n} )
{{< /katex >}}

ここで、x<sub>n,i</sub>はx<sub>n</sub>のi番目の入力である。

よって、これらを元に勾配法を用いて、平均交差エントロピー誤差が最小となるようなパラメータ<b>w</b>の値を求めてみよう。

まず、２次元入力のロジスティック回帰モデルのコードは以下の通り。

(logistic_regression_2d.py)

```python
import numpy as np
from sigmoid import sigmoid

#ロジスティック回帰モデル(２次元入力)
def logistic_regression_2d(w,x):
    x = w[0]*x[:,0] + w[1]*x[:,1] + w[2]
    return sigmoid(x)
```

２次元入力での平均交差エントロピー誤差のコードは以下の通り。

(cross_entropy_error_2d.py)

```python
import numpy as np
from logistic_regression_2d import logistic_regression_2d

#交差エントロピー誤差
def cross_entropy_error_2d(w,x,t):
    y=logistic_regression_2d(w,x)
    cee=0
    for n in range(len(y)):
        cee -= (t[n]*np.log(y[n]) + (1-t[n])*np.log(1-y[n]))
    return cee


#平均交差エントロピー誤差
def ave_cross_entropy_error_2d(w,x,t):
    return cross_entropy_error_2d(w,x,t)/len(x)
```

続いて、平均交差エントロピー誤差の偏微分を求めるコードは以下の通り。

(d_cee_2d.py)

```python
import numpy as np
from logistic_regression_2d import logistic_regression_2d

#平均交差エントロピー誤差の微分(２次元入力)
def d_cee_2d(w,x,t):
    y = logistic_regression_2d(w,x)
    d_cee=np.zeros(3)
    for n in range(len(y)):
        #w0
        d_cee[0]+=(y[n]-t[n])*x[:,0]
        #w1
        d_cee[1]+=(y[n]-t[n])*x[:,1]
        #w2
        d_cee[2]+=y[n]-t[n]
    d_cee /= len(y)
    return d_cee
```
