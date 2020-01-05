---
title: "２進数に変換して表示"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 2進数に変換して表示

数値を2進数に変換して表示する方法についてを示す。

{{< tabs "bin" >}}
{{< tab "Java" >}}

JavaではラッパークラスIntegerに数値を2進数に変換するメソッド**toBinaryString()**があるのでそれを利用する。  
`public static String toBinaryString(int i)`  
戻り値はStringであり、引数の数値を2進数に表記したものが出力される。


```java
class Main{
    public static void main(String args[]){
        int a = 10;

        System.out.println(Integer.toBinaryString(a));
    }
}
```

実行結果

```
>  java Main
1010
```

{{< /tab >}}
{{< tab "Python" >}}

pythonに関しては、数値を2進数に変換して表示する組み込み関数**bin()**がある。  
表示される文字はプレフィックスとして"0b"が頭について表示される。

```python
>>> a = 10
>>> 
>>> bin(a)
'0b1010'
>>> 
```

{{< /tab >}}
{{< /tabs >}}
