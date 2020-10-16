---
title: "最小全域木"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# 最小全域木

無向グラフが与えられたときに、その内のある辺だけを用いてグラフ中の任意の２頂点を連結(ある頂点から他のどの頂点への経路が存在する)にした木のことを**全域木(Spanning Tree)**という。

辺にコストがあったときに、使われる辺のコストの和を最小にした全域木のことを**最小全域木(Minimum Spanning Tree)**という。

例えばベルマンフォード・ダイクストラ法で用いたグラフの最小全域木は以下のように表される。

![全域木例1](/img/procon/spanning_tree1.png)

