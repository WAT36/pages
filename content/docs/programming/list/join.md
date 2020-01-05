---
title: "リストの全要素を連結して１つの文字列に変換する"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# リストの全要素を連結して１つの文字列に変換する

リストの全要素を連結して1つの文字列にする方法についてを示す。
なお、前提としてここでいうリスト内にある要素は全て文字列型とする。

{{< tabs "join" >}}
{{< tab "Java" >}}

JavaではStringに**join()**というメソッドがある。これは引数にデリミタとIterable変数を指定し、Iterableの中にある要素を全てデリミタで繋げて出力するというメソッドである。  

`public static String join(CharSequence delimiter, Iterable<? extends CharSequence> elements)`

使用例を以下に示す。  

```java
import java.util.ArrayList;
import java.util.List;
class Main{
  public static void main(String args[]){

    List<String> l = new ArrayList<>();
    l.add("a");
    l.add("bb");
    l.add("ccc");
    l.add("dddd");

    System.out.println(l + " -> " + String.join("",l));
  }
}
```

実行結果
```
> java Main      
[a, bb, ccc, dddd] -> abbcccdddd
```

{{< /tab >}}
{{< tab "Python" >}}

Pythonでは文字列の関数に**join()**というのがあり、引数にリスト等を指定してやると、リスト内の要素を呼び出し元の文字列で繋げた文字列を返す。
呼び出し元を **""** にすると、リスト内の要素が全て連結された形で出てくる。

使用例を以下に示す。  

```python
>>> a=["a","bb","ccc","dddd"] 
>>> 
>>> a
['a', 'bb', 'ccc', 'dddd']
>>>
>>> ''.join(a)
'abbcccdddd'
>>>
```

{{< /tab >}}
{{< /tabs >}}
