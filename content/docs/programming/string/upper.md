---
title: "英字文字列を全て英字大文字にする"
date: 2019-10-14T23:32:45+09:00
bookToc: false
---

# 英字文字列を全て英字大文字にする

英字の文字列を全て大文字にする方法について。
ほとんどの言語では、だいたいこの手の関数やメソッドが用意されているので、それを利用する。

{{< tabs "string_uppercase" >}}
{{< tab "Java" >}}

クラスはここではMain.javaとする

```java
class Main{
    public static void main(String args[]){
      String s = "test";
      s = s.toUpperCase();
    }
}
```

JavaではStringクラスに **toUpperCase()** というメソッドがあり、これにより文字列を全て英大文字に変換して表示してくれる。<br>
ただし、文字列自体が変換されるわけではないので、反映させたい場合は出力を元の変数に代入してやる必要がある。

{{< /tab >}}
{{< tab "Python" >}}

```python
s = "test"
s = s.upper()
```

Pythonは文字列型のstrオブジェクトにメソッド **upper()** があり、これにより文字列を全て大文字にできる。<br>
ただし、これも文字列自体が変換されるわけではないので、反映させたい場合は出力を元の変数に代入してやる必要がある。


{{< /tab >}}
{{< tab "Javascript" >}}

```javascript
var s = "test"
s = s.toUpperCase();

console.log(s);
```

実行結果

```
TEST
```

Javascriptではメソッド **toUpperCase()** により文字列を全て大文字にできる。<br>
ただし、これも文字列自体が変換されるわけではないので、反映させたい場合は出力を元の変数に代入してやる必要がある。


{{< /tab >}}
{{< /tabs >}}