---
title: "シグモイド関数"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# シグモイド関数

機械学習でよく用いられるシグモイド関数についてを述べる。

シグモイド関数とは以下の式で定義される関数である。  

<img src="/img/datascience/chart1.png" width=10%>


{{< tabs "sigmoid" >}}
{{< tab "Python" >}}

シグモイド関数をプロットして表示する。

```python
>>> import numpy as np
>>> import matplotlib.pyplot as plt
>>> 
>>> x = np.linspace(-10,10,100)
>>> y = 1/(1 + np.exp(-x))
>>> 
>>> 
>>> plt.plot(x,y,'black',linewidth=3)
[<matplotlib.lines.Line2D object at 0x1109dde10>]
>>> 
>>> plt.ylim(-1,2)
(-1, 2)
>>> plt.xlim(-10,10)
(-10, 10)
>>> plt.grid(True)
>>> plt.show()
>>> 
```

実行結果

<img src="/img/datascience/Figure_14.png" width=50%>


{{< /tab >}}
{{< /tabs >}}



