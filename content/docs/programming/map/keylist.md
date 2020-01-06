---
title: "辞書(Map)からキーのリストを取得"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 辞書(Map)からキーのリストを取得

辞書(Map)からキーのリストを取得する方法についてを示す。

{{< tabs "keylist" >}}
{{< tab "Java" >}}

JavaではMapクラスに**keySet()**というメソッドがある。これによりMapのキーをSetで取得することができる。  

`Set<K> keySet()`  

Listに変換したい時はListの変数の初期化時にこのSetを指定してやればよい。  
実行例を以下に示す。

```java
import java.util.Set;
import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;
class Main{
  public static void main(String args[]){

    Map<String,String> m = new HashMap<>();

    m.put("key","value");
    m.put("key2","value2");
    m.put("key3","value3");

    System.out.println(m);

    Set<String> key = m.keySet();
    List<String> keylist = new ArrayList<>(key);

    System.out.println(keylist);
  }
}
```

実行結果  
```
> java Main
{key2=value2, key3=value3, key=value}
[key2, key3, key]
```


{{< /tab >}}
{{< tab "Python" >}}

Pythonは辞書の関数に**keys()**という関数があり、これを利用することで辞書のキーのイテラブルオブジェクトを取得できる。  
ただし、このkeys関数で返されるオブジェクトはリストではなくdict_keys型なので注意。リストに変換したい場合はlist()を使って変換する。  
for文でループさせたい時は `for i in 辞書.keys()` のようにすればよい。  
実行例を以下に示す。

```python
>>> d={'key':'value', 'key2':'value2', 'key3':'value3'}
>>> d
{'key': 'value', 'key2': 'value2', 'key3': 'value3'}
>>>
>>> keylist=d.keys()
>>> 
>>> keylist
dict_keys(['key', 'key2', 'key3'])
>>> 
>>> list(keylist) 
['key', 'key2', 'key3']
>>>
```

{{< /tab >}}
{{< /tabs >}}


