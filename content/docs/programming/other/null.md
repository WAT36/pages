---
title: "Null"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# Null

プログラミングでよく見るNullについて。

Nullとは何なのか？

Nullとは何もない、何も入ってない、という状態を示す語である。

変数に何も値が定義されていないとき、変数の値を参照しようとするとNullが返ってくる。

よく0と勘違いされることが多いが、変数の値を参照して0が返ってきたときは、0という値が変数に入っているという意味であり何も値が定義されていないという意味ではないので注意。

言語により仕様が違うこともあるので、それぞれの言語でのNullを以下に述べていく。

{{< tabs "comment" >}}
{{< tab "Java" >}}

Javaでは参照型のデータ型において、何も参照していない状態を表す時にnullを利用する。

参照型の変数に直接nullを代入することも可能である。変数がnullであるかを確認するには、比較演算子(==)を用いる。

nullの変数に対しメソッド呼び出しを行った場合、NullPointerException例外が発生するので注意。

例

```java
import java.util.*;

class Main{
  public static void main(String args[]){
    String s = null;
    System.out.println(s);
    System.out.println(s.length());    
  }
}
```

実行結果

```
$ java Main
null
Exception in thread "main" java.lang.NullPointerException
        at Main.main(Main.java:7)
```

{{< /tab >}}
{{< tab "Python" >}}

Pythonでは**None**という語がnullである状態を示す。

同じく変数に直接Noneを代入することも可能である。

Noneとなっている変数の関数や属性などを呼び出すとエラーになるので注意。

```python
>>> v = None
>>> v
>>> #Noneは表示されない
>>> 
>>> a={1:'a',2:'b'}
>>> 
>>> a[1]
'a'
>>> 
>>> a=None
>>> a[1]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'NoneType' object is not subscriptable
>>> #Noneの関数・属性を呼び出すとエラー
```

{{< /tab >}}
{{< tab "Swift" >}}

Swift

{{< /tab >}}
{{< /tabs >}}

