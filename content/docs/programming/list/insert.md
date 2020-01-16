---
title: "リストの指定した位置に要素追加"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# リストの指定した位置に要素追加

リストの指定した位置に要素を追加する方法についてを示す。


{{< tabs "insert" >}}
{{< tab "Java" >}}

JavaではListクラスに**add()**というメソッドがある。[リストへの要素追加]({{< relref "/docs/programming/list/append.md" >}})で述べたメソッドと名前が同じであるが、こちらはそれに挿入する位置を引数に追加したメソッドである。    
`void add(int index,E element)`   
このメソッドを活用することによりリストの任意の位置に要素を追加することができる。 

使用例を以下に示す。  

```java
import java.util.List;
import java.util.ArrayList;
class Main{
  public static void main(String args[]){
    List<String> l = new ArrayList<>();
    l.add("a");
    l.add("b");
    l.add("c");
    l.add("d");

    System.out.println(l);

    //リストの2番目に要素"[2]"を追加
    l.add(2,"[2]");

    System.out.println(l);
  }
}
```

実行結果
```
> java Main      
[a, b, c, d]
[a, b, [2], c, d]
```

{{< /tab >}}
{{< tab "Python" >}}

Pythonではリストに関数**insert**がある。これを利用することにより、リストの指定した位置に要素を追加できる。  
`list.insert(i, x)`  
第１引数はリストのインデックスで、その位置に第２引数xが挿入される。  

実行例を以下に示す。  

```python
>>> l=[1,2,3,4] 
>>> 
>>> l
[1, 2, 3, 4]
>>> 
>>> l.insert(2,"[2]") 
>>> 
>>> l
[1, 2, '[2]', 3, 4]
>>> 
```

{{< /tab >}}
{{< /tabs >}}



