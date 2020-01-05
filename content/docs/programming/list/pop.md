---
title: "リストの指定したインデックスの要素を削除する"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# リストの指定したインデックスの要素を削除する

リストの指定した位置の要素を削除する方法についてを示す。

{{< tabs "pop" >}}
{{< tab "Java" >}}

JavaではListクラスにリストの指定した位置（インデックス）の要素を削除するメソッド**remove()**がある。    
`E remove(int index)`  
このメソッドはリストから指定したインデックスの要素を取り出して返す。その後リストでは取り出されたインデックスよりも後続の要素を左に移動する動作を行う。

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
    System.out.println(l.remove(1));    //lの1番目の要素を取り出して返す
    
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
3
1 -2 100
```

{{< /tab >}}
{{< tab "Python" >}}

Pythonにはリストに指定した位置（インデックス）の要素を取り出して返す関数**pop()**があるので、これを利用する。  
引数にはリストから取り出したい位置のインデックスを入力する。  


```python
>>> a=[1,9,8,7,6,5,3,2]
>>> 
>>> a
[1, 9, 8, 7, 6, 5, 3, 2]
>>> 
>>> a.pop(1) 
9
>>>
>>> a
[1, 8, 7, 6, 5, 3, 2]
>>>
```

{{< /tab >}}
{{< /tabs >}}


