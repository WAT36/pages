---
title: "2次元入力の面モデル"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 2次元入力の面モデル


先程の勾配法の例では入力データは1次元であったが、2次元であった場合はどうだろうか。

例として、以下のようなデータを用意する。

(入力が2次元のデータを用意する)

これらに対して、2次元の入力値が与えられたときに予測値を返すような簡単な面を予測してみよう。


まず面の式についてだが、一般的に3次元において座標(x,y,z)を通る面の式は

{{< katex  >}}
ax+by+cz+d=0    (a,b,c,dは実数)
{{< /katex >}}

となっているが、これを変形することにより、(x<sub>0</sub>,x<sub>1</sub>)を入力したときに予測値tを返すような面の式は以下のように表される。

{{< katex  >}}
y=w_{0} x_{0} + w_{1} x_{1} + w_{2} (w0,w1,w2は実数)
{{< /katex >}}

この式を利用し、予測値と正解値の差の合計が最も小さくなるようなw<sub>0</sub>,w<sub>1</sub>,w<sub>2</sub>を算出することを考える。

先程の1次元の時と同様に、平均二乗誤差を算出し、解析解を求めてみる。

まず、平均二乗誤差Jは

{{< katex  >}}
\begin{aligned}
J &= \frac{1}{N} \sum_{n=0}^{N-1} (y(x_{n}) - t_{n})^2 \\
  &= \frac{1}{N} \sum_{n=0}^{N-1} (w_{0} x_{n,0} + w_{1} x_{n,1} + w_{2} - t_{n})^2 
\end{aligned}
{{< /katex >}}

となり、このJが最も小さくなるようなw<sub>0</sub>,w<sub>1</sub>,w<sub>2</sub>を求めれば良い。

そうなるようなw<sub>0</sub>,w<sub>1</sub>,w<sub>2</sub>の値は、Jをw<sub>0</sub>,w<sub>1</sub>,w<sub>2</sub>でそれぞれ偏微分した時の値が０になる時である。

Jをw<sub>0</sub>,w<sub>1</sub>,w<sub>2</sub>でそれぞれ偏微分、また先ほどと同様に、avg(x)をxの平均値を算出する関数とおくと、各式は以下のように整理される。

(Jをw<sub>0</sub>,w<sub>1</sub>,w<sub>2</sub>でそれぞれ偏微分した結果を表示する)

この３式をそれぞれw<sub>0</sub>,w<sub>1</sub>,w<sub>2</sub>について解くと、w<sub>0</sub>,w<sub>1</sub>,w<sub>2</sub>は以下のように表される。

(w<sub>0</sub>,w<sub>1</sub>,w<sub>2</sub>の式を書く)

ここで、

var(a) = avg(a^2) - avg(a)^2

cov(a,b) = avg(ab)-avg(a)avg(b)

とする。var(a)はaの分散と呼ばれ、aのばらつき具合を示す値である。

cov(a,b)はa,bの共分散と呼ばれる値で、a,bがどれぐらい影響しあっているかを示す。

