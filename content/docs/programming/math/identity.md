---
title: "単位行列"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 単位行列

単位行列を生成する方法を述べる。


{{< tabs "identity" >}}
{{< tab "Python" >}}

単位行列を算出したいときは、numpyモジュールにある関数**identity**を使用する。  

`numpy.linalg.identity(n)`   

上記の式により、n×nの単位行列が生成される。  
実行例を以下に示す。  

```python
>>> import numpy as np
>>> 
>>> #2×2の単位行列
>>> i = np.identity(2)
>>> print(i)
[[1. 0.]
 [0. 1.]]
>>> 
>>> #5×5の単位行列
>>> i = np.identity(5)
>>> print(i)
[[1. 0. 0. 0. 0.]
 [0. 1. 0. 0. 0.]
 [0. 0. 1. 0. 0.]
 [0. 0. 0. 1. 0.]
 [0. 0. 0. 0. 1.]]
>>> 
```

{{< /tab >}}
{{< /tabs >}}

