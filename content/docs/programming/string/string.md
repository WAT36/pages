---
title: "文字列を宣言する"
date: 2019-10-17T22:05:28+09:00
bookToc: false
---

# 文字列を宣言する
  
文字列のデータ（文字列リテラル）を宣言するにはどうすればよいか？

{{< tabs "string" >}}
{{< tab "Java" >}}

クラスはここではMain.javaとする

```java
class Main{
    public static void main(String args[]){
      char c = 'c';

      System.out.println(c); // c

      String s = "Words";

      System.out.println(s); // Words
    }
}
```

Javaで文字を扱うには、基本データ型であり1文字のみを扱える**char**型と、
2文字以上の文字列を扱える**String**型がある。（もう少し言うとStringBuilder型というのもあるがここでは割愛する
）
char型の場合は1文字をシングルクォート('')で囲んで宣言する。char型で2文字以上の文字を宣言するとコンパイルエラ
ーとなる。

String型の場合は文字列をダブルクォート("")で囲んで宣言する。文字列は0文字から扱える。

{{< /tab >}}
{{< tab "Python" >}}

Pythonでは文字列を扱うには

```
(変数) = "文字列"
```

または

```
(変数) = '文字列'
```

のようにする。
Javaとは違い、Pythonでは文字列を宣言するときにはシングルクォート('')、ダブルクォート("")のどちらを利用しても
よい。

```python
>>> s = "a"
>>> print(s)
a
>>> c = 'c'
>>> print(c)
c
>>> 
```

{{< /tab >}}
{{< tab "Javascript" >}}

Javascriptでも、シングルクォート('')、ダブルクォート("")を利用して文字列を宣言する。

```Javascript
var h1 = 'Hello! World!'
var h2 = "Hello! World!"
```

{{< /tab >}}
{{< /tabs >}}
