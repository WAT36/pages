---
title: "リストを逆順にする"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# リストを逆順にする

リスト内の要素を逆順にする方法についてを示す。

{{< tabs "reverse" >}}
{{< tab "Java" >}}

Javaではライブラリ**java.util.Collections**に、リスト内の要素を逆にするメソッド**reverse()**があるので、それを利用する。    
`public static void reverse(List<?> list)`  
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
100 -2 3 1 
```

{{< /tab >}}
{{< tab "Python" >}}

Pythonではリストをソートする関数は以下の2つがある。  

- 組み込み関数**reversed()**  
- リストの関数**reverse()**  

組み込み関数のreversed関数は引数に受け取ったリスト内の要素を逆順にしたイテレータを返す。しかし、イテレータのままでは表示ができないので、リストとして表示するにはlist()でリストにする必要がある。また、reversed関数を実行してもリスト自体の順番は変わらない。  
リスト型のreverse関数は実行するとリストの順番を逆にするが、返り値は何もない(None)になるので注意。実行した後再度リストを表示すると逆順になっている。  

```python
>>> a=[1,9,8,7,6,5,3,2]
>>> 
>>> reversed(a)  # reversedの返り値（＝イテレータ）をそのまま出力すると以下のようになる
<list_reverseiterator object at 0x000002096F480668>
>>>
>>> list(reversed(a)) #reversedの返り値をリスト化する
[2, 3, 5, 6, 7, 8, 9, 1]
>>> 
>>> a  # reversedを実行しても元のリストの順番は変わらない
[1, 9, 8, 7, 6, 5, 3, 2]
>>>
>>> a.reverse()
>>> a
[2, 3, 5, 6, 7, 8, 9, 1]
>>>
```

{{< /tab >}}
{{< /tabs >}}

