---
title: "２次元入力３クラス分類"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# ２次元入力３クラス分類

次は２次元入力において、３クラス分類を行うケースについてを考える。

先程の[２次元入力２クラス分類]({{< relref "/docs/programming/machine_learning/2d_2class.md" >}})のデータに、良いでも悪いでもない「まあまあ」というカテゴリ(クラス)を追加したようなデータを考えてみよう。

そのようなデータを新たに作成し(入力データは[こちら](https://github.com/WAT36/python/blob/master/machine_learning/classification/x_2d3class.npy)、目標データは[こちら](https://github.com/WAT36/python/blob/master/machine_learning/classification/t_2d3class.npy))、図示してみる。

<img src="/img/datascience/Figure_35.png" width=50%>

ここから３クラス分類を行うための決定境界を求めてみる。

しかし３クラス以上の分類の時は、２クラス分類で使用したロジスティック回帰モデルを適用するのは難しい。(使用しているシグモイド関数が0または1に近い値を取るため)

そのため、入力データとパラメータを用いて計算した値を、シグモイド関数ではない方法を用いることで条件付き確率・交差エントロピー誤差・決定境界を求めることを考える。

では、シグモイド関数ではない方法に何があるだろうか。

方法の一つとして、ここでは**[ソフトマックス関数]({{< relref "/docs/programming/math/softmax.md" >}})**を利用することを考える。

ソフトマックス関数を利用することで、出力値が全て0以上1以下の値に収まるので、この値を条件付き確率として用いる。

p次元入力qクラス分類において、入力データx<sub>n</sub> (n=0,..,p-1)とした時、常に１を取る入力データx<sub>p</sub>を追加、出力値がq個得られるようにパラメータをq×(p+1)行列で用意し、以下のように計算して値を取る。

<img src="/img/datascience/Figure_36.png" width=75%>

例として２次元入力３クラス分類においては以下のような設定をし、出力値を得る。

<img src="/img/datascience/Figure_37.png" width=75%>

この図より、入力データx<sub>n</sub>とパラメータw<sub>n</sub>から出力データa<sub>n</sub>を以下のように計算する。

{{< katex  >}}
\begin{aligned}
\tag{1}  a_{k}  &=  w_{k0} x_{0} + w_{k1} x_{1} + w_{k2} x_{2}  (k=0,1,2) \\
                &=  \sum_{i=0}^{p} w_{ki} x_{i}  (k=0,1,2)
\end{aligned}
{{< /katex >}}

これにより、まず出力a<sub>k</sub>を得られる。



