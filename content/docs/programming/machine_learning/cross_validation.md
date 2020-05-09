---
title: "交差検証"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 交差検証

先述の[ホールドアウト検証]({{< relref "/docs/programming/machine_learning/holdout_validation.md" >}})では、訓練(テスト)データの選び方によって出力結果が変わってくることを話した。なるべく変化が少なくなるようにするにはどうすれば良いのだろうか。

方法の一つとして、**交差検証**という方法を示す。

これは簡単にいうとホールドアウト検証を分割した全パターンで行い、それぞれの出力の平均値を評価に利用するという方式である。

データを分割した個数で**K-分割交差検証**とも呼ぶ。

データがN個あるとき、Kは1≦K≦Nの範囲で分割を行える。最大の分割数はK=Nで、このときテストデータの個数は１個になる。この場合の交差検証のことを特別に**リーブワンアウト交差検定**と呼ぶ。

先ほどの[ホールドアウト検証]({{< relref "/docs/programming/machine_learning/holdout_validation.md" >}})において、分割したデータのうち一つをテストデータとおいた場合での実行を全パターン、行ってみる。

k分割交差検証を行うコードは以下の通り。(k_hold_cross_validation.py)

```python
import numpy as np
from linear_basis_function import mse
from linear_basis_function import design_matrix
from linear_basis_function import linear_basis_func

#k分割交差検証 x:入力データ、t:実測値、m:線形基底関数モデルの数、k:分割する個数
def k_hold_cross_validation(x,t,m,k):
    x=np.array(x)
    t=np.array(t)
    n=x.shape[0]
    mse_train=np.zeros(k)
    mse_test=np.zeros(k)
    mu=np.linspace(min(x),max(x),m)
    for i in range(k):
        x_train = x[np.fmod(range(n),k) != i]
        t_train = t[np.fmod(range(n),k) != i]
        x_test = x[np.fmod(range(n),k) == i]
        t_test = t[np.fmod(range(n),k) == i]
        w_train = design_matrix(x_train,t_train,mu,1)

        y_train = linear_basis_func(w_train,x_train,mu,1)
        mse_train[i] = mse(y_train,t_train)

        y_test = linear_basis_func(w_train,x_test,mu,1)
        mse_test[i] = mse(y_test,t_test)

    return mse_train,mse_test
```

このコードを利用し、M:の範囲で、分割数を最大にしたリーブワンアウト検証を利用して最適なMを求めてみることを考える。

リーブワンアウト検証を利用したMを求めるコードは以下の通り。