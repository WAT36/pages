---
title: "シグモイド関数とソフトマックス関数"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# シグモイド関数とソフトマックス関数

シグモイド関数とソフトマックス関数は類似しているところがある。  

{{< tabs "softmax" >}}
{{< tab "Python" >}}

2変数(x<sub>0</sub>、x<sub>1</sub>)の時のソフトマックス関数(の一つ)は以下の通りになる。  

<table cellspacing="0" cellpadding="3" style="white-space:nowrap;"><tr><td>e<sup>x<sub>0</sub></sup>/e<sup>x<sub>0</sub></sup>+e<sup>x<sub>1</sub></sup></td></tr></table>

分母分子にe<sup>-x<sub>0</sub></sup>を掛けると  

<table cellspacing="0" cellpadding="3" style="white-space:nowrap;"><tr><td>1/1+e<sup>-(x<sub>0</sub>-x<sub>1</sub>)</sup></td></tr></table>

となり、ここでx = x<sub>0</sub> - x<sub>1</sub> とおくとシグモイド関数となる。

<table cellspacing="0" cellpadding="3" style="white-space:nowrap;"><tr><td>1/1+e<sup>-x</sup></td></tr></table>

つまりは2変数のソフトマックス関数の入力x<sub>0</sub>、x<sub>1</sub>の差を新たな変数xとして表したのがシグモイド関数である。  
シグモイド関数を他変数に拡張したものがソフトマックス関数となる。  

{{< /tab >}}
{{< /tabs >}}




