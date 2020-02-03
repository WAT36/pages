---
title: "転置行列"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 転置行列

転置行列を算出する方法についてを示す。  

{{< tabs "transpose" >}}
{{< tab "Python" >}}

転置行列を算出したい時は、**(ndarray型の変数).T**で行う。  

```python
>>> import numpy as np
>>> 
>>> a = np.array([[1, 2]])
>>> 
>>> print(a)
[[1 2]]
>>> 
>>> print(a.T)
[[1]
 [2]]
>>> 
>>> b = np.array([[1,2,3],[4,5,6]])
>>> 
>>> print(b)
[[1 2 3]
 [4 5 6]]
>>> 
>>> print(b.T)
[[1 4]
 [2 5]
 [3 6]]
>>> 
```

{{< /tab >}}
{{< /tabs >}}



