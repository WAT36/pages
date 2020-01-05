---
title: "指定した要素がリスト内にいくつあるか調べる"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 指定した要素がリスト内にいくつあるか調べる

指定した要素がリスト内にいくつあるか調べる方法についてを示す。

{{< tabs "count" >}}
{{< tab "Java" >}}

Javaでは具体的なメソッドが(調べたところ)無いため、リストの要素を一個一個見ていって調べる。  
（他に方法があるかもしれないので、後に要調査。）

```java
iimport java.util.ArrayList;
import java.util.List;
class Main{
  public static void main(String args[]){

    List<String> l = new ArrayList<>();
    l.add("a");
    l.add("b");
    l.add("c");
    l.add("d");
    l.add("a");
    l.add("a");

    System.out.println("l:" + l );

    int count=0;
    for(int i=0;i<l.size();i++){
        if(l.get(i)=="a"){
            count++;
        }
    }

    System.out.println("a:" + count);
  }
}
```

実行結果

```
>java Main
l:[a, b, c, d, a, a]
a:3
```

{{< /tab >}}
{{< tab "Python" >}}

Pythonではリストの関数に**count()**があり、これは引数に指定した要素がリスト内にいくつあるかを返してくれる。  

```python
>>> l=['a','b','c','d','a','a']
>>> 
>>> l
['a', 'b', 'c', 'd', 'a', 'a']
>>> 
>>> l.count('a')
3
>>> 
```


{{< /tab >}}
{{< /tabs >}}

