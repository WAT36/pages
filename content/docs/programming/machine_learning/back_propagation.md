---
title: "誤差逆伝搬法"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# 誤差逆伝搬法（バックプロパゲーション）

誤差逆伝搬法（バックプロパゲーション）はフィードフォワードネットワークモデルに学習をさせる方法として有名な方法であり、これはネットワークの出力と目標値との誤差の情報を使って、出力層、中間層へと重みを更新していくことから、この名がついている。しかし、実態は勾配法そのものである。

まずは、前章のn1つ分に対する交差エントロピー誤差E<sub>n</sub>を以下のように考える。

{{< katex  >}}
\tag{1}  E_{n} ( { \bf w } ,{ \bf v } ) = - \sum_{n=0}^{N-1} \sum_{k=0}^{K-1} t_{nk} \log (y_{nk}) 
{{< /katex >}}

これを利用して、以下のように置き換える。

{{< katex  >}}
\tag{2}}  E ( { \bf w } ,{ \bf v } ) = - \frac{1}{N} \sum_{n=0}^{N-1} \sum_{k=0}^{K-1} E_{n} ( { \bf w } ,{ \bf v } )
{{< /katex >}}

ここから、重み行列の各パラメータに対する偏微分を行なっていこう。誤差関数をw<sub>ji</sub>で偏微分すると、以下のようになる。

{{< katex  >}}
\tag{3}  
\begin{aligned}
\frac{\partial E}{ \partial w_{ji} } 
    &= - \frac{\partial }{ \partial w_{ji} } \frac{1}{N} \sum_{n=0}^{N-1} E_{n} \\
    &= \frac{1}{N} \sum_{n=0}^{N-1} \frac{\partial E_{n} }{ \partial w_{ji} }
\end{aligned}
{{< /katex >}}

また、パラメータには<b>v</b>もあるので、v<sub>kj</sub>に対しても偏微分を行う。すると、式(3)と同じようになる。

この式に出てくる、∂E<sub>n</sub>/∂w<sub>ji</sub>と∂E<sub>n</sub>/∂v<sub>kj</sub>を求めてみることを考える。まずは、∂E<sub>n</sub>/∂v<sub>kj</sub>を見てみよう。

偏微分の連鎖律を使って、∂E<sub>n</sub>/∂v<sub>kj</sub>は以下のように置き換えられる。

{{< katex  >}}
\tag{4}  \frac{ \partial E_{n} }{ \partial v_{kj} } = \frac{\partial E_{n} }{\partial a_{k}}  \frac{\partial a_{k} }{\partial v_{kj} } 
{{< /katex >}}

この式(4)において、まずは例として出力値の数を3(K=3),k=0の場合を見てみる。

すると、∂E<sub>n</sub>/∂a<sub>0</sub>は、Eを変形して以下のように置き換えられる。

{{< katex  >}}
\tag{5}  \frac{ \partial E_{n} }{ \partial a_{0} } = \frac{\partial }{\partial a_{0}} ( -t_{0} \log y_{0} -t_{1} \log y_{1} -t_{2} \log y_{2} )
{{< /katex >}}

ここで、t<sub>i</sub>は目標データなのでs<sub>k</sub>で変化することはないが、y<sub>i</sub>は入力総和a<sub>0</sub>から算出されるので、関係している。

これにより式(16)は以下のように置き換えられる。

{{< katex  >}}
\tag{6}  \frac{ \partial E_{n} }{ \partial a_{0} } = -t_{0} \frac{1}{y_{0}} \frac{\partial y_{0}}{\partial a_{0}} -t_{1} \frac{1}{y_{1}} \frac{\partial y_{1}}{\partial a_{0}} -t_{2} \frac{1}{y_{2}} \frac{\partial y_{2}}{\partial a_{0}}
{{< /katex >}}

u=exp(a<sub>0</sub>)+exp(a<sub>1</sub>)+exp(a<sub>2</sub>)とおいて計算すると

{{< katex  >}}
\tag{7}  
\begin{aligned}
\frac{\partial y_{0}}{\partial a_{0}}
    &= \frac{\partial }{ \partial a_{0} } \frac{ \exp (a_{0}) }{u} \\
    &= \frac{ \exp (a_{0}) u - \exp (a_{0}) \exp (a_{0}) }{ u^2 }  \\
    &= \frac{\exp (a_{0})}{u} ( \frac{u - \exp (a_{0})}{u} ) \\
    &= \frac{\exp (a_{0})}{u} ( 1- \frac{\exp (a_{0})}{u} ) \\
    &= y_{0} (1 - y_{0})
\end{aligned}
{{< /katex >}}

また、i≠0の時は

{{< katex  >}}
\tag{8}  
\begin{aligned}
\frac{\partial y_{i}}{\partial a_{0}}
    &= \frac{\partial }{ \partial a_{0} } \frac{ \exp (a_{i}) }{u} \\
    &= \frac{ 0* u - \exp (a_{i}) \exp (a_{0}) }{ u^2 }  \\
    &= \frac{ - \exp (a_{i}) \exp (a_{0}) }{ u^2 }  \\
    &= - \frac{\exp (a_{i})}{u} \frac{\exp (a_{0})}{u} \\
    &= - y_{i} y_{0}
\end{aligned}
{{< /katex >}}

となる。これら式(7)(8)を使うと、式(6)は

{{< katex  >}}
\begin{aligned}
\tag{9}  \frac{ \partial E_{n} }{ \partial a_{0} } 
        &= -t_{0} (1-y_{0}) +t_{1} y_{0} +t_{2} y_{0} \\
        &= ( t_{0} + t_{1} + t_{2} )y_{0} - t_{0} \\
        &= y_{0} - t_{0} 
\end{aligned}
{{< /katex >}}

のように置き換えられる。同様にして

{{< katex  >}}
\tag{10}  \frac{ \partial E_{n} }{ \partial a_{1} } = y_{1} - t_{1}
{{< /katex >}}

{{< katex  >}}
\tag{11}  \frac{ \partial E_{n} }{ \partial a_{2} } = y_{2} - t_{2}
{{< /katex >}}

となる、これから

{{< katex  >}}
\tag{12}  \frac{ \partial E_{n} }{ \partial a_{k} } = y_{k} - t_{k}
{{< /katex >}}

と表せる。

では次に、式(4)の右部分である∂a<sub>k</sub>/∂v<sub>kj</sub>を見てみよう。同じくまずは例として出力値の数を3(K=3),k=0の場合を見てみる。すると、a<sub>0</sub>は以下のようになる。

{{< katex  >}}
\tag{13}  a_{0}= v_{00} z_{0} + v_{01} z_{1} + v_{02} z_{2}
{{< /katex >}}

ので、この式(13)から以下の式が成り立つ。

{{< katex  >}}
\tag{14}  \frac{ \partial a_{0} }{ \partial v_{0i} } = z_{i}
{{< /katex >}}

k=1,2...の場合でも同様の結果が得られるので、式(14)は以下の式のようにも置き換えられる。

{{< katex  >}}
\tag{15}  \frac{ \partial a_{k} }{ \partial v_{ki} } = z_{i}
{{< /katex >}}

では、この結果を式(15)と合わせてみよう。すると、以下のようになる。

{{< katex  >}}
\begin{aligned}
\tag{16}  \frac{ \partial E_{n} }{ \partial v_{kj} } 
    &= \frac{\partial E_{n} }{\partial a_{k}}  \frac{\partial a_{k} }{\partial v_{kj} } \\
    &= (y_{k} - t_{k})z_{j}
\end{aligned}
{{< /katex >}}

この式(16)を利用して、勾配法でパラメータv<sub>kj</sub>を更新していくための漸化式を以下のように定める。

{{< katex  >}}
\tag{17}  v_{kj}(t+1)
    = v_{kj}(t) - \alpha \frac{\partial E_{n} }{\partial v_{kj} }
    = v_{kj}(t) - \alpha (y_{k} - t_{k})z_{j}
{{< /katex >}}

ここで、αは0~1の値を取る実数である。

以上より、∂E/∂v<sub>kj</sub>が求められた。

次に、もう一つの重み行列である<b>w</b>のパラメータw<sub>ji</sub>の偏微分を求めてみよう。

こちらも先ほどと同様に、連鎖律を使って以下のように求めていく。ここで、シグモイド関数をh(x)とおく。

{{< katex  >}}
\tag{18}
\begin{aligned}
\frac{ \partial E_{n} }{ \partial w_{ji} } 
    &= \frac{\partial E_{n} }{\partial b_{j}} \cdot \frac{\partial b_{j} }{\partial w_{ji} } \\
    &= ( \sum_{k=0}^{K-1} \frac{\partial E_{n} }{\partial a_{k}} \cdot \frac{\partial a_{k} }{\partial z_{j}} ) \frac{\partial z_{j} }{\partial b_{j} } \cdot  \frac{\partial  }{\partial w_{ji}} \sum_{i=0}^{D} w_{ji} x_{i} \\
    &= ( \sum_{k=0}^{K-1} (y_{k}-t_{k}) \cdot \frac{\partial }{\partial z_{j}} \sum_{j=0}^{M} v_{kj} z_{j} ) \frac{\partial }{\partial b_{j} } h(b_{j}) \cdot x_{i} \\
    &= ( \sum_{k=0}^{K-1} (y_{k}-t_{k}) \cdot v_{kj} ) h'(b_{j}) \cdot x_{i} \\
\end{aligned}
{{< /katex >}}

この式(18)において、入力層の重み行列<b>w</b>の偏微分は、先述の中間層の重み行列<b>v</b>のパラメータ及び偏微分の結果を利用して算出している形になっていることがわかる。つまり、出力結果で生じた誤差を逆方向に伝達させて計算しているともみることができる。

この性質から、フィードフォワードニューラルネットワークモデルの勾配法が、誤差逆伝搬法（バックプロパゲーション）とも呼ばれている。

長くなったが、誤差逆伝搬法の一連の手順を以下にまとめる。

<ol>
<li>入力値、重み行列から出力値を算出する</li>

<img src="/img/datascience/Figure_45.png" width=100%>


<li>中間層の出力z,出力層の出力y,目標データtから、新しい重み行列vの値を算出する（まだ更新はしない）</li>

<img src="/img/datascience/Figure_46.png" width=100%>

<li>入力データx,中間層の入力総和b,重み行列v,出力層の出力y,目標データtから、新しい重み行列wの値を算出する（まだ更新はしない）</li>

<img src="/img/datascience/Figure_47.png" width=100%>

<li>算出した新しい重み行列v,wのパラメータを更新する</li>

<img src="/img/datascience/Figure_48.png" width=100%>

</ol>

この手順を繰り返すことで、誤差逆伝搬法を行なっていく。