---
title: "手書き文字の認識"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# 手書き文字の認識

ここでは、実用的な問題への応用として、手書き数字をニューラルネットワークを使って認識させてみることを考えてみる。

## MNISTデータベース

手書き文字のデータは、**MNIST**と呼ばれるゆうメーなデータセットを利用する。

MNISTデータセットは、Kerasから以下のように利用することができる。

```python
from keras.datasets import mnist

# trainに60000個の訓練用データ、testに10000個のテストデータが入る
(x_train,y_train),(x_test,y_test) = mnist.load_data()
```

ここで、x_trainには60000*28*28の配列変数で、0~255の値をとるデータが入る。また、y_trainには60000*1の配列変数で、画像の認識結果である0-9の値が入る。



