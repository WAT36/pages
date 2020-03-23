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


以下に例を示す。

（作成中）

{{< /tab >}}
{{< /tabs >}}

