---
title: "ホールドアウト検証"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# ホールドアウト検証

先述の[オーバーフィッティング(過学習)]({{< relref "/docs/programming/machine_learning/overfitting.md" >}})の章で、Mを大きくすればするほど既存の入力データに対する精度が高くなり、未知の入力に対する予測精度が悪くなるという問題があった。最適なMはどう求めれば良いのだろうか？

その一つの方法として、**ホールドアウト検証**という手法を挙げる。

これは、今ある入力データをいくつかの集合に分割し、そのうちのいくつかを学習に使って予測式を作り、残りのデータでその予測式を使った結果の平均二乗誤差(または標準偏差SD)を算出することでMの評価基準とする、という方法である。

ここで、予測式を作るための学習に使うデータのことを**訓練データ (training data)**といい、作成した予測式の評価に用いるデータを**テストデータ (test data)**と呼ぶ。

では試しに、先述の[線形基底関数モデル]({{< relref "/docs/programming/machine_learning/linear_basis_function.md" >}})で利用したデータ(=[直線モデル(線形回帰)]({{< relref "/docs/programming/machine_learning/linear_model.md" >}})で利用したデータ)を４分割し、初めの4分の３を訓練データとして学習させ、残りの4分の１をテストデータとして利用し、各Mの評価を行ってみよう。

コードを以下に記載する。(holdout_validation.py)

```python
import math
import matplotlib.pyplot as plt
import numpy as np
from linear_basis_function import mse
from linear_basis_function import design_matrix
from linear_basis_function import linear_basis_func

#入力値
x = np.load('x.npy')
#実測値
t = np.load('t.npy')

#mを設定
M=[1,5,9,13]

#訓練データ,全体の3/4
n=(len(x)//4)*3
x_train=x[:n]
t_train=t[:n]

#テストデータ
x_test=x[n:]
t_test=t[n:]

#メイン(プロット)
plt.figure(figsize=(20,7.5))
plt.subplots_adjust(wspace=0.25,hspace=0.3)

for i in range(len(M)):
    plt.subplot(2,2,i+1)

    m=M[i]

    #ガウス関数の中心 はxの最小値〜最大値の間で設定
    mu=np.linspace(min(x_train),max(x_train),m)
    #訓練データでw,y算出
    w_train = design_matrix(x_train,t_train,mu,1)
    y_test = linear_basis_func(w_train,x_test,mu,1)
    y_train = linear_basis_func(w_train,x_train,mu,1)

    #入力値xを(yを対応づけたまま)ソート
    xy_test=[[x_test[i],y_test[i]] for i in range(len(x_test))]
    xy_test.sort(key=lambda a:a[0])
    xi_test,yi_test=zip(*xy_test)

    xy_train=[[x_train[i],y_train[i]] for i in range(len(x_train))]
    xy_train.sort(key=lambda a:a[0])
    xi_train,yi_train=zip(*xy_train)

    #標準偏差SD
    sd = math.sqrt(mse(y_test,t_test))

    #プロット
    plt.scatter(x_train,t_train,c='white',label='train',edgecolors="black")
    plt.scatter(x_test,t_test,c='green',label='test')
    plt.xlim(min(x)-1,max(x)+1)
    plt.ylim(min(t)-1,max(t)+1)

    plt.plot(xi_test,yi_test,'-',color='red',label='y_test')
    plt.plot(xi_train,yi_train,'-',alpha=0.5,color='blue',label='y_train')
    plt.legend(loc='lower right')
    plt.title("M={0:d}, SD={1:.2f}".format(m,sd))

    plt.grid(True)
plt.show()
```

実行結果

<img src="/img/datascience/Figure_23.png" width=150%>

