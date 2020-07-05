---
title: "csvファイルからデータを読み込む"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# csvファイルからデータを読み込む

Pythonで機械学習やグラフ描画を行いたい時に、元となるデータがcsvなどのファイルに書かれている場合、Pythonのライブラリである**pandas**を利用することでデータを読み込むことができる。

## csvを読み込む

csvファイルを読み込むにはpandasの関数**read_csv**を利用する。

試しに、以下のようなcsvファイル(read_sample.csv)を読み込んでみる。

```
index,name,yen
1,apple,120
2,banana,100
3,orange,80
```

コードは以下の通り。(pandas_read.py)

```python
import pandas as pd
df = pd.read_csv('read_sample.csv')
print(df)
```

実行結果

```
   index    name  yen
0      1   apple  120
1      2  banana  100
2      3  orange   80
```

read_csvでcsvを読み込んだ時、デフォルトで１行目はヘッダーとして認識されて読み込まれる。

ヘッダーを認識させたくないときは、read_csvの引数**header**をNoneにして実行する。

```python
import pandas as pd
df = pd.read_csv('read_sample.csv',header=None)
print(df)
```

実行結果

```
       0       1    2
0  index    name  yen
1      1   apple  120
2      2  banana  100
3      3  orange   80
```

## 読み込まれたデータとアクセス

読み込まれたデータはpandas.**DataFrame**型のデータとなる。

```python
import pandas as pd
df = pd.read_csv('read_sample.csv')

print(type(df))
```

実行結果
```
<class 'pandas.core.frame.DataFrame'>
```

DataFrame型のデータの内部にある読み込んできたデータを取得したい場合は、列名と行名を指定して取得する。

```python
import pandas as pd
df = pd.read_csv('read_sample.csv')

print(df['index'][0])
print(df['name'][1])
print(df['yen'][2])
```

実行結果

```
1
banana
80
```


<hr>

参考

- [pandas.read_csv - pandas 1.0.3 documentation](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.read_csv.html)
