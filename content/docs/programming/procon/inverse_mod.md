---
title: "合同式(mod)・逆元"
weight: 1
# bookFlatSection: false
# bookShowToC: true
# bookToc: false
---

# 合同式(mod)・逆元

最近知ったのだが、今は高校数学の課程に合同式が入っているそうだ。

自分はゆとり世代ゆえ正式には学んでない（予備校で少し出てきたことはあったが曖昧）ので、改めて学び直してみた。

同時に、競プロに関係する事項も。

## 合同式(mod)

合同式とは以下の定義。

<hr>

a,bを整数、mを自然数とした時、

「aをmで割った余り」と「bをmで割った余り」が等しいことを以下の式で表す。

{{< katex  >}}
a  \equiv b \pmod{m}
{{< /katex >}}

この式を**合同式**という。

<hr>

プログラムで表現するなら 

```
a%m == b%m
```

である。

## 合同式の定理

合同式には定理がいくつかある。

### 合同式の和

整数a,b,c,d、自然数mにおいて　a≡b (mod m) ,c≡d (mod m) の時、以下の式が成立する。

{{< katex  >}}
a+c  \equiv b+d \pmod{m}
{{< /katex >}}

### 合同式の差

同様に、整数a,b,c,d、自然数mにおいて　a≡b (mod m) ,c≡d (mod m) の時、以下の式が成立する。

{{< katex  >}}
a-c  \equiv b-d \pmod{m}
{{< /katex >}}

### 合同式の積

同様に、整数a,b,c,d、自然数mにおいて　a≡b (mod m) ,c≡d (mod m) の時、以下の式が成立する。

{{< katex  >}}
ac  \equiv bd \pmod{m}
{{< /katex >}}

以上の式より、

{{< katex  >}}
a+c  \equiv b+c \pmod{m} \\
a-c  \equiv b-c \pmod{m} \\
ac  \equiv bc \pmod{m} 
{{< /katex >}}

も成立し、これらの式から、合同式は移項・乗法も可能である。

### 合同式のべき乗


整数a,b、自然数mにおいて　a≡b (mod m) の時、以下の式が成立する。

{{< katex  >}}
a^n  \equiv b^n \pmod{m}
{{< /katex >}}


#### (証明)

整数a,b,c,dを、自然数mと整数p,q,r,s,t,uを用い、以下のように定義する。

{{< katex  >}}
a = pm + t \\
b = qm + t \\
c = rm + u \\
d = sm + u 
{{< /katex >}}

この時、

{{< katex  >}}
a  \equiv b \pmod{m} \\
c  \equiv d \pmod{m}
{{< /katex >}}

である。この時、

{{< katex  >}}
a  \equiv b \pmod{m} \\
c  \equiv d \pmod{m}
{{< /katex >}}

であり、また

{{< katex  >}}
\begin{aligned}
a+c  &= (p+r)m + (t+u) \\
b+d  &= (q+s)m + (t+u) \\
a-c  &= (p-r)m + (t-u) \\
b-d  &= (q-s)m + (t-u) \\
ac   &= (prm + pu+tr)m + tu \\
bd   &= (qsm + qu+st)m + tu \\
a^n  &= (p^{n} m^{n-1} + {}_n \mathrm{C} _1 p^{n-1} m^{n-2} t + \cdots + {}_n \mathrm{C} _{n-1} p t^{n-1})m + t^n \\
b^n  &= (q^{n} m^{n-1} + {}_n \mathrm{C} _1 p^{n-1} m^{n-2} t + \cdots + {}_n \mathrm{C} _{n-1} p t^{n-1})m + t^n
\end{aligned}
{{< /katex >}}

である。これらより、

{{< katex  >}}
\begin{aligned}
a+c  & \equiv b+d & \pmod{m} \\
a-c  & \equiv b-d & \pmod{m} \\
ac   & \equiv bd  & \pmod{m} \\
a^n  & \equiv b^n & \pmod{m}
\end{aligned}
{{< /katex >}}

が成立する。



### 合同式の除法

整数a,b,c、 自然数mにおいて　ab≡ac (mod m) の時でかつ**aとmが互いに素**の時、以下の式が成立する。

{{< katex  >}}
\begin{aligned}
ab  & \equiv ac & \pmod{m} \\
\Leftrightarrow　b  & \equiv c & \pmod{m}
\end{aligned}
{{< /katex >}}


#### (証明)

ab≡ac (mod m)　、かつaとmが互いに素の時において

{{< katex  >}}
\begin{aligned}
ab  & \equiv ac & \pmod{m} \\
\Leftrightarrow　ab-ac   & \equiv 0 & \pmod{m} \\
\Leftrightarrow　a(b-c)  & \equiv 0 & \pmod{m}
\end{aligned}
{{< /katex >}}

となり、この式において、a(b-c)と0はmで割った余りが同じであり、0をmで割った余りは0なので、a(b-c)をmで割った余りも0、つまりa(b-c)はmで割り切れる(=mの倍数)ということになる。

aとmは互いに素なので、b-cがmの倍数という事になる。

これより、(b-c)≡0 (mod m)が成立するので、

{{< katex  >}}
\begin{aligned}
(b-c)  & \equiv 0 & \pmod{m} \\
\Leftrightarrow　b   & \equiv c & \pmod{m} 
\end{aligned}
{{< /katex >}}

となり、aとmが互いに素でab≡ac (mod m)の時、b≡c (mod m)が成立する。

ちなみに、aとmが互いに素ではない時、(b-c)がmの倍数でない場合があるため、これは成立しない。


<hr>

以上が、合同式についての定義及び定理の紹介である。

これらを踏まえ、次に逆元についてを述べる。


## 逆元

modを使った方程式を解いてみることを考える。例えばa,bを整数、mを自然数とした、以下のような式があったとする。

{{< katex  >}}
\tag{1}
ax  \equiv b \pmod{m}
{{< /katex >}}

この式でxを求めるにはどのようにすれば良いのだろうか。

この時、

{{< katex  >}}
ay \equiv 1 \pmod{m}
{{< /katex >}}

となるような整数yが存在した場合、合同式の積の定理から、

{{< katex  >}}
\begin{aligned}
x & \equiv x & \pmod{m} \\
\Leftrightarrow 1 \times x & \equiv ay \times x & \pmod{m} \\
\Leftrightarrow x & \equiv y \times ax & \pmod{m} 
\end{aligned}
{{< /katex >}}

{{< katex  >}}
\begin{aligned}
ax & \equiv b & \pmod{m} \\
\Leftrightarrow y \times ax & \equiv y \times b & \pmod{m}
\end{aligned}
{{< /katex >}}

が成り立つ。これより、

{{< katex  >}}
\tag{2}
\begin{aligned}
x & \equiv y \times ax & \pmod{m} \\
  & \equiv y \times b & \pmod{m}
\end{aligned}
{{< /katex >}}

と求めることができる。

このように、a,mに対して

{{< katex  >}}
\tag{3}
ay \equiv 1 \pmod{m}
{{< /katex >}}

となるような整数yのことを、aの**逆元**といい、大体はa<sup>-1</sup>と書く。

{{< katex  >}}
\tag{4}
a \times a^{-1} \equiv 1 \pmod{m}
{{< /katex >}}

式(2),(4)より、式(1)の解は

