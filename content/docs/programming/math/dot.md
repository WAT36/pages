---
title: "行列積(ベクトルの内積)"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 行列積(ベクトルの内積)

行列積、ベクトルでいう内積を算出する方法についてを示す。

{{< tabs "dot" >}}
{{< tab "Python" >}}

行列積を算出したいときは、numpy変数の関数**dot**を使用すれば良い。  
この関数はnumpyにも、ndarray型変数にも定義されているのでどちらを利用しても良い。

`numpy.dot(行列1,行列2)`   

または

`(行列1).dot(行列2)`  

行列1,2が行列積を算出できない組み合わせ(サイズが違うなど)の時はエラーが発生する。  

```python
>>> import numpy as np
>>> 
>>> a=np.array([[1,2,3],[4,5,6]])
>>> b=np.array([[1,2],[3,4],[5,6]])
>>> 
>>> a
array([[1, 2, 3],
       [4, 5, 6]])
>>> 
>>> b
array([[1, 2],
       [3, 4],
       [5, 6]])
>>> 
>>> np.dot(a,b)
array([[22, 28],
       [49, 64]])
>>> 
>>> a.dot(b)
array([[22, 28],
       [49, 64]])
>>> 
>>> c=np.array([[1,2],[3,4]])
>>> c
array([[1, 2],
       [3, 4]])
>>> 
>>> np.dot(a,c)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: shapes (2,3) and (2,2) not aligned: 3 (dim 1) != 2 (dim 0)
>>> 
>>> a.dot(c)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: shapes (2,3) and (2,2) not aligned: 3 (dim 1) != 2 (dim 0)
>>> 
```

{{< /tab >}}
{{< /tabs >}}

