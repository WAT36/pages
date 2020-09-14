---
title: "ニューラルネットワーク"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# ニューラルネットワーク

ニューラルネットワークとは、人間の神経細胞を模した数理モデルである**ニューロンモデル**を利用した機械学習のアルゴリズムである。

ニューロンモデルを幾層にも組み合わせて計算を行なっていく方法で、より多くのニューロンモデルを使用した物は**ディープラーニング**とも呼ばれる。

## 神経細胞

人間の脳にある神経細胞は核と軸索と呼ばれる部位からなり、軸索の先をシナプスと呼ばれるインターフェースで別の神経細胞に繋げる形で幾つにも繋がっている。

神経細胞は、他の細胞から電気的なパルスを受け取り、また対応するシナプスの状態によりその電気パルスをどれほど受け取るか(シナプス伝達強度)が違ってくるため、神経細胞内の電位(膜電位)が大きく変化したりする。

そして、膜電位がある一定の値(閾値)を超えると、その神経細胞は次の神経細胞へ、電気的なパルスを発信する。それが連続された構造になっている。(下図)

<img src="/img/datascience/Figure_41.png" width=100%>


## ニューロンモデル

ニューロンモデルは、この神経細胞の動きを模した数理モデルで、下図のように表される。

<img src="/img/datascience/Figure_42.png" width=100%>

入力値は、正も負も値を取る実数(図中のx<sub>0</sub>〜x<sub>n-1</sub>)とし、それぞれにシナプス伝達強度とした**重み**(図中のw<sub>0</sub>〜w<sub>n-1</sub>)をかける。そしてその和を取ったものを**入力総和**(図中のa)として計算する。


{{< katex  >}}
\tag{1}  a = w_{0} x_{0} + w_{1} x_{1} + \cdots + w_{n-1} x_{n-1}
{{< /katex >}}

なお、図にもあるように、n-1番目の重みは切片としてそのまま用いるので、x<sub>n-1</sub>=1とする。

{{< katex  >}}
\tag{2}  a = w_{0} x_{0} + w_{1} x_{1} + \cdots + w_{n-1}
{{< /katex >}}

式(1)は以下のように書き換えられる。

{{< katex  >}}
\tag{3}  a = \sum_{i=0}^{n-1} w_{i} x_{i} 
{{< /katex >}}

そして、この入力総和aを、シグモイド関数を使って出力値yに置き換え、出力する。

{{< katex  >}}
\tag{4}  y = \frac{1}{1 + \exp(-a) }
{{< /katex >}}

この一連の流れは、教師あり学習で出てきたロジスティック回帰に似ており、重みや入力総和によって決定境界が引かれ、それを境に出力が0か1に別れる、とみることもできる。

例えば、N(入力値の個数)=2、重みをw<sub>0</sub>=-2,w<sub>1</sub>=1,w<sub>2</sub>=2とした場合の出力値yのグラフは以下のようになる。

（コード類は[こちら](https://github.com/WAT36/python/blob/master/machine_learning/deeplearning/neural_network.ipynb)のJupyter Notebookにまとめたのでご参考に）

この図より、直線-2x<sub>0</sub>+x<sub>1</sub>+2=0 (w<sub>0</sub>x<sub>0</sub>+w<sub>1</sub>x<sub>1</sub>+w<sub>2</sub>x<sub>2</sub>=0)を境に出力値は0か1に大きく分かれる事となる。

<img src="/img/datascience/Figure_43.png" width=100%>


## ニューラルネットワークモデル

先述のニューロンモデルをいくつも組み合わせた、ニューロンモデルの集合体のモデルのことを**ニューラルネットワークモデル**という。

ニューラルネットワークモデルにはいくつか種類があるが、ここでは一方向にのみ流れる**フィードフォワードニューラルネット**を考える。

ここでは、入力層と出力層の間に中間層が1つの**2層フィードフォワードニューラルネットワークモデル**とする。下に図を示す。

<img src="/img/datascience/Figure_44.png" width=100%>

重み行列が2つあるので（中間層を第１層、出力層を第２層と呼ぶことからもある）、これから２層フィードフォワードニューラルネットワークモデルと呼ぶ。（入力層も合わせて３層と呼ぶこともある）

中間層には、前述のニューロンモデルと同じように、ダミー入力として常に１の値をとるパラメータを加える。

重み行列**z**において、a<sub>i</sub>からb<sub>j</sub>への重みをz<sub>ji</sub>とおくと、以下の式が成り立つ。

{{< katex  >}}
\tag{5}  b_{j} = \sum_{i=0}^{n-1} z_{ji} a_{i}
{{< /katex >}}

中間層では、この式(5)により算出した結果を、シグモイド関数に通すことで出力値を得る。出力値をc、シグモイド関数をh()とおくと、以下の式が成り立つ。

{{< katex  >}}
\tag{6}  c_{j} =  h( b_{j} )
{{< /katex >}}

ここで、シグモイド関数は入力総和から何らかの出力を決定づける関数ということで、**活性化関数**とも呼ばれている。


次に出力層において、中間層の出力と重み行列から式(5)の計算を行なった最終的な出力値b<sub>i</sub>に対して、最後にソフトマックス関数を適用することにより２層フィードフォワードニューラルネットワークモデルの出力値y<sub>i</sub>を得る。

{{< katex  >}}
\tag{7}  y_{i} = \frac{ \exp(a_{i}) }{ \sum_{j=0}^{K-1} \exp(a_{j}) }
{{< /katex >}}

では、この２層フィードフォワードニューラルネットワークモデルを利用して、教師あり学習でやっていたような３分類問題を解くことを考えてみる。

## 数値微分法

分類問題を解く前に、指標となる誤差関数を、教師あり学習の章でも利用した平均誤差エントロピー誤差を利用し、以下の式で定義する。

{{< katex  >}}
\tag{8}  E( { \bf w } ,{ \bf v } ) = - \frac{1}{N} \sum_{n=0}^{N-1} \sum_{k=0}^{K-1} t_{nk} \log (y_{nk}) 
{{< /katex >}}

tは目標値、yはニューラルネットワークモデルの出力値である。この2つの誤差が大きいほど、誤差関数の値も大きくなる。

式(8)は<b>w</b>,<b>v</b>を入力とするが、この時どのようなw,vを入力すれば誤差関数が最も小さくなるか？を考えた時、教師あり学習のところでも出てきた勾配法を用いて考えてみる。

勾配法の時は偏微分を計算して算出した式を利用していたが、ここでは微分の定義を利用した、近似を利用して偏微分を行なってみよう。

まず誤差関数を<b>w</b>で偏微分することを考えてみる。

関数f(x)をxで微分した値は、ある微小な値εを用いると以下のように表される。

{{< katex  >}}
\tag{9}  \frac{　df(x) }{dx} = - \frac{f(x + \epsilon )-f(x)}{ \epsilon }
{{< /katex >}}

これにより、誤差関数E(<b>w</b>,<b>v</b>)を<b>w</b>で偏微分した値は以下のようになる。

{{< katex  >}}
\tag{10}  \frac{　\partial E( { \bf w } ,{ \bf v } ) }{ \partial { \bf w } } = \frac{ E( { \bf w } - \epsilon  ,{ \bf v } )-E( { \bf w }  ,{ \bf v } )}{ \epsilon }
{{< /katex >}}

式(10)だが、<b>w</b>には実際にはパラメータが複数ある。例として、<b>w</b>にw<sub>0</sub>,w<sub>1</sub>,w<sub>2</sub> のパラメータがあるとすると、まずw<sub>0</sub>での偏微分は以下のようになる。

{{< katex  >}}
\tag{11}  \frac{　\partial E( { \bf w } ,{ \bf v } ) }{ \partial { \bf w } } \Biggr| _{w_{0},w_{1},w_{2} }= \frac{ E( ( w_{0} - \epsilon, w_{1}, w_{2})  ,{ \bf v } )-E( { \bf w }  ,{ \bf v } )}{ \epsilon }
{{< /katex >}}

w<sub>1</sub>,w<sub>2</sub>に対しても同じことを行い、また<b>v</b>のパラメータ全てに対しても行う。

つまりは、<b>w</b>と<b>v</b>のパラメータ全てに対して勾配法を行い、誤差関数を小さくする最適なパタメータの組み合わせを求めていく、というものである。

この手法の難点は、パラメータの数が多いと計算時間が膨大になってしまうという点である。ニューラルネットワークでは重み行列のパラメータの数が多いので、時間も長くなりがちになる。

ここで、別の方法として述べられているものを以下に記載する。

## 誤差逆伝搬法（バックプロパゲーション）

誤差逆伝搬法（バックプロパゲーション）はフィードフォワードネットワークモデルに学習をさせる方法として有名な方法であり、これはネットワークの出力と目標値との誤差の情報を使って、出力層、中間層へと重みを更新していくことから、この名がついている。しかし、実態は勾配法そのものである。

まずは、式(8)においてn1つ分に対する交差エントロピー誤差E<sub>n</sub>を以下のように考える。

{{< katex  >}}
\tag{12}  E_{n} ( { \bf w } ,{ \bf v } ) = - \sum_{n=0}^{N-1} \sum_{k=0}^{K-1} t_{nk} \log (y_{nk}) 
{{< /katex >}}

これを利用して、式(8)を以下のように置き換える。

{{< katex  >}}
\tag{13}  E ( { \bf w } ,{ \bf v } ) = - \frac{1}{N} \sum_{n=0}^{N-1} \sum_{k=0}^{K-1} E_{n} ( { \bf w } ,{ \bf v } )
{{< /katex >}}

ここから、重み行列の各パラメータに対する偏微分を行なっていこう。誤差関数をw<sub>ji</sub>で偏微分すると、以下のようになる。

{{< katex  >}}
\tag{14}  
\begin{aligned}
\frac{\partial E}{ \partial w_{ji} } 
    &= - \frac{\partial }{ \partial w_{ji} } \frac{1}{N} \sum_{n=0}^{N-1} E_{n} \\
    &= \frac{1}{N} \sum_{n=0}^{N-1} \frac{\partial E_{n} }{ \partial w_{ji} }
\end{aligned}
{{< /katex >}}

また、パラメータには<b>v</b>もあるので、v<sub>kj</sub>に対しても偏微分を行う。すると、式(14)と同じようになる。

この式に出てくる、∂E<sub>n</sub>/∂w<sub>ji</sub>と∂E<sub>n</sub>/∂v<sub>kj</sub>を求めてみることを考える。まずは、∂E<sub>n</sub>/∂v<sub>kj</sub>を見てみよう。

偏微分の連鎖律を使って、∂E<sub>n</sub>/∂v<sub>kj</sub>は以下のように置き換えられる。

{{< katex  >}}
\tag{15}  \frac{ \partial E_{n} }{ \partial v_{kj} } = \frac{\partial E_{n} }{\partial a_{k}}  \frac{\partial a_{k} }{\partial v_{kj} } 
{{< /katex >}}

この式(15)において、まずは例として出力値の数を3(K=3),k=0の場合を見てみる。

すると、∂E<sub>n</sub>/∂a<sub>0</sub>は、Eを変形して以下のように置き換えられる。

{{< katex  >}}
\tag{16}  \frac{ \partial E_{n} }{ \partial a_{0} } = \frac{\partial }{\partial a_{0}} ( -t_{0} \log y_{0} -t_{1} \log y_{1} -t_{2} \log y_{2} )
{{< /katex >}}

ここで、t<sub>i</sub>は目標データなのでs<sub>k</sub>で変化することはないが、y<sub>i</sub>は入力総和a<sub>0</sub>から算出されるので、関係している。

これにより式(16)は以下のように置き換えられる。

{{< katex  >}}
\tag{17}  \frac{ \partial E_{n} }{ \partial a_{0} } = -t_{0} \frac{1}{y_{0}} \frac{\partial y_{0}}{\partial a_{0}} -t_{1} \frac{1}{y_{1}} \frac{\partial y_{1}}{\partial a_{0}} -t_{2} \frac{1}{y_{2}} \frac{\partial y_{2}}{\partial a_{0}}
{{< /katex >}}

u=exp(a<sub>0</sub>)+exp(a<sub>1</sub>)+exp(a<sub>2</sub>)とおいて計算すると

{{< katex  >}}
\tag{18}  
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
\tag{19}  
\begin{aligned}
\frac{\partial y_{i}}{\partial a_{0}}
    &= \frac{\partial }{ \partial a_{0} } \frac{ \exp (a_{i}) }{u} \\
    &= \frac{ 0* u - \exp (a_{i}) \exp (a_{0}) }{ u^2 }  \\
    &= \frac{ - \exp (a_{i}) \exp (a_{0}) }{ u^2 }  \\
    &= - \frac{\exp (a_{i})}{u} \frac{\exp (a_{0})}{u} \\
    &= - y_{i} y_{0}
\end{aligned}
{{< /katex >}}

となる。これら式(18)(19)を使うと、式(17)は

{{< katex  >}}
\begin{aligned}
\tag{20}  \frac{ \partial E_{n} }{ \partial a_{0} } 
        &= -t_{0} (1-y_{0}) +t_{1} y_{0} +t_{2} y_{0} \\
        &= ( t_{0} + t_{1} + t_{2} )y_{0} - t_{0} \\
        &= y_{0} - t_{0} 
\end{aligned}
{{< /katex >}}

のように置き換えられる。同様にして

{{< katex  >}}
\tag{21}  \frac{ \partial E_{n} }{ \partial a_{1} } = y_{1} - t_{1}
{{< /katex >}}

{{< katex  >}}
\tag{22}  \frac{ \partial E_{n} }{ \partial a_{2} } = y_{2} - t_{2}
{{< /katex >}}

となる、これから

{{< katex  >}}
\tag{23}  \frac{ \partial E_{n} }{ \partial a_{k} } = y_{k} - t_{k}
{{< /katex >}}

と表せる。

では次に、式(15)の右部分である∂a<sub>k</sub>/∂v<sub>kj</sub>を見てみよう。同じくまずは例として出力値の数を3(K=3),k=0の場合を見てみる。すると、a<sub>0</sub>は以下のようになる。

{{< katex  >}}
\tag{24}  a_{0}= v_{00} z_{0} + v_{01} z_{1} + v_{02} z_{2}
{{< /katex >}}

ので、この式(24)から以下の式が成り立つ。

{{< katex  >}}
\tag{25}  \frac{ \partial a_{0} }{ \partial v_{0i} } = z_{i}
{{< /katex >}}

k=1,2...の場合でも同様の結果が得られるので、式(25)は以下の式のようにも置き換えられる。

{{< katex  >}}
\tag{25}  \frac{ \partial a_{k} }{ \partial v_{ki} } = z_{i}
{{< /katex >}}

では、この結果を式(15)と合わせてみよう。すると、以下のようになる。

{{< katex  >}}
\begin{aligned}
\tag{26}  \frac{ \partial E_{n} }{ \partial v_{kj} } 
    &= \frac{\partial E_{n} }{\partial a_{k}}  \frac{\partial a_{k} }{\partial v_{kj} } \\
    &= (y_{k} - t_{k})z_{j}
\end{aligned}
{{< /katex >}}

この式(26)を利用して、勾配法でパラメータv<sub>kj</sub>を更新していくための漸化式を以下のように定める。

{{< katex  >}}
\tag{27}  v_{kj}(t+1)
    = v_{kj}(t) - \alpha \frac{\partial E_{n} }{\partial v_{kj} }
    = v_{kj}(t) - \alpha (y_{k} - t_{k})z_{j}
{{< /katex >}}

ここで、αは0~1の値を取る実数である。

以上より、∂E/∂v<sub>kj</sub>が求められた。

次に、もう一つの重み行列である<b>w</b>のパラメータw<sub>ji</sub>の偏微分を求めてみよう。

こちらも先ほどと同様に、連鎖律を使って以下のように求めていく。ここで、シグモイド関数をh(x)とおく。

{{< katex  >}}
\tag{28}
\begin{aligned}
\frac{ \partial E_{n} }{ \partial w_{ji} } 
    &= \frac{\partial E_{n} }{\partial b_{j}} \cdot \frac{\partial b_{j} }{\partial w_{ji} } \\
    &= ( \sum_{k=0}^{K-1} \frac{\partial E_{n} }{\partial a_{k}} \cdot \frac{\partial a_{k} }{\partial z_{j}} ) \frac{\partial z_{j} }{\partial b_{j} } \cdot  \frac{\partial  }{\partial w_{ji}} \sum_{i=0}^{D} w_{ji} x_{i} \\
    &= ( \sum_{k=0}^{K-1} (y_{k}-t_{k}) \cdot \frac{\partial }{\partial z_{j}} \sum_{j=0}^{M} v_{kj} z_{j} ) \frac{\partial }{\partial b_{j} } h(b_{j}) \cdot x_{i} \\
    &= ( \sum_{k=0}^{K-1} (y_{k}-t_{k}) \cdot v_{kj} ) h'(b_{j}) \cdot x_{i} \\
\end{aligned}
{{< /katex >}}

この式(28)において、入力層の重み行列<b>w</b>の偏微分は、先述の中間層の重み行列<b>v</b>のパラメータ及び偏微分の結果を利用して算出している形になっていることがわかる。つまり、出力結果で生じた誤差を逆方向に伝達させて計算しているともみることができる。

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