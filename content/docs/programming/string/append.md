---
title: "文字列に別の文字列を追加する"
date: 2019-10-14T23:58:19+09:00
---

# 文字列に別の文字列を追加する

文字列の末尾に別の文字列を繋げる方法についてまとめる。

{{< tabs "string_add" >}}
{{< tab "Java" >}}

javaの場合は使用しているクラスにより方法が異なる。<br>
Stringでは **+** 演算子を使うっことで文字列を連結できる。<br>
文字列の先頭・末尾に連結する場合はこれで良いが、文字列の途中に別の文字列を追加したい場合は、String.**substring(int beginindex, int endindex)** メソッドで文字列の一部分のみを取り出せるので、これと + 演算子を利用して連結する。
ちなみにsubstringメソッドはbeginindex〜(endindex-1)までの位置の文字列を取ってくるので注意。<br>
以下に使用例を示す。

```java
String s = "test";
String t = "1" + s;
System.out.println(t); // 1test
String t = "1" + s;
System.out.println(t); // test1
String t = s.substring(0,2) + "1" s.substring(2,4);
System.out.println(t); // te1st
```

また、StringBuilderクラスを使っている場合は、**append(追加する値)** メソッドを使うと末尾に追加されるので便利。<br>
指定した位置に追加したい場合は **insert(追加する位置,追加する値)** メソッドを使う。
ちなみに、これらメソッドは引数の型にかかわらず入力でき、引数は自動的に文字列型に置き換えられて追加される。

```java
StringBuilder sb = new StringBuilder("test");
sb.append("1");
System.out.println(sb.toString()); // test1
sb.insert(0,"1");
System.out.println(sb.toString()); // 1test1
```

{{< /tab >}}
{{< tab "Python" >}}

Pythonでも " **+** "," **+=** " 演算子を使って文字列を連結できる。<br>
また" * "演算子を使って同じ文字を指定回数連結することもできる。
以下に使用例を示す。

```python
s = "test"
t = s + "1"
print(t) # s1
t = s * 5
print(t) # testtesttesttesttest
```

{{< /tab >}}
{{< /tabs >}}
