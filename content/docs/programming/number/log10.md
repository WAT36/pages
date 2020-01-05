---
title: "常用対数(底10)"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 常用対数(底10)

常用対数を算出する方法についてを示す。

{{< tabs "log10" >}}
{{< tab "Java" >}}

Javaではjava.lang.Mathクラス内にある**log10()**メソッドがこの役割を果たす。  
利用するにはjava.lang.Mathクラスをインポートする。   
`public static double log10(double a)`   


```java
import java.lang.Math;
class Main{
    public static void main(String args[]){
        int a = 100;
        int b = 500;

        System.out.println(Math.log10(a));
        System.out.println(Math.log10(b));
    }
}
```

実行結果

```
> java Main
2.0
2.6989700043360187
```

{{< /tab >}}
{{< tab "Python" >}}

pythonで常用対数を算出するにはmathモジュールにある関数 **log10()** 関数を使用する。  
使用するにはmathモジュールをインポートする。  

```python
>>> import math
>>> a = 100     
>>> b = 500 
>>> 
>>> print(math.log10(a))
2.0
>>> print(math.log10(b))
2.6989700043360187
>>>
```

{{< /tab >}}
{{< /tabs >}}

