---
title: "動的計画法"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 動的計画法

動的計画法について。

動的計画法とはアルゴリズム設計手法の一つで、配列やリストの要素をそれ以前に算出した別の要素を使って算出する手法である。

要素を漸化式で表せる時に適用しやすい。  

## 1次元の例(フィボナッチ数列)

1次元での動的計画法の例としてフィボナッチ数列を挙げる。  
フィボナッチ数列とは  

<math>
<msub>
    <mi>F(n)</mi> 
</msub>
<mo>=</mo>
<mrow>
    <mo rspace="0.25em">{</mo>
    <mtable columnalign="left" columnspacing="0.5em">
        <mtr>
            <mtd><mn>0</mn></mtd>
            <mtd>
                <mi>n</mi>
                <mo>=</mo>
                <mn>0</mn>
            </mtd>
        </mtr>
        <mtr>
            <mtd><mn>1</mn></mtd>
            <mtd>
                <mi>n</mi>
                <mo>=</mo>
                <mn>1</mn>
            </mtd>
        </mtr>
        <mtr>
            <mtd>
                    <mi>F(n-2)</mi> 
                <mo>+</mo>
                    <mi>F(n-1)</mi> 
            </mtd>
            <mtd>
                <mtext>other</mtext>
            </mtd>
        </mtr>
</mrow>
</math>

で表される数列である。

大体の場合は以下のように、再帰を使って求められることが多い。

```python
def fib(n):
    if(n=0):
        return 0
    elif(n==1):
        return 1
    elif(n>1):
        return fib(n-2) + fib(n-1)
```

しかし、数が大きいと計算量が膨大となり、また途中で同じ値を求める計算を複数回行うこともあり非効率な時がある。  
このような時、動的計画法を使うと一度計算した結果を記憶しているため参照するだけで利用でき、再帰よりも効率的に求められる。  

利用例を以下に示す。  

```python
dp = [0 for _ in range(n+1)]
dp[1]=1

def fib(n):
    if(n==0 or n==1 or dp[n]!=-1):
        #n=0,1またはdp[n]が計算済みならそれを出力
        return dp[n]
    elif(n>1):
        #dp[i] = dp[i-1] + dp[i-2]をnまで計算
        for i in range(2,n+1):
            dp[i] = dp[i-1] + dp[i-2]
```


## 2次元の例（ナップザック問題）

動的計画法の2次元での問題例として有名なのが　ナップザック問題　である。  


~~ 作成中 ~~
