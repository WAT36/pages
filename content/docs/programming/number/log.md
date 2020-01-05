---
title: "任意の底の対数"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 任意の底の対数

任意の底の対数を算出する方法についてを示す。
しかし、任意の底の対数を算出するライブラリは無いことが多い。
そのため、以下の公式を用いて算出を行う。（底の変換公式）

log<sub>a</sub>b = log<sub>c</sub>b / log<sub>c</sub>a

{{< tabs "log" >}}
{{< tab "Java" >}}

Javaには任意の底での対数を算出するメソッドは無いため、  
底の変換公式  を用いて前述の**log10()**、**loge()** を利用し算出する。

```java
import java.lang.Math;
class Main{
    public static void main(String args[]){
        int a = 2;
        int b = 4;
        int c = 1024;

        //log2(n)を算出する
        System.out.println(Math.log(b)/Math.log(a)); //log(2)4
        System.out.println(Math.log(c)/Math.log(a)); //log(2)1024
    }
}
```

実行結果

```
> java Main
2.0
10.0
```

{{< /tab >}}
{{< tab "Python" >}}

pythonには任意の数を底とする対数を算出する関数が存在し、  
それは自然対数を算出する時にも利用したmathモジュールにある**log()**関数である。  

`math.log(x,y)`  

log(x,y)関数は、yを底としたxの対数を返す。  
yを略した場合（引数１つの場合）、底は自動的にeとなり、自然対数になる。(→自然対数)  
使用するにはmathモジュールをインポートする。    

```python
>>> import math
>>> a=2
>>> b=4
>>> c=1024
>>> 
>>> math.log(b,a) 
2.0
>>> math.log(c,a)
10.0
>>>
```

{{< /tab >}}
{{< /tabs >}}

