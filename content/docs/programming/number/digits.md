---
title: "数値（整数）の桁数を調べる"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 数値（整数）の桁数を調べる

整数の桁数を調べる方法については、
数値を文字列に変換してその文字列の長さを取得すればよい。

{{< tabs "digits" >}}
{{< tab "Java" >}}

Javaでは[数値を文字列に変換]({{< relref "/docs/programming/number/str.md" >}})し、その[文字列の長さを取得]({{< relref "/docs/programming/string/length.md" >}})すればOK。

```java
import java.lang.Math;
class Main{
    public static void main(String args[]){
        int a = 10;
        int b = 123;
        int c = 76543;

        System.out.println(String.valueOf(a).length());
        System.out.println(String.valueOf(b).length());
        System.out.println(String.valueOf(c).length());
    }
}
```

実行結果

```
> java Main
2
3
5
```

{{< /tab >}}
{{< tab "Python" >}}

同様にPythonでも[数値を文字列に変換]({{< relref "/docs/programming/number/str.md" >}})し、その[文字列の長さを取得]({{< relref "/docs/programming/string/length.md" >}})すればOK。

```python
>>> a=10
>>> b=123
>>> c=76543
>>> 
>>> len(str(a))
2
>>> len(str(b))
3
>>> len(str(c))
5
>>>
```


{{< /tab >}}
{{< tab "Javascript" >}}

同様にJavascriptでも[数値を文字列に変換]({{< relref "/docs/programming/number/str.md" >}})し、その[文字列の長さを取得]({{< relref "/docs/programming/string/length.md" >}})すればOK。

```javascript
let a = 10
let b = 123
let c = 76543

console.log(String(a).length)
console.log(String(b).length)
console.log(String(c).length)
```

実行結果

```
2
3
5
```

{{< /tab >}}
{{< /tabs >}}