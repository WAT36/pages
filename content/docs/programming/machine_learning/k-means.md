---
title: "K-Means法"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# K-Means法

クラスタリングの手法の一つ、K-means法についてを述べる。

先ほども示した以下のデータを例にとって、大まかな手順を、以下に記載しながら進める。

<img src="/img/datascience/Figure_39.png" width=50%>

## クラスタの数を定める

K-means法では、まずデータを分けるクラスタの数を定める。

例として、ここではデータを３つのクラスタに分けてみよう。


## 各クラスタの中心位置を定める

次に、それぞれのクラスタの中心位置を示す座標(ベクトル)を定める。

中心位置を示すベクトルを<b>μ</b>とし、1.で定めた数だけ用意する。

k番目のクラスタの中心ベクトルは以下のように表す。

{{< katex  >}}
\tag{1}  {\bf \mu}_{k}  =  
                \left[
                    \begin{array}{cc}
                    \mu_{k0}  & \mu_{k1} 
                    \end{array}
                \right]
{{< /katex >}}

ここでは入力データの次元が２次元なので、μ<sub>k</sub>も２次元ベクトルとなる。

また、クラスタは３つと定めたので、k=0,1,2となる。

例として、μを以下のように定めてみよう。

μ<sub>0</sub> = [38,6],μ<sub>1</sub> = [40,6],μ<sub>2</sub> = [42,6]

## 入力データが属するクラスタ(ベクトル)の用意

次に、各入力データが属するクラスタを示すベクトル<b>R</b>を用意する。

{{< katex  >}}
\tag{2}  {\bf R}  =  
                \left[
                    \begin{array}{c}
                    {\bf r}_{0} \\
                    {\bf r}_{1} \\
                    \vdots \\
                    {\bf r}_{N-1} \\
                    \end{array}
                \right]
{{< /katex >}}

また、

{{< katex  >}}
\tag{3}  {\bf r}_{k}  =  
                \left[
                    \begin{array}{cc}
                    r_{k0}  & r_{k1} & r_{k2}
                    \end{array}
                \right]
{{< /katex >}}

とする。<b>r</b><sub>k</sub>の次元はクラスタの数に一致する。今回はクラスタは３つなので、<b>r</b><sub>k</sub>はr<sub>k2</sub>まで用意する。


また、r<sub>ki</sub>は、k番目の入力データがクラスタiに属する場合に1,そうでない場合0をとる変数とする。

{{< katex  >}}
\tag{4}
r_{nk} = 
\begin{cases}
    1 & (入力データkがクラスタiに属する場合)  \\
    0 & (入力データkがクラスタiに属さない場合)
\end{cases}
{{< /katex >}}


これらにより、<b>R</b>は以下のように表される。

{{< katex  >}}
\tag{5}  {\bf R}  =  
                \left[
                    \begin{array}{ccc}
                    r_{00} & r_{01} & r_{02} \\
                    r_{10} & r_{11} & r_{12} \\
                    \vdots & \vdots & \vdots \\
                    r_{n-1,0} & r_{n-1,1} & r_{n-1,2} \\
                    \end{array}
                \right]
{{< /katex >}}

以上により、クラスタの中心位置を示すベクトル<b>μ</b>、入力データが属するクラスタの行列<b>R</b>の準備が完了した。

ここから、行列<b>R</b>を計算していくことにより各入力データが属するクラスタを決定していく。

