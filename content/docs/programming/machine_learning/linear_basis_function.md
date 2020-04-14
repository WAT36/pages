---
title: "線形基底関数モデル"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 線形基底関数モデル

先ほどまでの章では、データの予測に直線モデルを利用していたが、勿論直線モデルを利用するのが必ずしも最適ではないという場合もある。

直線ではなく、曲線となるような関数をモデルにしてみるのはどうだろうか？ここではそれについて述べる。

と言っても曲線となる関数は色々あるが、今回はその中でも汎用性が高いと言われている**線形基底関数モデル**を利用する。

基底関数とは、元となる関数という意味で、先ほどの線形関数(y=w<sub>0</sub>x+w<sub>1</sub>)のxを基底関数φ(x)に置き換えたものが線形基底関数モデルになる。

基底関数には色々種類があるが、ここではガウス関数を基底関数と置いた場合を例にとる。

その場合の線形基底関数モデルの式は以下のようになる。

{{< katex  >}}
\tag{1}  y(x, {\bf w} ) = w_{0} \phi_{0} (x) + w_{1} \phi_{1} (x) + w_{2} \phi_{2} (x) + \cdots + w_{n}
{{< /katex >}}

ここでφ<sub>j</sub>(x)はガウス関数で、以下のように表される。

{{< katex  >}}
\phi_{j} (x) = \exp( - \frac{ ( x - \mu_{j} )^2 }{ 2 v^2} )
{{< /katex >}}

μ<sub>j</sub>はガウス関数φ<sub>j</sub>(x)の中心位置で、vは関数の広がりの程度を示す。

次に、この線形基底関数モデルの式を行列を用い表現することを考えてみる。

式(1)において、

{{< katex  >}}
  {\bf w} = \left[
    \begin{array}{cccc}
      w_{0} \\
      w_{1} \\
      \vdots \\
      w_{n}
    \end{array}
  \right]
  ,
    {\bf \Phi} = \left[
    \begin{array}{cccc}
      \phi_{0} \\
      \phi_{1} \\
      \vdots \\
      \phi_{n}
    \end{array}
  \right]
{{< /katex >}}

とおくと、式(1)は以下のように表される。

{{< katex  >}}
\tag{2}  y(x, {\bf w} ) = \sum_{i=0}^{N} w_{i} \phi_{i} (x) = {\bf w} ^\mathrm{T} {\bf \Phi} ( {\bf x} )
{{< /katex >}}

ここで、式(1)を見ても分かるように、第n項目はw<sub>n</sub>のみであり、　φ<sub>n</sub>(x) は実は存在しない。

φ<sub>n</sub>(x)は、式(2)での行列計算のために入れているダミーの基底関数であり、w<sub>n</sub>φ<sub>n</sub>(x) が w<sub>n</sub>になる様にφ<sub>n</sub>(x) = 1　とする。


それでは、この式(2)を用い、これまでと同様にして平均二乗誤差Jを求めてみよう。

実測値を{t<sub>n</sub>}とおくと、平均二乗誤差Jは次の式(3)で表される。

{{< katex  >}}
\tag{3}  J( {\bf w} ) = \frac{1}{N} \sum_{n=0}^{N-1} ( {\bf w} ^\mathrm{T} {\bf \Phi} ( x_{n} ) - t_{n} ) ^2
{{< /katex >}}
