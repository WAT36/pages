---
title: "リストを逆順にソート"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# リストを逆順にソート

リスト内の要素を逆順にソートする方法についてを示す。

{{< tabs "reverse_sort" >}}
{{< tab "Java" >}}

Javaではリストを逆順にソートするメソッドは無いため、前述の[リストのソート]({{< relref "/docs/programming/list/sort.md" >}})と[リストを逆順にする]({{< relref "/docs/programming/list/reverse.md" >}})方法を組み合わせて利用する。  
実行例を以下に示す。  

```java
import java.util.ArrayList;
import java.util.List;
import java.util.Collections;
class Main{
  public static void main(String args[]){
    List<Integer> l = new ArrayList<Integer>();
    l.add(1);
    l.add(3);
    l.add(-2);
    l.add(100);

    for(int i=0;i<l.size();i++){
        System.out.print(l.get(i) + " ");
    }
    
    System.out.println();
    Collections.sort(l);    
    Collections.reverse(l);
    
    for(int i=0;i<l.size();i++){
      System.out.print(l.get(i) + " ");
    }
  }
}
```

実行結果
```
> java Main
1 3 -2 100
100 3 1 -2
```

{{< /tab >}}
{{< tab "Python" >}}

Pythonでは[リストをソート]({{< relref "/docs/programming/list/sort.md" >}})する方法で述べた2つの関数において、それぞれ引数**reverse**があり、それをTrueに設定してやると逆順にソートしてくれる。（デフォルトではこの引数reverseはFalseになっている）  

```python
>>> a=[1,9,8,7,6,5,3,2]
>>> 
>>> sorted(a,reverse=True)
[9, 8, 7, 6, 5, 3, 2, 1]
>>> 
>>> a
[1, 9, 8, 7, 6, 5, 3, 2]
>>>
>>> a.sort(reverse=True) 
>>> a
[9, 8, 7, 6, 5, 3, 2, 1]
>>>
```

{{< /tab >}}
{{< /tabs >}}

