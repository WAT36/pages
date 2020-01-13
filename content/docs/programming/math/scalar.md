---
title: "スカラー*行列"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# スカラー*行列

スカラーと行列を書ける方法についてを示す。

{{< tabs "scalar" >}}
{{< tab "Python" >}}

スカラーと行列をかけたいときは、普通にスカラーとnumpy.ndarray型の変数を掛け算すれば良い。  
計算後、ndarray型変数の全ての要素が掛けられた値になる。

```python
>>> import numpy as np
>>> 
>>> x = np.array([[1,2,3],[4,5,6]])
>>> 
>>> print(x)
[[1 2 3]
 [4 5 6]]
>>> 
>>> print(10*x)
[[10 20 30]
 [40 50 60]]
>>> 
>>> print(2*x)
[[ 2  4  6]
 [ 8 10 12]]
>>> 
```

{{< /tab >}}
{{< /tabs >}}


