---
title: "論理演算"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

<h1>論理演算</h1>

論理演算を行う際に利用する演算子についてを述べる。

# AND演算

AND演算は入力した２値が両方とも真であった時に真を返し、それ以外は偽を返す演算方法である。

それぞれの言語における方法を示す。

{{< tabs "and" >}}
{{< tab "Java" >}}

JavaではANDの論理演算子 **&&** を使用する。戻り値はboolean型。  
`(左辺) && (右辺)`  
ちなみに、左辺がfalseだった場合は右辺の計算は行わずにfalseを出力する。  

```java
class Main{
    public static void main(String args[]){
        boolean a = true;
        boolean b = false;

        System.out.println(a && a);
        System.out.println(a && b);
        System.out.println(b && b);
    }
}
```

実行結果

```
> java Main  
true  
false  
false  
```

{{< /tab >}}
{{< tab "Python" >}}

pythonでAND演算を行うには単純に **and** を使用する。


```python
>>> a = True
>>> b = False
>>> 
>>> print(a and b)
False
>>> print(a and a)
True
>>>
```

{{< /tab >}}
{{< tab "Javascript" >}}

Javascriptでは、Javaと同じく論理演算子 **&&** があるのでこれを使用する。戻り値はboolean型。  

```
(左辺) && (右辺)
``` 

{{< /tab >}}
{{< /tabs >}}

<hr>

# OR演算

OR演算は入力した２値が両方とも偽であった時に偽を返し、それ以外は真を返す演算方法である。

各言語における方法を示す。

{{< tabs "or" >}}
{{< tab "Java" >}}

JavaではORの論理演算子 **||** を使用する。戻り値はboolean型。  
`(左辺) || (右辺)`  
ちなみに、左辺がtrueだった場合は右辺の計算は行わずにtrueを出力する。  

```java
class Main{
    public static void main(String args[]){
        boolean a = true;
        boolean b = false;

        System.out.println(a || a);
        System.out.println(a || b);
        System.out.println(b || b);
    }
}
```

実行結果

```
> java Main  
true  
true  
false  
```

{{< /tab >}}
{{< tab "Python" >}}

pythonでOR演算を行うには単純に **or** を使用する。


```python
>>> a = True
>>> b = False
>>> 
>>> print(a or b)
True
>>> print(b or b)
False
>>>
```

{{< /tab >}}
{{< tab "Javascript" >}}

Javascriptでは、Javaと同じく論理演算子 **||** があるのでこれを使用する。戻り値はboolean型。  

```
(左辺) || (右辺)
``` 

{{< /tab >}}
{{< /tabs >}}

