---
title: "行列のサイズを変更する"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 行列のサイズを変更する

行列のサイズを変更する方法についてを示す。

{{< tabs "rand" >}}
{{< tab "Python" >}}

行列のサイズを変更したい場合は変数名.**reshape(n,m)**を使う。  
変更後の行列と変更前の行列の要素数は同じでないといけない（違う場合はエラー）  
実行例を示す。

```python
>>> import numpy as np
>>> 
>>> a = np.arange(10)
>>> a
array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
>>> 
>>> print(a)
[0 1 2 3 4 5 6 7 8 9]
>>> 
>>> a.reshape(2,5)
array([[0, 1, 2, 3, 4],
       [5, 6, 7, 8, 9]])
>>> 
>>> a.reshape(3,5)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: cannot reshape array of size 10 into shape (3,5)
>>> 
>>> 
```

{{< /tab >}}
{{< /tabs >}}


