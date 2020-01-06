---
title: "行列"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 行列

行列の定義についてを示す。

{{< tabs "matrix" >}}
{{< tab "Python" >}}

行列(2次元配列)もベクトルと同様、numpyライブラリにある関数**array(list)**を使って定義する。引数のリストは2次元にする。  
type()を使って型を確認すると、**numpy.ndarray**型となっていることがわかる。  
行列の要素を書き換えたいときはリストの時と同様にインデックスを指定して書き換える。インデックスは0から始まる事に注意。  

```python
>>> import numpy as np
>>> 
>>> x = np.array([[1,2,3],[4,5,6]])
>>> 
>>> x
array([[1, 2, 3],
       [4, 5, 6]])
>>> 
>>> print(x)
[[1 2 3]
 [4 5 6]]
>>> 
>>> #行列の要素を書き換える
>>> x[1][1] = 100
>>> 
>>> print(x)
[[  1   2   3]
 [  4 100   6]]
>>> #x[1][1]が100に書き換わっている
>>> 
>>> type(x)
<class 'numpy.ndarray'>
>>> #xはndarray型
>>> 
```

{{< /tab >}}
{{< /tabs >}}


