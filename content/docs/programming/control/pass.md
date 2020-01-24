---
title: "Pass"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# pass文

何も処理をしない文、pass文についてを示す。  
構文としては何か記述が必要だが、特に処理をする必要がないという時に使う。  
言語によりあるものとないものがある。

{{< tabs "pass" >}}
{{< tab "Java" >}}

Javaには存在しない。

{{< /tab >}}
{{< tab "Python" >}}

Pythonではfor,whileの中の処理文には最低１行何か書いておく必要がある。  
何もする事が無くても何か書いておかなければならないため、このような時にpass文を用いる。  
（Javaなどでは処理分の中に何も書かなくてもコンパイルは通る）  
実行例を示す。  

```python
>>> 
>>> #whileの無限ループ。Ctrl+Cで止めない限りずっと続く
>>> while(True):
...     pass
... 
Traceback (most recent call last):
  File "<stdin>", line 2, in <module>
KeyboardInterrupt
>>> #Ctrl+Cを入力した
>>> 
>>> #クラスの定義など
>>> class Fruits:
...     def __init__():
...             pass
... 
>>> 
```

{{< /tab >}}
{{< /tabs >}}







