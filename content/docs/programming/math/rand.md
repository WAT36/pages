---
title: "Rand"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 要素がランダムの行列

要素がランダムの行列を生成する方法を示す。

{{< tabs "rand" >}}
{{< tab "Python" >}}

要素がランダムな行列(2次元配列)を生成するには**numpy.random.rand(size)**を利用する。生成する要素は0~1の範囲。  
引数には行、列の２つを入力する。  
要素の数字の範囲を指定したい場合は**numpy.random,randint(low,high,size)**を利用する。low~highの範囲内で要素を生成する。（randint関数のsizeはタプル。）

```python
>>> import numpy as np
>>> 
>>> np.random.rand(2,3)
array([[0.02518258, 0.67200546, 0.74582057],
       [0.6981033 , 0.34828809, 0.96494006]])
>>> 
>>> np.random.rand(2,3)
array([[0.22508354, 0.59051942, 0.19889851],
       [0.18481436, 0.62366147, 0.94710535]])
>>> 
>>> np.random.rand(2,3)
array([[0.22727686, 0.33240298, 0.06083574],
       [0.48593146, 0.29350652, 0.46091046]])
>>> 
>>> 
>>> np.random.randint(100,200,(3,3))
array([[173, 101, 157],
       [112, 156, 184],
       [178, 142, 194]])
>>> 
```

{{< /tab >}}
{{< /tabs >}}


