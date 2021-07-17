---
title: "Infinity"
weight: 1
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: true
---

# Infinity


**Infinity**とは、全ての値より大きい値を示す値である。プログラムでは遥かに大きい値などを指定したい時んい利用することが多い。言語にもよるが計算で得られることもある。

以下、各言語によるInfinityについてを記載する。

{{< tabs "inf" >}}
{{< tab "Java" >}}



{{< /tab >}}
{{< tab "Python" >}}



{{< /tab >}}
{{< tab "Javascript" >}}

JavascriptではInfinityはグローバルオブジェクトのプロパティとして扱われており、普通にInfinityと宣言することで利用できる。通常では数値を0で除算するなどした時に(0/0はNaNになる)、Infinityが出力される。

また、グローバルオブジェクトの**isFinite()**を使用すると、その値が有限の値であるかを判別できる。Infinity,NaNを入れた場合はfalseを返す。

例（Infinity * 0はNaNになる）

```javascript
console.log(1/0)
inf = 1/0
console.log(inf == Infinity)
console.log(isFinite(inf))
console.log(isFinite(1))
console.log(Infinity + 1)
console.log(Infinity + Infinity)
console.log(Infinity * -1)
console.log(Infinity * 0)
```

実行結果

```
Infinity

true
false
true
Infinity
Infinity
-Infinity
NaN
```



{{< /tab >}}
{{< /tabs >}}
