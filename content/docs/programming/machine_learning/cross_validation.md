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

先ほどの[ホールドアウト検証]({{< relref "/docs/programming/machine_learning/holdout_validation.md" >}})において、分割したデータのうち一つをテストデータとおいた場合での実行を全パターン、行ってみる。

