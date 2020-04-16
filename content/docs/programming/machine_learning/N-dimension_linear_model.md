---
title: "N次元線形回帰モデル"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# N次元線形回帰モデル

先程までの章では1次元(直線モデル)、2次元(面モデル)の入力データを扱ってきたが、そこから更に次元を広げたN次元の入力データの場合はどうなるだろうか。
ここではそれについてを述べる。

N次元での入力データから予測値yを算出する式は以下の式で表される。

{{< katex  >}}
\tag{1}  y=w_{0} x_{0} + w_{1} x_{1} + w_{2} x_{2} + \cdots + w_{N-1} x_{N-1} + w_{N} (w_{i} は実数)
{{< /katex >}}

N次元の時も1次元2次元の時と同様に式(1)の様な形で表される。この式の形で表されるモデルは**線形回帰モデル**と呼ばれている。

式(1)において、最後のw<sub>N</sub>には入力データがない事に注意する。 (切片である)

ここでは簡略化のため、以降w<sub>N</sub> = 0として考える。すると式(1)は以下の様になる。

{{< katex  >}}
\tag{2}  y=w_{0} x_{0} + w_{1} x_{1} + w_{2} x_{2} + \cdots + w_{N-1} x_{N-1} 
{{< /katex >}}

この式(2)を行列表記で書き直すと、以下の様になる。

{{< katex  >}}
\begin{aligned}
\tag{3}  y  &= w_{0} x_{0} + w_{1} x_{1} + w_{2} x_{2} + \cdots + w_{N-1} x_{N-1} \\
            &=  \left[
                    \begin{array}{ccc}
                    w_{0} & \cdots & w_{N-1} 
                    \end{array}
                \right]
                \left[
                    \begin{array}{cccc}
                    x_{0} \\
                    \vdots \\
                    x_{N-1}
                    \end{array}
                \right]
            \\
            &= {\bf w} ^\mathrm{T} {\bf x} 
\end{aligned}
{{< /katex >}}

ここで

{{< katex  >}}
  {\bf w} = \left[
    \begin{array}{cccc}
      w_{0} \\
      w_{1} \\
      \vdots \\
      w_{N-1}
    \end{array}
  \right]
  ,
    {\bf x} = \left[
    \begin{array}{cccc}
      x_{0} \\
      x_{1} \\
      \vdots \\
      x_{N-1}
    \end{array}
  \right]
{{< /katex >}}

とおく。

<hr>

では、ここからN次元線形回帰モデルの解析解を求めてみよう。

これまでと同様にして、平均二乗誤差Jは以下の様に表される。

{{< katex  >}}
\begin{aligned}
\tag{4}  J( {\bf w} ) &= \frac{1}{N} \sum_{n=0}^{N-1} ( y(x_{n}) - t_{n} )^2 \\
                      &= \frac{1}{N} \sum_{n=0}^{N-1} ( {\bf w} ^\mathrm{T} {\bf x}_{n} - t_{n} )^2
\end{aligned}
{{< /katex >}}

ここも同様にして、式(4)をw<sub>i</sub>で偏微分すると、以下の様になる。

{{< katex  >}}
\begin{aligned}
\tag{5}  \frac{\partial J}{\partial w_{i} } 
            &= \frac{1}{N} \sum_{n=0}^{N-1} \frac{\partial J}{\partial w_{i} } ( {\bf w} ^\mathrm{T} {\bf x}_{n} - t_{n} )^2 \\
            &= \frac{2}{N} \sum_{n=0}^{N-1} ( {\bf w} ^\mathrm{T} {\bf x}_{n} - t_{n} ) x_{n,i} 
\end{aligned}
{{< /katex >}}

なお、x<sub>n,i</sub>はn番目の入力データにおけるi番目のパラメータである。

また、<b>w</b><sup>T</sup><b>x</b>をw<sub>i</sub>で偏微分すると、x<sub>n,i</sub>だけが残る事に注意する。

Jを最小にする<b>w</b>では、全てのw<sub>i</sub>について傾き0、つまり式(5)が０になるので、次の式が全てのiで成り立つ。

{{< katex  >}}
\begin{aligned}
\tag{6}  \frac{2}{N} \sum_{n=0}^{N-1} ( {\bf w} ^\mathrm{T} {\bf x}_{n} - t_{n} ) x_{n,i} &= 0 \\
\Leftrightarrow  \sum_{n=0}^{N-1} ( {\bf w} ^\mathrm{T} {\bf x}_{n} - t_{n} ) x_{n,i} &= 0
\end{aligned}
{{< /katex >}}

