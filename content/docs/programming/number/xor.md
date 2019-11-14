---
title: "排他的論理和(XOR)"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# 排他的論理和(XOR)

XORのビット演算をする方法についてを示す。

{{< tabs "xor" >}}
{{< tab "Java" >}}

JavaではXORのビット演算子 **^** を使用する。数値型リテラルでも、boolean型でも入力可。  
`(左辺) ^ (右辺)`  

```java
class Main{
    public static void main(String args[]){
        boolean a = true;
        boolean b = false;

        int c = 3; //0011
        int d = 5; //0101

        System.out.println(a ^ a);
        System.out.println(a ^ b);
        System.out.println(b ^ b);

        System.out.println(c ^ c); //0000 -> 0
        System.out.println(c ^ d); //0110 -> 6
        System.out.println(d ^ d); //0000 -> 0
    }
}
```

実行結果

```
> java Main
false
true
false
0
6
0
```

{{< /tab >}}
{{< tab "Python" >}}

ビット演算に関してはpythonもjavaと同じで **^** を使用する。

```python
>>> 
>>> a = True  
>>> b = False 
>>> c = 3     
>>> d = 5     
>>> 
>>> print(a ^ a)
False
>>> print(a ^ b)
True
>>> print(b ^ b)
False
>>>
>>> print(c ^ c)
0
>>> print(c ^ d)
6
>>> print(d ^ d)
0
>>>
```

{{< /tab >}}
{{< /tabs >}}

