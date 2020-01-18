---
title: "要素が等間隔になるベクトル"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 要素が等間隔になるベクトル

指定した範囲内で、全ての要素の感覚が等しくなるようなベクトルを生成する方法についてを示す。


{{< tabs "arange" >}}
{{< tab "Python" >}}

主に方法は二つある。

- numpy.**arange()** を利用する

numpyの関数arangeは、始点start、終点stop、間隔stepの等差数列となるようなベクトルを生成する。  

`numpy.arange([start, ]stop, [step, ]dtype=None)`

ただし、終点stopは生成されるベクトルに含まれないため、終点に指定した値も含みたい時は終点stopに間隔stepを足した値を終点stopとする。  
始点startのデフォルト値は0、間隔stepのデフォルト値は1であり、指定しなくても良い。  

- numpy.**linspace()** を利用する

`numpy.linspace(start, stop, num=50, endpoint=True, retstep=False, dtype=None, axis=0)`  

numpyの関数linspaceもarangeと似たようなものだが、arangeと違う点は終点stopも生成されるベクトルに含まれる(endpoint=Falseにすると含まれない)ことと、指定するのが間隔ではなく始点~終点間に設定する点の数numという点である。  
linspaceで生成されるベクトルは、要素間の間隔が全て等しくなるように設定される。  
numはデフォルトで50、retstep=Trueにすると間隔も返ってくる。  

使用例を以下に示す。  

```python
>>> import numpy as np
>>> 
>>> #1以上10未満、間隔1(デフォルト)のベクトル
>>> x = np.arange(1,10)
>>> x
array([1, 2, 3, 4, 5, 6, 7, 8, 9])
>>> 
>>> #0(デフォルト)以上10未満、間隔1(デフォルト)のベクトル
>>> x = np.arange(10)
>>> x
array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
>>> 
>>> #1以上10未満、間隔2のベクトル
>>> x = np.arange(1,10,2)
>>> x
array([1, 3, 5, 7, 9])
>>> 
>>> #linspace
>>> #1以上10以下、要素数10
>>> x = np.linspace(1,10,10)
>>> x
array([ 1.,  2.,  3.,  4.,  5.,  6.,  7.,  8.,  9., 10.])
>>> 
>>> #1以上10以下、要素数2
>>> x = np.linspace(1,10,2)
>>> x
array([ 1., 10.])
>>> 
>>> #1以上10以下、要素数5
>>> x = np.linspace(1,10,5)
>>> x
array([ 1.  ,  3.25,  5.5 ,  7.75, 10.  ])
>>> 
>>> #1以上10未満、要素数2
>>> x = np.linspace(1,10,2,endpoint=False)
>>> x
array([1. , 5.5])
>>> 
>>> #1以上10以下、要素数2 に加え間隔も返る
>>> x = np.linspace(1,10,2,retstep=True)
>>> x
(array([ 1., 10.]), 9.0)
>>> #タプル型でベクトル、間隔が返ってくる
```

これらarange,linspaceは、matplotlib等で使うグラフの描画のところでよく使われる。  
グラフ描画では終点stopも含まれるlinspaceの方がよく多用される（と考えている）。  

{{< /tab >}}
{{< /tabs >}}



