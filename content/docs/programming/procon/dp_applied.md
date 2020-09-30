---
title: "動的計画法の応用題"
weight: 1
# bookFlatSection: false
# bookShowToC: true
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


この問題も動的計画法を応用してできる。２次元リストdp[i][j]を以下のように設定する。

dp[i+1][j] = i番目までの品物から重さの総和がj以下となるような時の、価値の総和の最大値

すると、漸化式は以下のようになる。

{{< katex  >}}
\begin{cases}
    dp[0][j] &= 0  \\
    dp[i+1][j] &= max( dp[i][j-k*w[i]] + k*v[i] 　|　 0 \leq  k \leq \frac{j}{w[i]} )
\end{cases}
{{< /katex >}}

実装例を以下に示す。

```python
#個数制限なしナップザック問題

#個数,最大の重さ
n,W=map(int,input().split())
#価値と重さ
v=[]
w=[]

#vi,wiでi番目の品物の価値と重さ
for i in range(n):
    vi,wi=map(int,input().split())
    v.append(vi)
    w.append(wi)

#dp
dp=[[0 for _ in range(W+1)] for _ in range(n+1)]

#計算
for i in range(n):
    for j in range(W+1):
        k=0
        while(k*w[i]<=j):
            dp[i+1][j] = max(dp[i+1][j],dp[i][j-k*w[i]]+k*v[i])
            k+=1

#答え
print(dp[n][W])
```

これで良いか、と言いたいところだが、コードを見てくれたらわかるように、このアルゴリズムだと計算量がO(nW<sup>2</sup>)となり不十分である。

計算過程を図にすると以下の通りである。(値は例)

<img src="/img/procon/dp_applied2.png" width=60%>

図を見てわかるように、dp[i+1][j]のところでk≧1の計算をするときに計算を複数回行う箇所がある。

ここが改善のポイントで、dp[i][j]からi番目の品物をk個選んだ結果をdp[i+1][j+k*w[i]]とするのではなく、i番目の品物を0個選んだ結果(dp[i+1][j] (= i番目までの品物から重さの総和がj以下となるような時の、価値の総和の最大値))にi番目の品物を1個選んだときの結果を利用していけばよい。(dp[i+1][j+w[i]]=dp[i+1][j]+v[i]) k≧1での複数回計算をせずとも、この計算1回だけを行えば,kに関するループがなくなる。

図で表すと以下のようになる。

<img src="/img/procon/dp_applied3.png" width=60%>

コード例は以下の通り。(計算部分のみ抜粋)

```python
#計算
for i in range(n):
    for j in range(W+1):
        if(j<w[i]):
            dp[i+1][j]=dp[i][j]
        else:
            dp[i+1][j]=max(dp[i][j],dp[i+1][j-w[i]]+v[i])
```

<hr>

### 値が大きい時

続いて、例その２。

```
重さがwi、価値がviであるようなn個の品物があった時、重さの総和がWを超えないように品物を選ぶ時の、価値の総和の最大値を求めよ。

ただし、同じ品物を複数回選んでも良い。

(制約)
1≦n≦100
1≦wi≦10000000
1≦vi≦100
1≦W≦1000000000

```

先ほどと同じ問題だが、今度は各変数の最大値がかなり大きな数になっており、先ほどと同じアルゴリズムを適用するとかなり長い時間がかかってしまう。

しかし、今回は価値の値が小さいので、そちらを使って動的計画法を利用することを考えてみる。

２次元リストdp[i][j]を以下のように設定する。

dp[i+1][j] = i番目までの品物から価値の総和がjとなるように選んだ時の、重さの総和の最小値（存在しない場合はINF）

この時、漸化式は以下のようになる。

{{< katex  >}}
\begin{cases}
    dp[0][0] &= 0  \\
    dp[0][j] &= INF  \\
    dp[i+1][j] &= min( dp[i][j],dp[i][j-v[i]]+w[i] )
\end{cases}
{{< /katex >}}


コード例は以下の通り。(計算部分のみ抜粋)

```python
import math
dp=[[math.inf for _ in range(n*max(v)+1)] for _ in range(n+1)]
dp[0][0]=0
#計算
for i in range(n):
    for j in range(n*max(v)+1):
        if(j<v[i]):
            dp[i+1][j]=dp[i][j]
        else:
            dp[i+1][j]=min(dp[i][j],dp[i][j-v[i]]+w[i])
```

<hr>

## 個数制限付き部分和問題

```
n種類の数aiがそれぞれmi個ずつあります。これらの中からいくつか選び、その総和をちょうどKにすることができるか判定しなさい。

(制約)
・1≦n≦100
・1≦ai,mi≦100000
・1≦K≦100000
```

解き方は様々あるが、一例として2次元リストdpを以下のように設定してみよう。

dp[i][j]:i番目までの数値でjが作れるか

i番目までの数値でjを作るには、i-1番目までの数値で j-α×(i番目の数値) が作れる必要がある。(αは0以上の整数)

したがって、漸化式は以下のようになる。

{{< katex  >}}
dp[i][j] = 
\begin{cases}
    True  & (dp[i-1][j-k*a_i] = True となるk (0 \leqq k \leqq m_{i} かつ k a_i \leqq j) が存在する場合)  \\
    False & (otherwise)
\end{cases}
{{< /katex >}}

コード例は以下の通り。

```python
n=3
a=[3,5,8]
m=[3,2,2]
K=17

dp=[[False for _ in range(K+1)] for _ in range(n+1)]
dp[0][0]=True

for i in range(n):
    for j in range(K+1):
        if(dp[i][j]):
            k=0
            while j+k*a[i]<=K:
                dp[i+1][j+k*a[i]]=True
                k+=1

print(dp[n][K])
```