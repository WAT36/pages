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

では、このデータをニューラルネットワークを用いて学習させてみよう。まずはデータの前処理を行う。

MNISTでの入力データは1つにつき28*28の配列変数だったので、まずはこれを1*784の形に変形させる。

また、値を実数として扱うためにfloat型に変換し、255で割って0~1の範囲に値を収める。

そして、目標データもKerasの関数を使って1-of-K符号化法で変換する。

これらを、テストデータに対しても行わせる。

以上の流れをコードで実装すると、以下のようになる。(訓練データのみ)

```python
#行列の型を変換
x_train = x_train.reshape(60000,28*28)
#float型に変換
x_train = x_train.astype('float32')
#0~1の値に収める
x_train = x_train/255
#目標データも1-of-K符号化法で表す
y_train = np_utils.to_categorical(y_train,10)
```

次に、中間層、活性化関数を以下のように定義する。

```python
#ニューラルネットワークの定義
from keras.models import Sequential
from keras.layers import Dense,Activation
from keras.optimizers import Adam

#モデルの定義
model = Sequential()
#784次元を入力とする16個の中間層を定義する。活性化関数はシグモイド関数
model.add(Dense(16,input_dim=784,activation='sigmoid'))
#10個の出力層を定義する。活性化関数はソフトマックス関数
model.add(Dense(10,activation='softmax'))
#学習方法の設定。目的関数を交差エントロピー誤差、学習の評価として正答率を計算、アルゴリズムをAdamに設定
model.compile(loss='categorical_crossentropy',optimizer=Adam(),metrics=['accuracy'])
```



