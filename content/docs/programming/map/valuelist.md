---
title: "辞書(Map)から値のリストを取得"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 辞書(Map)から値のリストを取得

辞書(Map)から値のリストを取得を取得する方法についてを示す。

{{< tabs "valuelist" >}}
{{< tab "Java" >}}

JavaではMapクラスに**values()**というメソッドがある。これによりMapのキーをCollection型で取得することができる。  

`Collection<V> values()`  

Listに変換したい時はListの変数の初期化時にこの返り値を指定してやればよい。  
実行例を以下に示す。

```java
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

    List<String> valuelist = new ArrayList<>(m.values());

    System.out.println(valuelist);
  }
}
```

実行結果  
```
> java Main
{key2=value2, key3=value3, key=value}
[value2, value3, value]
```


{{< /tab >}}
{{< tab "Python" >}}

Pythonは辞書の関数に**values()**という関数があり、これを利用することで辞書の値のイテラブルオブジェクトを取得できる。  
ただし、このvalues関数で返されるオブジェクトはリストではなくdict_values型なので注意。リストに変換したい場合はlist()を使って変換する。  
for文でループさせたい時は `for i in 辞書.values()` のようにすればよい。  
実行例を以下に示す。

```python
>>> d={'key':'value', 'key2':'value2', 'key3':'value3'}
>>> d
{'key': 'value', 'key2': 'value2', 'key3': 'value3'}
>>> 
>>> valuelist=d.values()
>>> 
>>> valuelist
dict_values(['value', 'value2', 'value3'])
>>> 
>>> list(valuelist) 
['value', 'value2', 'value3']
>>> 
>>> for v in valuelist:
...     print(v) 
... 
value
value2
value3
>>> 
```

{{< /tab >}}
{{< /tabs >}}

