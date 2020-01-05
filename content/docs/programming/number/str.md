---
title: "数値を文字列に変換する"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 数値を文字列に変換する

[文字列を数値にする]({{< relref "/docs/programming/string/parseInt.md" >}})方法があったように、逆の数値を文字列に変換する方法も存在する。  
ここではその方法を示す。

{{< tabs "str" >}}
{{< tab "Java" >}}

Javaでは主に2つ方法がある。  

- Stringクラスの**valueOf()**メソッドを使う  
- 数値型の各ラッパークラス(Integerなど)にある**toString()**メソッドを使う  

どちらを利用してもよい。  

```java
class Main{
    public static void main(String args[]){
      int i = 100;

      String s = String.valueOf(i);
      String t = Integer.toString(i);

      System.out.println(s);
      System.out.println(t);
    }
}
```

実行結果

```
> java Main
100
100
```

{{< /tab >}}
{{< tab "Python" >}}

Pythonでは値を文字列に変換する組み込み関数 **str()** があるので、それを利用して数値を文字列に変換する。

```python
>>> i = 100
>>> str(i)  
'100'
>>> 
```

{{< /tab >}}
{{< /tabs >}}
