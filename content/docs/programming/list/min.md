---
title: "リスト内の要素の最小値を取得する"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# リスト内の要素の最小値を取得する

リスト内の要素のうち一番小さい値を取得する方法についてを示す。

{{< tabs "max" >}}
{{< tab "Java" >}}

Javaではリストに関するメソッドがあるライブラリ**java.util.Collections**に、リスト内の要素の最小値を取得するメソッド**min()**があるので、それを利用する。  
Stringなど文字列のリストの場合は、値を辞書順に並べたときの一番初めの値が返される。

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

    System.out.println( Collections.min(l) );
    
    List<String> s = new ArrayList<String>();
    s.add("a");
    s.add("c");
    s.add("banana");
    s.add("010101");

    for(int i=0;i<s.size();i++){
        System.out.print(s.get(i) + " ");
    }
    
    System.out.println();

    System.out.println( Collections.min(s) );
  }
}
```

実行結果
```
> java Main      
1 3 -2 100
-2
a c banana 010101
010101
```

{{< /tab >}}
{{< tab "Python" >}}

Pythonには組み込み関数**min()**があり、引数として受け取ったイテラブルな値の最小値を返してくれる。  
要素が文字列の場合は、辞書順に並べたときの一番初めの値が返される。

```python
>>> a=[1,9,8,7,6,5,3,2]
>>> 
>>> min(a)
1
>>> 
>>> b=["a","c","banana","0101"] 
>>> 
>>> min(b)
'0101'
>>>
>>> b.append("000") 
>>> 
>>> b
['a', 'c', 'banana', '0101', '000']
>>>
>>> min(b)
'000'
>>>
```

{{< /tab >}}
{{< /tabs >}}

