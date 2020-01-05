---
title: "リストの長さ"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---


# リストの長さ

リストの長さ（＝リストに入っているデータの個数）を取得する方法を示す。  

{{< tabs "len" >}}
{{< tab "Java" >}}

JavaではListクラスに**size()**というメソッドがあり、これはリストに入っているデータの個数（＝リストの長さ）を返してくれる。  
`int size()`    
実行例を以下に示す。  


```java
import java.util.ArrayList;
import java.util.List;
class Main{
  public static void main(String args[]){
    List<Integer> l = new ArrayList<Integer>();
    l.add(1);
    l.add(3);

    System.out.println(l.size());
  }
}
```

実行結果  

```
> java Main
2
```

{{< /tab >}}
{{< tab "Python" >}}

Pythonでは**len()**という関数があり、引数のリストの長さ（リスト内の要素の数）を返してくれる。

```python
>>> a=[1,2,3] 
>>> 
>>> len(a)
3
>>>
```

{{< /tab >}}
{{< /tabs >}}
