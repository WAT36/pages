---
title: "三項演算子"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 三項演算子

条件分岐を行う三項演算子についてを示す。  


{{< tabs "ternary" >}}
{{< tab "Java" >}}

Javaでは三項演算子 "**?**" が実装されている。 例えば  
`a ? b : c`    
としたとき、aがtrueならbを、falseならcを返すという事になる。  
三項演算子の前（上記例でいうa）には必ずboolean値を返すような式にする。  

実行例を以下に示す。  

```java
class Main{
    public static void main(String args[]){
        System.out.println(true ? "Yes" : "No");

        int a = 0;
        int b = 1;

        System.out.println( a>b ? "a>b" : "a<=b");
    }
}
```

実行結果

```
> java Main
Yes
a<=b
```

{{< /tab >}}
{{< tab "Python" >}}

Pythonには三項演算子は実装されてはいない。  
しかし、if,elseを利用することで三項演算子と同様の動作を行う式を実装することはできる。  
使用法を以下に示す。  
`b  if  a  else  c`  
この式では、aがTrueの時bを、Falseならcを返すという意味である。  
無論だが、aにはTrueまたはFalseを返すような式を入力する。  

実行例を以下に示す。

```python
>>>
>>> a = "Yes" if True else "No"
>>> print(a)
Yes
>>>
>>> a = 0
>>> b = 1
>>> 
>>> print( "a>b" if a>b else "a<=b" ) 
a<=b
>>>
```


{{< /tab >}}
{{< tab "Javascript" >}}

JavascriptでもJavaと同じく三項演算子 "**?**" が実装されている。利用法も同じで

`a ? b : c`    

である。条件式aがtrueならb、falseならcを実行する。

{{< /tab >}}
{{< /tabs >}}