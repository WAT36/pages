---
title: "平方根"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 平方根

平方根（ルート）を計算する方法についてを示す。

方法は大まかに分けると

- ライブラリにある専用の関数/メソッドを用いる
- 累乗で求める（n乗根なら1/nを累乗するなど）

の２つに分けられる。

{{< tabs "root" >}}
{{< tab "Java" >}}

JavaではMathクラスに**sqrt()**というメソッドがあり、これを利用すると平方根が計算できる。  

`public static double sqrt(double a)`  

利用するにはMathクラスをインポートする。

また、Mathクラスにある累乗を行うメソッド**pow()**も利用できる。

```java
import java.lang.Math;

class Main{
  public static void main(String args[]){

    double a = 2.0;
    double b = 3.0;
    double c = 4.0;
    double d = 5.0;

    System.out.println("Math.sqrt");
    System.out.println("root 2:"+Math.sqrt(a));
    System.out.println("root 3:"+Math.sqrt(b));
    System.out.println("root 4:"+Math.sqrt(c));
    System.out.println("root 5:"+Math.sqrt(d));
    System.out.println();

    double n = 1.0/2.0;
    System.out.println("Math.pow");
    System.out.println("root 2:"+Math.pow(a,n));
    System.out.println("root 3:"+Math.pow(b,n));
    System.out.println("root 4:"+Math.pow(c,n));
    System.out.println("root 5:"+Math.pow(d,n));
  }
}
```

実行結果
```
> java Main
Math.sqrt
root 2:1.4142135623730951
root 3:1.7320508075688772
root 4:2.0
root 5:2.23606797749979

Math.pow
root 2:1.4142135623730951
root 3:1.7320508075688772
root 4:2.0
root 5:2.23606797749979
```

{{< /tab >}}
{{< tab "Python" >}}

Pythonにはmathモジュールに**sqrt()**という関数があり、これを利用することで平方根が求められる。

または累乗の演算子＊＊も利用できる。

```python
>>> import math
>>> 
>>> math.sqrt(2) 
1.4142135623730951
>>> 
>>> math.sqrt(3) 
1.7320508075688772
>>>             
>>> math.sqrt(4) 
2.0
>>>
>>> math.sqrt(5) 
2.23606797749979
>>>
>>> n = 1/2
>>> n
0.5
>>>
>>> 2 ** n
1.4142135623730951
>>> 
>>> 3 ** n
1.7320508075688772
>>>
>>> 4 ** n
2.0
>>>
>>> 5 ** n
2.23606797749979
>>>
```

{{< /tab >}}
{{< /tabs >}}

