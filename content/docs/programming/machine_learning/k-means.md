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


