---
title: "手書き文字の認識"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# 手書き文字の認識

ここでは、実用的な問題への応用として、手書き数字をニューラルネットワークを使って認識させてみることを考えてみる。

## MNISTデータベース

手書き文字のデータは、**MNIST**と呼ばれるなデータセットを利用する。

MNISTデータセットは、Kerasから以下のように利用することができる。

```python
from keras.datasets import mnist

# trainに60000個の訓練用データ、testに10000個のテストデータが入る
(x_train,y_train),(x_test,y_test) = mnist.load_data()
```

ここで、x_trainには60000*28*28の配列変数で、0~255の値をとるデータが入る。また、y_trainには60000*1の配列変数で、画像の認識結果である0-9の値が入る。

例として、データを一つとって図示してみよう。以下にその過程を示す。

```python
#最初のデータだけ図示
x0 = x_train[0]

# ヒートマップにして表示
plt.figure()
plt.imshow(x0,interpolation='nearest',vmin=0,vmax=255,cmap='binary')
plt.show()

#ちなみに認識結果（目標値）は
print('↑の目標値：{0}'.format(y_train[0]))
```

実行結果

<img src="/img/datascience/Figure_49.png" width=100%>


## ２層フィードフォワードニューラルネットワークでの学習

では、このデータをニューラルネットワークを用いて学習させてみよう。

MNISTでの入力データは1つにつき28*28の配列変数だったので、まずはこれを1*784の形に変形させる。

また、値を実数として扱うためにfloat型に変換し、255で割って0~1の範囲に値を収める。

