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

この図より最小値はw<sub>0</sub>=0のあたりだろうと推測できる。

前に述べた平均二乗誤差のところでは解析解を算出することで求められたが、今回も解析解を求めることは可能だろうか。

実は、平均交差エントロピー誤差はシグモイド関数を含んでいるため、解析解を求めることは不可能である。

ならばどのようにして求めるのが良いか？

そこで方法として、平均二乗誤差の章でも述べた、**勾配法**を用いて求めることを考えてみる。

まず、平均交差エントロピー誤差を以下のように置き換える。


{{< katex  >}}
\begin{aligned}
\tag{2}
    E_{n} ( { \bf w } )
        &= - ( t_{n} \log y_{n} + (1 - t_{n}) \log (1 - y_{n}) )
\end{aligned}
{{< /katex >}}

{{< katex  >}}
\begin{aligned}
\tag{3} E( { \bf w } )
        &= - \frac{1}{N} \log P( { \bf T } \mid { \bf X } ) \\
        &= - \frac{1}{N} \sum_{n=0}^{N-1} ( t_{n} \log y_{n} + (1 - t_{n}) \log (1 - y_{n}) ) \\
        &=   \frac{1}{N} \sum_{n=0}^{N-1} E_{n} ( { \bf w } )
\end{aligned}
{{< /katex >}}

このE(<b>w</b>)に勾配法を適用して、最適な<b>w</b>を求めることを考える。

まず、式(3)をw<sub>0</sub>で偏微分すると以下のようになる。

{{< katex  >}}
\begin{aligned}
\tag{4} \frac{\partial }{\partial w_{0} }　E( { \bf w } )
        &= \frac{1}{N} \frac{\partial }{\partial w_{0} } \sum_{n=0}^{N-1} E_{n} ( { \bf w } ) \\
        &= \frac{1}{N} \sum_{n=0}^{N-1} \frac{\partial }{\partial w_{0} } E_{n} ( { \bf w } )
\end{aligned}
{{< /katex >}}

