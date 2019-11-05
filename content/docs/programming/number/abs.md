---
title: "数値の絶対値を算出する"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# 数値の絶対値を算出する

数値の絶対値を算出する方法についてを示す。

{{< tabs "abs" >}}
{{< tab "Java" >}}

Javaではjava.lang.Mathクラス内にある**abs()**メソッドがこの役割を果たす。   
利用するにはjava.lang.Mathクラスをインポートする。  
`public static int abs(int a)`  

この例ではint型だが、int型に限らずdouble型、float型、long型などもオーバーロードとして定義されている。  
いずれの場合も利用するには引数、返り値を格納する変数の型は一致させておく必要がある。 

```java
import java.lang.Math;
class Main{
    public static void main(String args[]){
        int a = 1;
        int b = -1;

        System.out.println(Math.abs(a));
        System.out.println(Math.abs(b));
    }
}
```

実行結果

```
> java Main
1
1
```

{{< /tab >}}
{{< tab "Python" >}}

pythonで数値の絶対値を算出するには組み込み関数の**abs**関数を使用する。

```python
>>> a = 1
>>> b = -1
>>> 
>>> print(abs(a))
1
>>> print(abs(b))
1
>>>
```

{{< /tab >}}
{{< /tabs >}}

