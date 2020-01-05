---
title: "16進数に変換して表示"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 16進数に変換して表示

数値を16進数に変換して表示する方法についてを示す。

{{< tabs "hex" >}}
{{< tab "Java" >}}

JavaではラッパークラスIntegerに数値を16進数に変換するメソッド**toHexString()**があるのでそれを利用する。  
`public static String toHexString(int i)`  
戻り値はStringであり、引数の数値を16進数に表記したものが出力される。


```java
class Main{
    public static void main(String args[]){
        int a = 10;

        System.out.println(Integer.toHexString(a));
    }
}
```

実行結果

```
> java Main
a
```

{{< /tab >}}
{{< tab "Python" >}}

pythonに関しては、数値を16進数に変換して表示する組み込み関数**hex()**がある。  
表示される文字はプレフィックスとして"0x"が頭について表示される。

```python
>>> a = 10
>>> 
>>> hex(a)
'0xa'
>>> 
```

{{< /tab >}}
{{< /tabs >}}