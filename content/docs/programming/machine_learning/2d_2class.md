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

