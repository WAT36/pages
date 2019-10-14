---
title: "文字列を別の文字列に置換する"
date: 2019-10-14T23:46:41+09:00
---

# 文字列を別の文字列に置換する

文字列を別の文字列に置換する方法。
その文字列全ての他、文字列の一部分または文字列中の条件に合う文字列に対する置換も行える。

{{< tabs "string_replace" >}}
{{< tab "Java" >}}

javaで文字列を置換したい時は **replace()** メソッドを使う。<br>
使用法は以下の通り。

```java
文字列.replace(置換前の文字列,置換後の文字列);
```

以下に使用例を示す。

```java
String s = "test";
String t = s.replace("t","b");
System.out.println(t); // besb
```

上記例では"test"という文字列をreplaceメソッドで"t"を"b"に置換し、結果を表示している。結果として"besb"という文字列が表示される。

{{< /tab >}}
{{< tab "Python" >}}

Pythonでは文字列型のstrオブジェクトにメソッド **replace()** があり、これにより文字列中の文字を置換できる。<br>
使用法は以下の通り。

```python
文字列.replace(old,new [,count]);
```

これにより文字列中のoldの部分をnewに変換する。
また、オプション引数countがあり、指定すると先頭からcount個分のoldのみを置換する。

使用例を以下に示す。

```python
s = "test"
t = s.replace("t","b")
print(t)  # "besb"

t = s.replace("t","b",1)
print(t)  # "best"
```

{{< /tab >}}
{{< /tabs >}}