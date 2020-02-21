---
title: "Filewrite"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# ファイル書き込み

ファイルを書き込む方法についてを示す。


{{< tabs "fwrite" >}}
{{< tab "Java" >}}

Javaでは

{{< /tab >}}
{{< tab "Python" >}}

Pythonでは関数openでファイルを開いた後、ファイルオブジェクトの関数**write()**を利用してファイルを書き込む。  

`write(文字列)`  

ファイルへの書き込みを行う際にはopenで開く時にモードを **'w'** または **'a'** と必ず指定する。それ以外の時はwrite関数実行時にエラーになる。
モードが'w'のときはファイルに上書きされ、'a'の時はファイルの末尾に追記される形で書き込まれる。  

こちらも読み込みの時と同様に、作業が終わったら最後にファイルオブジェクトの関数**close()**を利用してファイルをクローズする。

また、書き込みにおいても**with**文が利用できる。with文を抜け出したとき、自動でファイルクローズも行うので便利。

```python
with open('ファイル名','モード') as f:
    f.write('ファイルに書き込む文字列')
```


実行例を以下に示す。  

```python
$ ls
test.txt
$ cat test.txt
aaa
bbb
ccc
ddd
$ python
>>> #'w'のときは上書きされて書き込まれる
>>> f = open('test.txt','w')
>>>
>>> f.write('overwrote!!')
12
>>> f.close()
>>>
>>> quit()
$ cat test.txt
overwrote!!

$ python
>>> # 'a'の時はファイルの末尾から追記される形で書き込まれる
>>> f = open('test.txt','a')
>>>
>>> f.write('aaa')
3
>>> f.write('bbb')
3
>>> f.write('ccc')
3
>>> f.close()
>>> quit()
$ cat test.txt
overwrote!!aaabbbccc

$ python
>>> # with文を使って書き込む
>>> with open('test.txt','w') as f:
...     f.write('use with and overwrite')
...
22
>>> quit()
$ cat test.txt
use with and overwrite
```


{{< /tab >}}
{{< /tabs >}}

