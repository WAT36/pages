---
title: "合同式(mod)・逆元"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
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

特に、

{{< katex  >}}
ac  \equiv bc \pmod{m}
{{< /katex >}}

である。

### 合同式のべき乗

整数a,b、自然数mにおいて　a≡b (mod m) の時、以下の式が成立する。

{{< katex  >}}
a^n  \equiv b^n \pmod{m}
{{< /katex >}}


(証明)

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
a+c  \equiv b+d \pmod{m} \\
a-c  \equiv b-d \pmod{m} \\
ac  \equiv bd \pmod{m} \\
a^n  \equiv b^n \pmod{m}
{{< /katex >}}

が成立する。

