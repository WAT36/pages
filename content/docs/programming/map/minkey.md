---
title: "辞書(Map)から最小のキーを取得"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 辞書(Map)から最小のキーを取得

辞書(Map)から最小のキーを取得する方法についてを示す。

{{< tabs "minkey" >}}
{{< tab "Java" >}}

JavaでMapにあるキーの最小値を取得するには、最大値と同じで以下の手順で行う。  

- Mapのメソッド**keySet()**を使い、キーのみをSetに格納したデータを取得する
- そのキーのSetをCollectionsクラスの**min()**メソッドを用いて最小値を取得する(参考：[リストの内一番小さい要素を調べる]({{< relref "/docs/programming/list/min.md" >}}))

MapクラスのkeySet()メソッドは、MapにあるキーをSetに格納したものを返すメソッドである。SetはListから重複要素を除外させたデータ構造である。  
`Set<K> keySet()`

実行例を以下に示す。  

```java
import java.util.Set;
import java.util.Map;
import java.util.HashMap;
import java.util.Collections;
class Main{
  public static void main(String args[]){

    Map<String,String> m = new HashMap<>();

    m.put("key","value");
    m.put("key2","value2");
    m.put("key3","value3");

    System.out.println(m);

    Set<String> key = m.keySet();
    String minkey = Collections.min(key);

    System.out.println("min key: " + minkey);
  }
}
```

実行結果
```
> java Main
{key2=value2, key3=value3, key=value}
min key: key
```

{{< /tab >}}
{{< tab "Python" >}}

Pythonでは単に組み込み関数**min()**を使えば、辞書にある最小のキーを取得できる。  

```python
>>> d={'key':'value', 'key2':'value2', 'key3':'value3'}
>>> d
{'key': 'value', 'key2': 'value2', 'key3': 'value3'}
>>> 
>>> min(d)
'key'
>>> 
```

{{< /tab >}}
{{< /tabs >}}



