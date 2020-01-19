---
title: "グラフに色をつける"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# グラフに色をつける

{{< tabs "plot" >}}
{{< tab "Python" >}}

グラフに色をつけて表示させるには、グラフを表示するときに使ったpyplotの関数plotの引数に**color**というパラメータがあるので、そこに指定したい色を入力する。  

色以外にもplotには多くのパラメータが定義されている。詳しくは以下の公式レファレンスを参照する。  

- [pyplot.plot](https://matplotlib.org/3.1.1/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot)


実行例を以下に示す。  

```python
>>> import numpy as np
>>> import matplotlib.pyplot as plt
>>> 
>>> #関数定義
>>> def f(x,w):
...     return (x-w)*x*(x+w)
... 
>>> 
>>> x = np.linspace(-3,3,61)
>>> x
array([-3. , -2.9, -2.8, -2.7, -2.6, -2.5, -2.4, -2.3, -2.2, -2.1, -2. ,
       -1.9, -1.8, -1.7, -1.6, -1.5, -1.4, -1.3, -1.2, -1.1, -1. , -0.9,
       -0.8, -0.7, -0.6, -0.5, -0.4, -0.3, -0.2, -0.1,  0. ,  0.1,  0.2,
        0.3,  0.4,  0.5,  0.6,  0.7,  0.8,  0.9,  1. ,  1.1,  1.2,  1.3,
        1.4,  1.5,  1.6,  1.7,  1.8,  1.9,  2. ,  2.1,  2.2,  2.3,  2.4,
        2.5,  2.6,  2.7,  2.8,  2.9,  3. ])
>>> 
>>> #y:f(x) = x**3
>>> y = f(x,0)
>>> 
>>> #y2:f(x) = (x-2)x(x+2)
>>> y2 = f(x,2)
>>> 
>>> #yは黒い線で描画
>>> plt.plot(x,y,color='black')
[<matplotlib.lines.Line2D object at 0x10d76c320>]
>>> 
>>> #y2は赤い線で描画
>>> plt.plot(x,y2,color='red')
[<matplotlib.lines.Line2D object at 0x10ea1f4e0>]
>>> 
>>> #グラフ表示
>>> plt.show()
>>> 
```

実行結果

<img src="/img/datascience/Figure_3.png" width=50%>


因みに、colorに指定できるのは以下の値。一文字でも、正式名でも良い。  

'b':blue  
'g':green  
'r':red  
'c':cyan  
'm':magenta  
'y':yellow  
'k':black  
'w':white  

また、これ以外にカラーコード、CSSの色名もcolorに指定できる。  

{{< /tab >}}
{{< /tabs >}}
