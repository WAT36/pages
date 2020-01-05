---
title: "論理和(OR)"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 論理和(OR)

ORのビット演算をする方法についてを示す。

{{< tabs "or" >}}
{{< tab "Java" >}}

JavaではORのビット演算子 **|** を使用する。論理演算の時とは違い、こちらは|1個なので注意。数値型リテラルでも、boolean型でも入力可。  
`(左辺) | (右辺)`  

```java
class Main{
    public static void main(String args[]){
        boolean a = true;
        boolean b = false;

        int c = 3; //0011
        int d = 5; //0101

        System.out.println(a | a);
        System.out.println(a | b);
        System.out.println(b | b);

        System.out.println(c | c); //0011 -> 3
        System.out.println(c | d); //0111 -> 7
        System.out.println(d | d); //0101 -> 5
    }
}
```

実行結果

```
> java Main
true
true
false
3
7
5
```

{{< /tab >}}
{{< tab "Python" >}}

ビット演算に関してはpythonもjavaと同じで **|** を使用する。

```python
>>> 
>>> a = True
>>> b = False
>>> c = 3
>>> d = 5
>>> 
>>> print(a | a)
True
>>> print(a | b)
True
>>> print(b | b)
False
>>>
>>> print(c | c)
3
>>> print(c | d)
7
>>> print(d | d)
5
>>>
```

{{< /tab >}}
{{< /tabs >}}

