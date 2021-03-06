---
title: "条件付き確率"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 条件付き確率

私は高校で条件付き確率を学んでこなかったゆとり世代なので、改めて条件付き確率において書き記していく。

事象A,Bにおいて、ある事象Bが起こったという条件下での事象Aが起こる確率のことを、Bを**条件**とするAの**条件付き確率**と呼び、P(A|B)と表す。

P(A|B)の求め方は、Bが起こった中のうちAが起こりうる確率であるから、以下の式で表される。

{{< katex  >}}
\tag{1}  P(A|B) = \frac{ P( A \cap B ) }{ P(B) } 
{{< /katex >}}


## 例題

<img src="/img/math/conditional_probability1.png" width=20%>

袋の中に1,2,3の数字が書かれた赤玉と白玉の計６個の玉が入っている。

この中から、２以上の数字が書かれた球を取り出す事象をAとおく。事象Aが起こる確率P(A)はいくらか？

答えは2/3である。

では、球を取り出した時に球の色が赤だった事が判明したとする。この時球に書かれた数字が２以上である確率はいくらか？

先ほどの事象Aに加え、赤い球を取り出す事象をBとおく。この場合は事象Bが起こった上での事象Aが起こる確率であるため、Bを条件とするAの条件付き確率となり、その確率P(A|B)は以下のようになる。

{{< katex  >}}
\begin{aligned}
\tag{2}  P(A|B) &= \frac{ P( A \cap B ) }{ P(B) } \\ 
                &= \frac{ \frac{ 2 }{ 6 } }{ \frac{ 3 }{ 6 } } \\
                &= \frac{ 2 }{ 3 }
\end{aligned}
{{< /katex >}}

