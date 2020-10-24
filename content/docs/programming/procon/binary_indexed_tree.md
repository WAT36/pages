---
title: "Binary Indexed Tree"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# Binary Indexed Tree

Binary Indexed Tree(BIT)は、セグメント木を応用したデータ構造で、リスト(数列)a<sub>n</sub>が与えられた時、次のことが行える。

- iが与えられた時、a<sub>0</sub>...a<sub>i-1</sub>の和を計算する。
- i,xが与えられた時、a<sub>i-1</sub>+=xとする。

BITをどのように表すかだが、セグメント木と同様に、リストの各要素を木の葉の要素にならべる。

例として、以下のリストをBITで表すと、以下のような図で表される。

```
a=[5,2,3,7,4,1,9,10]
```

![BIT例1](/img/procon/bit1.png)

BITでは、節点の値にその節点が示す区間の値の和を設定する。

ここから、例えばi=5を入力した時、a<sub>0</sub>〜a<sub>4</sub>までの和を求めるが、この求め方もセグメント木の時と同様に、a<sub>0</sub>〜a<sub>4</sub>の区間を示す節点を取り出してきて、その値の和を求めれば良い。この例の時、以下のような図で表される。