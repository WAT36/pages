---
title: "セグメント木"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# セグメント木

セグメント木は区間と二分木を組み合わせたようなデータ構造である。例えば長さ8のリストをセグメント木で表すと以下のようになる。

![セグメント木例1](/img/procon/segment_tree1.png)

ここで、セグメント木の節点にどのようなデータを持たせるかによって、様々な機能を持つ木を作ることができる。

ここでは、RMQ(Range Minimum Query)を実現するセグメント木を例として見ていく。