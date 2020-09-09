---
title: "OR演算"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# OR演算

ORの論理演算をする方法についてを示す。

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

