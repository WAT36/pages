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

Pythonでは通常はNaNが出る事はない。そのような値が出るような演算をした場合は、基本エラーが出力される。

しかし、NumpyやPandasといったような、データ分析で用いられるライブラリではNaNが出力されることがよくある。

また、通常の数値演算で出力されることもあるが、これらライブラリで用いられるNaNは冒頭で述べた意味とは違い、**データが正しく読み取られなかった**値（欠損値）という意味で使われることが多い。

例えば以下のcsvをnumpyで読み取った結果を以下に示す。

csv(test.csv)

```
1,2,,,3,4
```

python

```python
>>> import numpy as np
>>> 
>>> a = np.genfromtxt('test.csv', delimiter=',')
>>> print(a)
[ 1.  2. nan nan  3.  4.]
>>> #値がなく正しく読み取られなかった箇所がnanとなる
```

意図的にNaNを出したい場合は、```numpy.nan```や```float('nan')```を使う。

```python
>>> float('nan')
nan
>>> 
```

この欠損値NaNは、自分自身及び全ての数値と等しくない性質を持つため、比較演算子で比較してもfalseになる。

値がNaNであるかを判定するには、```numpy.isnan()```か```math.isnan()```を利用する。

```python
>>> #↑の続き
>>> import math
>>> math.isnan(a[2])
True
>>> math.isnan(a[0])
False
>>> 
```

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
