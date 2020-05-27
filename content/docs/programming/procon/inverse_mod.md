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