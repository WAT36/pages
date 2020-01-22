---
title: "グラフのタイトルを設定する"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# グラフのタイトルを設定する

{{< tabs "title" >}}
{{< tab "Python" >}}

グラフのタイトルを設定、表示するにはpyplotの関数**title()**を利用する。  

例として、前述の[グラフに色をつける]({{< relref "/docs/programming/graph/color.md" >}})で作成したグラフにタイトルを設定した例を示す。  

```python
>>> import numpy as np
>>> import matplotlib.pyplot as plt
>>> 
>>> 
>>> def f(x,w):
...     return (x-w)*x*(x+w)
... 
>>> 
>>> x = np.linspace(-3,3,61)
>>> 
>>> #y:f(x) = x**3、w=0という凡例をつける
>>> y = f(x,0)
>>> plt.plot(x,y,color='black',label='$w=0$')
[<matplotlib.lines.Line2D object at 0x118e0b748>]
>>> 
>>> #y2:f(x) = (x-2)x(x+2)、w=2という凡例をつける
>>> y2 = f(x,2)
>>> plt.plot(x,y2,color='red',label='$w=2$')
[<matplotlib.lines.Line2D object at 0x118e0bb38>]
>>> 
>>> #凡例表示
>>> plt.legend(loc="best")
<matplotlib.legend.Legend object at 0x1165a8048>
>>> 
>>> #タイトル設定
>>> plt.title('$f_w(x)$')
Text(0.5, 1.0, '$f_w(x)$')
>>> 
>>> 
>>> #グラフ表示
>>> plt.show()
>>> 
```

実行結果

<img src="/img/datascience/Figure_6.png" width=50%>

{{< /tab >}}
{{< /tabs >}}
