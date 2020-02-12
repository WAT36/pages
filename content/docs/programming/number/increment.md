---
title: "変数の値を1増やす・減らす（インクリメント・デクリメント）"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 変数の値を1増やす・減らす（インクリメント・デクリメント）

{{< tabs "increment" >}}
{{< tab "Java" >}}

Javaではインクリメント・デクリメントの演算子（ **++**、**--** ）がそれぞれ用意されている。  
利用するには変数の前または後ろに付け加えて書く。  
ただし、変数の前に書いた場合と後ろに書いた場合とで、計算が行われるタイミングが異なるので注意する。  
これら演算子は他の数式と組み合わせて記述することができるが、変数の前に置いた場合は先にインクリメント・デクリメント計算が行われてから全体の計算式を実行し、後に置いた場合は全体の計算式が実行されてからインクリメント・デクリメント計算が行われる。  
実行例を以下に示す。

```java
import java.util.Map;
import java.util.HashMap;
class Main{
  public static void main(String args[]){

    int a = 0;

    //aをインクリメント(1増やす)。a->1
    a++;
    System.out.println("a:"+ a);

    //aをデクリメント(1減らす)。a->0
    a--;
    System.out.println("a:"+ a);

    //aをインクリメントしてから全体の計算式実行（aに1足してからprintln）
    System.out.println("a:"+ ++a);

    //全体の計算式実行してからaをインクリメント（printlnしてからaに1を足す）
    System.out.println("a:"+ a++);

    //a表示（↑のprintlnの後にaがインクリメントされているので、aは2）
    System.out.println("a:"+ a);
  }
}
```

実行結果

```
> java Main
a:1
a:0
a:1
a:1
a:2
```

変数のインクリメント・デクリメントを行うタイミングに注意して設定する事。

{{< /tab >}}
{{< tab "Python" >}}

PythonではJava等のようなインクリメント・デクリメント用の演算子は**存在しない**。  
そのため、インクリメントは```(変数) += 1```、デクリメントは ```(変数) -= 1``` という形で行う。  

```python
>>> a = 0
>>> a
0
>>> a += 1
>>> a
1
>>>
>>> a -= 1
>>> a
0
>>>
```

{{< /tab >}}
{{< /tabs >}}


