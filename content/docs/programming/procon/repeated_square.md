---
title: "繰り返し二乗法"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 繰り返し二乗法

例えば、2<sup>10<sup>100</sup></sup>を計算しようとした時、単純にループで１回ずつ掛け算していくと計算にかなりの時間を要してしまう。

ループで一つずつ計算した場合、x<sup>n</sup>を求めるための計算量はO(n)となる。

この計算量を少しでも減らす方法は無いのだろうか。

その方法の一つとしてあるのが、**繰り返し二乗法**である。

これは、まずxを２乗してx<sup>2</sup>を、次にx<sup>2</sup>を２乗してx<sup>4</sup>を、さらにx<sup>4</sup>を２乗してx<sup>8</sup>を・・を繰り返していくことで、まずx<sup>2<sup>i</sup></sup>を求める。

次に、nを2進数で表し、i桁目が1になっているものに対して、x<sup>2<sup>i</sup></sup>を掛け合わせる。それの最終的な結果が、x<sup>n</sup>となる。

これにより、計算量はO(log<sub>2</sub>n)まで削減できる。

[コード](https://github.com/WAT36/python/blob/master/procon/repeated_square.py)例を以下に示す。

```python
#x^nを繰り返し二乗法で求める関数
#実際やると大きすぎる数を計算しようとしてエラーになりやすい

#実際に使うときは、MOD=10000007 などの剰余計算を組み込んで使うこと！
def repeated_square(x,n):
    #nを2進数で表して順序反転
    bit_n=bin(n)[2:][::-1]
    print(bit_n)

    ans=1
    ni=x

    if(bit_n[0]=="1"):
        ans*=ni

    for i in range(1,len(bit_n)):
        ni*=ni

        #i桁目が1なら、x^(2^i)を加える
        if(bit_n[i]=="1"):
            ans*=ni
            print(i,ni,ans)

    return ans
```

