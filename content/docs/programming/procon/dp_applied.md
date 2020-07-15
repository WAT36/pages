---
title: "動的計画法の応用題"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 動的計画法の応用題

動的計画法の応用問題についてをいくつか紹介する。

## 最長共通部分列問題

例えば以下のような問題。

```
２つの文字列s,tの共通部分文字列の長さの最大値を求めなさい。

ただし、文字列xの部分文字列とは、xから連続するn文字 (0≦n≦|x|) を取り出してできる文字列のことである。
```

２つの文字列の部分文字列として当てはまる文字列のうち、最長となるものの長さを求める問題で、このような問題は**最長共通部分列問題(LCS: Longest Common Subsequence)**と呼ばれている。この問題も、動的計画法で行える。

２次元リストdp[i][j]を「sのi文字目までの文字列とtのj文字目までの文字列における最長共通部分文字列の長さ」とする。

この時、以下の式が成り立つ。

{{< katex  >}}
  dp[i+1][j+1] = 
    \begin{cases}
        max(dp[i][j]+1,dp[i][j+1],dp[i+1][j]) & ( (sのi+1文字目) = (tのj+1文字目) ) \\
        max(dp[i][j+1],dp[i+1][j]) & (それ以外)
    \end{cases}
{{< /katex >}}

図で表すと、以下のようになる。

<img src="/img/procon/dp_applied1.png" width=50%>

実装例を以下に示す。

```python
s=input() #文字列s
t=input() #文字列t

dp=[[0 for _ in range(len(t)+1)] for _ in range(len(s)+1)]
for i in range(len(s)):
    for j in range(len(t)):
        if(s[i]==t[j]):
            dp[i+1][j+1] = max(dp[i][j]+1,dp[i+1][j],dp[i][j+1])
        else:
            dp[i+1][j+1] = max(dp[i+1][j],dp[i][j+1])

print(dp[len(s)][len(t)]) #sとtの最長共通部分文字列の長さ = 答え
```


## 個数制限なしナップザック問題

```
重さがwi、価値がviであるようなn個の品物があった時、重さの総和がWを超えないように品物を選ぶ時の、価値の総和の最大値を求めよ。

ただし、同じ品物を複数回選んでも良い。
```

前述の[動的計画法]({{< relref "/docs/programming/procon/dynamic_planning.md" >}})の章では１つの品物は複数回選べない指定であったが、同じ品物を複数回取れるとなるとどのようにすれば良いか。


この問題を動的計画法を応用してできる。２次元リストdp[i][j]を以下のように設定する。

dp[i][j] = i番目までの品物から重さの総和がj以下となるような時の、価値の総和の最大値

すると、漸化式は以下のようになる。

{{< katex  >}}
\begin{cases}
    dp[0][j] &= 0  \\
    dp[i+1][j] &= max( dp[i][j-k*w[i]] + k*v[i] 　|　 0 \leq  k \leq \frac{j}{w[i]} )
\end{cases}
{{< /katex >}}