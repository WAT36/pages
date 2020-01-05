---
title: "リストに要素を加える"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# リストに要素を加える

リストに要素を加える方法についてを示す。

{{< tabs "append" >}}
{{< tab "Java" >}}

JavaではListクラスに**add()**というメソッドがあり、引数の要素をリストの最後に追加する。  
`boolean add(E e)`  
型の問題などで要素を追加できない時はエラーとなる。  
また、オーバーロードとしてリストの指定した位置に要素を追加するaddメソッドもある。  
`void add(int index, E element)`  
実行例を以下に示す。

```java
import java.util.ArrayList;
import java.util.List;
class Main{
  public static void main(String args[]){
    List<Integer> l = new ArrayList<Integer>();
    l.add(1);
    l.add(3);
    l.add(1,100);

    for(int i=0;i<l.size();i++){
        System.out.println(l.get(i));
    }
  }
}
```

実行結果  

```
> java Main
1
100
3
```

{{< /tab >}}
{{< tab "Python" >}}

Pythonではリストの関数として  

- リストの末尾に要素を追加したい場合は**append()**  
- リストの末尾以外の指定した位置に要素を追加したい場合は**insert()**  

の関数があるので、適宜使い分ける。  
(リストの末尾に要素xを追加したい時)  
`list.append(x)`  
(リストの指定した位置iに要素xを追加したい時)  
`list.insert(i, x)`

```python
>>> a=[]
>>> a.append(1)
>>> a.append(3)
>>> 
>>> a
[1, 3]
>>>
>>> a.insert(1,100)
>>> a
[1, 100, 3]
>>>
```

{{< /tab >}}
{{< /tabs >}}
