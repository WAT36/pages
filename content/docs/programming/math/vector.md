---
title: "ベクトル"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# ベクトル

ベクトルの定義についてを示す。


{{< tabs "vector" >}}
{{< tab "Python" >}}

ベクトル(1次元配列)は、numpyライブラリにある関数**array(list)**を使って定義する。  
同じ次元のベクトル間では演算も行える。  
type()を使って型を確認すると、**numpy.ndarray**型となっていることがわかる。

```python
>>> import numpy as np
>>> 
>>> x=np.array([1,2,3])
>>> x
array([1, 2, 3])
>>> 
>>> print(x)
[1 2 3]
>>> 
>>> #同次元のベクトルを足し合わせる
>>> y=np.array([4,5,6])
>>> y
array([4, 5, 6])
>>> 
>>> print(x + y)
[5 7 9]
>>> 
>>> #型を確認
>>> type(x)
<class 'numpy.ndarray'>
>>> 
```

{{< /tab >}}
{{< /tabs >}}

