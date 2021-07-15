---
title: "NaN"
weight: 1
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: true
---

# NaN

**NaN**とは数値では無い値(Not a Number)のことを表す値で、プログラムで数値計算をする際に、正常な演算結果が得られなかったことを示す数値表現として用いられる。

例えば、0を0で除算した結果はNaNになる。（言語によっては、このような演算をした場合エラー出力をさせる場合もある）

以下、各言語におけるNaNについてを記載する。

{{< tabs "and" >}}
{{< tab "Java" >}}

{{< /tab >}}
{{< tab "Python" >}}

{{< /tab >}}
{{< tab "Javascript" >}}

Javascriptでは例の通り、0を0で除算するなど、数値では表せない不正な値を表現する際にNaNが使われる。

また、このNaNは自分自身及び全ての数値と等しくない性質を持つため、比較演算子で比較してもfalseになる。

また、グローバルオブジェクトの**isNaN()**を使用すると、NaNかどうかを判定できる。

```javascript
var nan = 0 / 0
console.log(nan)
console.log(nan == NaN)
console.log(isNaN(nan))
```

実行結果

```
NaN
false
true
```

{{< /tab >}}
{{< /tabs >}}
