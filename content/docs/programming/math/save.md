---
title: "ndarray型のデータをファイルに保存する"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# ndarray型のデータをファイルに保存する

ndarray型変数をファイルに保存する方法についてを示す。

{{< tabs "npz" >}}
{{< tab "Python" >}}

ndarray型変数をファイルに保存するにはnumpyの関数**save('ファイル名.npy',変数名)**を利用する。引数には保存するファイル名(拡張子は.npy)と保存する変数名を入力する。  

複数の変数を保存したい時はnumpyの関数**savez('ファイル名.npz',変数名1=変数名1,変数名2=変数名2,,,)**を使用する。  

また、保存した.npyファイルを読み出すにはnumpyの関数**load('ファイル名.npy')**を利用する。  

実行例

```python
>>> import numpy as np
>>> 
>>> data = np.random.randn(5)
>>> data
array([ 0.05027787,  0.59668757,  0.93566661,  1.57869082, -0.60440496])
>>> 
>>> np.save('data.npy',data)
>>> 
>>> 
>>> data1 = np.random.randn(4)
>>> data2 = np.random.randn(4)
>>> 
>>> data1
array([ 1.2854548 ,  0.04609777,  0.4210424 , -1.03562392])
>>> data2
array([ 0.50145572, -0.76596583, -0.66480387,  0.78022058])
>>> 
>>> np.savez('datum.npz',data1=data1,data2=data2)
>>> 
```

ファイル確認

```shell
$ ls -t | head -n1
data.npy
$ cat data.npy 
�NUMPYv{'descr': '<f8', 'fortran_order': False, 'shape': (5,), }                                                            
(Pz��?pD:��?������?�yNQB�?=6IW�
```

npyファイルは作成されているが、catで実行しても中身は見れない。

次に、保存したnpyファイルを読み出して見る。

```python
>>> import numpy as np
>>> 
>>> data=[]
>>> 
>>> data
[]
>>> 
>>> data = np.load('data.npy')
>>> 
>>> data
array([ 0.05027787,  0.59668757,  0.93566661,  1.57869082, -0.60440496])
>>> 
>>> file=np.load('datum.npz')
>>> 
>>> #fileに格納されているデータの表示
>>> print(file.files)
['data1', 'data2']
>>> 
>>> d1=file['data1']
>>> d1
array([ 1.2854548 ,  0.04609777,  0.4210424 , -1.03562392])
>>> 
>>> d2=file['data2']
>>> d2
array([ 0.50145572, -0.76596583, -0.66480387,  0.78022058])
>>> 
```

{{< /tab >}}
{{< /tabs >}}


