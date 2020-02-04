---
title: "ベクトルの大きさ(ノルム)"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# ベクトルの大きさ(ノルム)


{{< tabs "norm" >}}
{{< tab "Python" >}}

ベクトルの大きさ(ノルム)を算出したいときは、numpy.linalgモジュールにある関数**norm**を使用する。  

`numpy.linalg.norm(ベクトル)`   

実行例を以下に示す。

```python
>>> import numpy as np
>>> 
>>> a=np.array([1,2])
>>> a
array([1, 2])
>>> 
>>> np.linalg.norm(a)
2.23606797749979
>>> 
>>> b=np.array([3,4])
>>> b
array([3, 4])
>>> 
>>> np.linalg.norm(b)
5.0
>>> 
```

{{< /tab >}}
{{< /tabs >}}

