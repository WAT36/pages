---
title: "円周率(π)"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 円周率(π)

重要な定数は大体ライブラリ（モジュール）内で定義されていることが多い。
ここでは円周率(π)を参照する方法についてを示す。

{{< tabs "abs" >}}
{{< tab "Java" >}}

Javaではjava.lang.Mathクラス内にフィールド変数**PI**が定義されており、これがJava上で円周率に最も近い数とされている。  
利用するにはjava.lang.Mathクラスをインポートする。  
ちなみに型はDouble型である。  

```java
import java.lang.Math;
class Main{
    public static void main(String args[]){
        System.out.println(Math.PI);
    }
}
```

実行結果

```
> java Main   
3.141592653589793   
```

{{< /tab >}}
{{< tab "Python" >}}

pythonではmathモジュールに定数**pi**が定義されており、これがpython上で最も円周率に近い数とされている。
利用するにはmathモジュールをインポートする。

```python
>>> import math
>>> math.pi
3.141592653589793
>>>
```

{{< /tab >}}
{{< tab "Javascript" >}}

JavascriptではMathモジュールに定数**PI**が定義されており、これが円周率に最も近い数とされている。

```javascript
console.log(Math.PI)
```

実行結果

```
3.141592653589793
```

{{< /tab >}}
{{< /tabs >}}

