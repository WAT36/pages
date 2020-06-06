---
title: "平均交差エントロピー誤差の最適解の導出"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 平均交差エントロピー誤差の最適解の導出

前述の平均交差エントロピー誤差

{{< katex  >}}
\tag{1}
    - \frac{1}{N} \log P( { \bf T } \mid { \bf X } ) 
        = - \frac{1}{N} \sum_{n=0}^{N-1} ( t_{n} \log y_{n} + (1 - t_{n}) \log (1 - y_{n}) ) 
{{< /katex >}}

が最小となる値はどのように求めるべきか。

[１次元入力２クラス分類]({{< relref "/docs/programming/machine_learning/1d_2class.md" >}})の章で用いた入力データで、平均交差エントロピー誤差を可視化してみよう。グラフ表示したものを以下に示す([コード](https://github.com/WAT36/python/blob/master/machine_learning/classification/cee_visualize.py))

<img src="/img/datascience/Figure_30.png" width=50%>



