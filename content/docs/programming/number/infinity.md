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

Pythonでは浮動小数点数を表すfloat型に無限大を表す数である**inf**が設定されている。

定義はコンストラクタ```float()```の引数に```'inf'```を指定すると生成できる。（'Infinity'でも良い）

```python
float('inf')
```

javascriptでは通常の数値を0で除算した時にInfinityが得られたが、Pythonではエラーになるので注意。

```python
>>> 1/0
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError: division by zero
>>> 
```

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
