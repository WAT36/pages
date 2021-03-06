---
title: "機械学習"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 機械学習

機械学習の手法についてをまとめる。

- [教師あり学習]({{< relref "/docs/programming/machine_learning/supervised_learning.md" >}})
     - 回帰
         - [直線モデル(線形回帰)]({{< relref "/docs/programming/machine_learning/linear_model.md" >}})
         - [平均二乗誤差]({{< relref "/docs/programming/machine_learning/mse.md" >}})
         - [勾配法(最急降下法)]({{< relref "/docs/programming/machine_learning/steepest_descent_method.md" >}})
         - [解析解]({{< relref "/docs/programming/machine_learning/analytical_solution.md" >}})
         - [2次元入力の面モデル]({{< relref "/docs/programming/machine_learning/2dmodel.md" >}})
         - [N次元線形回帰モデル]({{< relref "/docs/programming/machine_learning/N-dimension_linear_model.md" >}})
         - [線形基底関数モデル]({{< relref "/docs/programming/machine_learning/linear_basis_function.md" >}})
         - [オーバーフィッティング(過学習)]({{< relref "/docs/programming/machine_learning/overfitting.md" >}})
         - [ホールドアウト検証]({{< relref "/docs/programming/machine_learning/holdout_validation.md" >}})
         - [交差検証]({{< relref "/docs/programming/machine_learning/cross_validation.md" >}})
     - 分類
         - [１次元入力２クラス分類]({{< relref "/docs/programming/machine_learning/1d_2class.md" >}})
         - [ロジスティック回帰モデル]({{< relref "/docs/programming/machine_learning/logistic_regression.md" >}})
         - [交差エントロピー誤差]({{< relref "/docs/programming/machine_learning/cross_entropy_error.md" >}})
         - [平均交差エントロピー誤差の最適解の導出]({{< relref "/docs/programming/machine_learning/cee_ans.md" >}})
         - [２次元入力２クラス分類]({{< relref "/docs/programming/machine_learning/2d_2class.md" >}})
         - [２次元入力３クラス分類]({{< relref "/docs/programming/machine_learning/2d_3class.md" >}})
- [教師なし学習]({{< relref "/docs/programming/machine_learning/unsupervised_learning.md" >}})
     - [クラスタリング]({{< relref "/docs/programming/machine_learning/clustering.md" >}})
         - [K-Means法]({{< relref "/docs/programming/machine_learning/k-means.md" >}})
         - [歪み尺度]({{< relref "/docs/programming/machine_learning/distortion_measure.md" >}})
         - [混合ガウスモデル]({{< relref "/docs/programming/machine_learning/gaussian_mixture_model.md" >}})
- 深層学習(ディープラーニング)
     - [ニューラルネットワーク]({{< relref "/docs/programming/machine_learning/neural_network.md" >}})
     - [数値微分法]({{< relref "/docs/programming/machine_learning/numerical_differentiation.md" >}})
     - [誤差逆伝搬法]({{< relref "/docs/programming/machine_learning/back_propagation.md" >}})
     - [Kerasでニューラルネットワーク]({{< relref "/docs/programming/machine_learning/keras.md" >}})
     - [手書き文字の認識]({{< relref "/docs/programming/machine_learning/mnist.md" >}})
     - [フィルターと畳み込みニューラルネットワーク]({{< relref "/docs/programming/machine_learning/filter.md" >}})

- 数学系
     - 関数
         - [シグモイド関数]({{< relref "/docs/programming/machine_learning/sigmoid.md" >}})
         - [ソフトマックス関数]({{< relref "/docs/programming/machine_learning/softmax.md" >}})
         - [シグモイド関数とソフトマックス関数]({{< relref "/docs/programming/machine_learning/softmax_sigmoid.md" >}})
         - [ガウス関数]({{< relref "/docs/programming/machine_learning/gauss.md" >}})
         - ガウス関数(2次元)
     - 確率・統計
         - [条件付き確率]({{< relref "/docs/programming/machine_learning/conditional_probability.md" >}})
         - [最尤推定]({{< relref "/docs/programming/machine_learning/maximum_likelihood.md" >}})
