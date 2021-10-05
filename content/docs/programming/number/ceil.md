---
title: "小数点以下切り上げ"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 小数点以下切り上げ

小数点以下切り上げする方法についてを示す。

{{< tabs "ceil" >}}
{{< tab "Java" >}}

JavaではMathクラスにあるメソッド**ceil()**を利用することで小数点以下切り上げを行える。  
`public static double ceil(double d)`  
このメソッドは引数に入力した数値以上で最も大きい整数を返す。戻り値はdouble型。  

```java
import java.lang.Math;
class Main{
    public static void main(String args[]){
        double a = 10.1;
        double b = 10.0;
        double c =  9.9;

        System.out.println(Math.ceil(a));
        System.out.println(Math.ceil(b));
        System.out.println(Math.ceil(c));
    }
}
```

実行結果

```
> java Main  
11.0  
10.0  
10.0  
```

{{< /tab >}}
{{< tab "Python" >}}

主に方法は二つある。

pythonにもmathモジュールに**ceil()**関数がある。それを利用すると小数点以下切り上げが行える。

```python
>>> import math
>>> a=10.1
>>> b=10.0
>>> c=9.9
>>> 
>>> math.ceil(a)
11  
>>> math.ceil(b)
10
>>> math.ceil(c)
10
>>>
```

また、もう一つの方法として、割り算の結果を切り上げしたい時は   
以下の計算式により結果を切り上げることができる。    
(a÷bの結果を切り上げたい時)   
```
- (-a // b)
```

実行例を以下に示す。  
```python
>>> a=5
>>> b=2
>>> 
>>> a/b
2.5
>>> -(-a//b)
3
>>>
```

{{< /tab >}}
{{< tab "Javascript" >}}

JavascriptにはMathオブジェクトに **ceil()** 関数がある。それを利用すると小数点以下切り上げが行える。

```javascript
let a=10.1
let b=10.0
let c=9.9

console.log(Math.ceil(a))
console.log(Math.ceil(b))
console.log(Math.ceil(c))
```

実行結果

```
11
11
10
```

{{< /tab >}}
{{< /tabs >}}