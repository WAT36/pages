---
title: "行列の型(サイズ)"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 行列の型(サイズ)

行列の型(サイズ)を調べる方法についてを示す。

{{< tabs "size" >}}
{{< tab "Python" >}}

行列(2次元配列)のサイズはnumpy.ndarray型の変数.**shape**でわかる。  
shapeは関数ではなく、ndarray型変数が持つ属性なので括弧は不要（括弧をつけるとエラー）  

```python
>>> import numpy as np
>>> 
>>> x = np.array([[1,2,3],[4,5,6]])
>>> 
>>> x
array([[1, 2, 3],
       [4, 5, 6]])
>>> # 2*3行列
>>> 
>>> x.shape()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'tuple' object is not callable
>>> # 関数ではないので()つけるとエラー
>>> 
>>> x.shape
(2, 3)
>>> #shapeはタプル型
>>> 
>>> y = np.array([[1],[2],[3]])
>>> 
>>> y
array([[1],
       [2],
       [3]])
>>> 
>>> y.shape
(3, 1)
>>> 
```

{{< /tab >}}
{{< /tabs >}}


