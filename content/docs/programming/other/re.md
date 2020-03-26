---
title: "正規表現"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 正規表現

文字列に正規表現を適用してある文字列パターンを抽出・検索したいという場合があると思う。

その場合に利用する方法を示す。

ちなみに正規表現の文法についてはここでは割愛する。

{{< tabs "re" >}}
{{< tab "Python" >}}

Pythonでは正規表現を扱う**re**モジュールがある。
この中には色々関数があり、これらを利用して文字列パターンの抽出や検索を行う。

また、reを使う時、条件として使う正規表現も文字列として入力するが、正規表現で使う文字は特殊文字が多く、そのまま入力すると正規表現として認識してくれない時がある。
それを防ぐため、pythonの**raw文字列**を使って正規表現を書く。raw文字列を使うと、特殊文字を無視して一文字として扱ってくれるのでこの場合便利。使用法は文字列のクォーテーション(')の前にrを付ける。

(例)
```python
>>> print('C:\Users\Downloads') 
  File "<stdin>", line 1
SyntaxError: (unicode error) 'unicodeescape' codec can't decode bytes in position 2-3: truncated \UXXXXXXXX escape
>>> # \u はUnicode文字列として認識されてエラーになる
>>>
>>> print(r'C:\Users\Downloads') 
C:\Users\Downloads
>>> # \Uも\Dも特殊文字とは認識せずそのまま出力する
>>>
```

このraw文字列を使い、以下に正規表現の関数の例を示す。

## 正規表現の文字列を正規表現オブジェクトに変換する

pythonのreで正規表現を使うには、文字列で表した正規表現をそのまま使う方法と、正規表現オブジェクトに変換して使う方法の2つがある。  
どちらでもよいが、正規表現の動作を何回も行わせるときは最初に文字列を正規表現オブジェクトに変換させてそれを繰り返し使わせた方が効率良く利用できる。  

文字列を正規表現オブジェクトに変換するには、reモジュールの**compile**関数を使う。

```
re.compile(pattern, flags=0)
```

引数patternに文字列で表した正規表現を入れると、それに対応した正規表現オブジェクトを返してくれる。

## 正規表現を使って文字列を検索・抽出する

実際に正規表現を使って文字列から該当する部分を検索・抽出するにはどうすればよいのか？
それにはreモジュールの以下諸関数を利用する。

- re.**search**(pattern, string, flags=0)     #stringで正規表現patternに最初にマッチした部分を返す
- re.**match**(pattern, string, flags=0)      #stringの先頭が正規表現patternにマッチしていたらそれを返す
- re.**fullmatch**(pattern, string, flags=0)  #string全体が正規表現patternにマッチしていたらそれを返す
- re.**findall**(pattern, string, flags=0)    #string中で正規表現patternにマッチしているものをリストにして全て返す

いずれの関数も、もし該当する部分がない場合はNoneが返される。
また、これら諸関数の返り値は文字列ではなく、マッチオブジェクトと呼ばれる型のデータを返す(findallはリストを返す)。
マッチオブジェクトから結果を取得したい場合は、以下の諸関数をさらに利用する。

- Match.**start**()   #マッチした文字列の文字列中での最初のインデックスを返す
- Match.**end**()     #マッチした文字列の文字列中での最後のインデックスを返す
- Match.**span**()    #マッチした文字列が文字列中でどこからどこまでのインデックスにあるのか返す
- Match.**group**()   #マッチした文字列を返す

```python
>>> import re
>>> 
>>> s = "aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnnoooppp"
>>> 
>>> pattern=re.compile(r'd+') 
>>> m = re.search(pattern,s)     
>>> m.group()                 
'ddd'
>>> m.start()
9
>>> m.end()
12
>>> m.span()
(9, 12)
>>>
>>> m = re.match(pattern,s) 
>>> print(m)  #先頭(aaa...)に一致しないのでNone
None
>>>
>>> pattern=re.compile(r'a+') 
>>> m = re.match(pattern,s)
>>> m.group()
'aaa'
>>>
>>> s = "aaa"                                               
>>> pattern=re.compile(r'a+')
>>> m = re.fullmatch(pattern,s)
>>> m.group()
'aaa'
>>>  
>>> pattern=re.compile(r'a')    
>>> m = re.findall(pattern,s)   
>>> print(m)
['a', 'a', 'a']
>>> 
```

{{< /tab >}}
{{< /tabs >}}



