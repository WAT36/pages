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

しかし３クラス以上の分類の時は、２クラス分類で使用したロジスティック回帰モデルを適用するのは難しい。

そのため、

