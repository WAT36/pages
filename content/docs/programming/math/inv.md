---
title: "逆行列"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 逆行列

逆行列を算出する方法についてを述べる。

{{< tabs "inv" >}}
{{< tab "Python" >}}

逆行列を算出したいときは、numpy.linalgモジュールにある関数**inv**を使用する。  

`numpy.linalg.inv(A)`   

上記の式により、行列Aの逆行列が生成される。  
実行例を以下に示す。  

```python
>>> import numpy as np
>>> 
>>> #行列Aの定義
>>> a=np.array([[1,2],[3,4]])
>>> print(a)
[[1 2]
 [3 4]]
>>> 
>>> #行列Aの逆行列
>>> print(np.linalg.inv(a))
[[-2.   1. ]
 [ 1.5 -0.5]]
>>> 
>>> #行列B（逆行列は存在しない）
>>> b=np.array([[1,1],[1,1]])
>>> print(b)
[[1 1]
 [1 1]]
>>> 
>>> #Bの逆行列 -> 逆行列は存在しないのでエラー
>>> print(np.linalg.inv(b))
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/Users/***/.pyenv/versions/3.7.3/lib/python3.7/site-packages/numpy/linalg/linalg.py", line 551, in inv
    ainv = _umath_linalg.inv(a, signature=signature, extobj=extobj)
  File "/Users/***/.pyenv/versions/3.7.3/lib/python3.7/site-packages/numpy/linalg/linalg.py", line 97, in _raise_linalgerror_singular
    raise LinAlgError("Singular matrix")
numpy.linalg.LinAlgError: Singular matrix
>>> 
>>> 
```

{{< /tab >}}
{{< /tabs >}}


