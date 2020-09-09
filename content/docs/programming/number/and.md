---
title: "AND演算"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# AND演算

ANDの論理演算をする方法についてを示す。

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

