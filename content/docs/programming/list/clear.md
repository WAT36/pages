---
title: "リストを空にする"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# リストを空にする

リストから全ての要素を削除する方法についてを述べる。  

{{< tabs "clear" >}}
{{< tab "Java" >}}

JavaではListクラスにあるメソッド**clear()** を利用する。  

`void clear()`  

実行例を以下に示す。

```java
import java.util.List;
import java.util.ArrayList;

class Main{
  public static void main(String args[]){

    List<Integer> l = new ArrayList<>();

    l.add(1);
    l.add(2);
    l.add(3);
    l.add(4);

    System.out.println("clear前" + l);

    l.clear();

    System.out.println("clear後" + l);
  }
}
```

実行結果

```
$ java Main
clear前[1, 2, 3, 4]
clear後[]
```

{{< /tab >}}
{{< tab "Python" >}}

Pythonではリストにある関数**clear()**を使う。

```python
>>> a=[1,2,3,4,5,6]
>>> 
>>> a
[1, 2, 3, 4, 5, 6]
>>> 
>>> a.clear()
>>> 
>>> a
[]
>>> 
```

{{< /tab >}}
{{< /tabs >}}




