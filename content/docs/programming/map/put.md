---
title: "辞書(Map)に要素を追加する"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 辞書(Map)に要素を追加する

辞書(Map)に要素(キー・値)を追加する方法についてを示す。  


{{< tabs "map_in" >}}
{{< tab "Java" >}}

JavaではMapクラスに**put()**というメソッドがあり、引数にキー・値を指定すると、そのMap内にキー・値が入る。  
`V put(K key, V value)`   
既に同じキーがあった場合は上書きされて入る。  

実行例を以下に示す。  

```java
import java.util.Map;
import java.util.HashMap;
class Main{
  public static void main(String args[]){

    Map<String,String> m = new HashMap<>();

    m.put("key","value");
    m.put("key2","value");
    m.put("key","value3");

    System.out.println(m);
  }
}
```

実行結果
```
> java Main
{key2=value, key=value3}
```

{{< /tab >}}
{{< tab "Python" >}}

Pythonでは以下のような記法で辞書にキー・値を追加できる。  

`辞書[キー] = 値`  

既に同じキーがあった場合は、値が上書きされる。  
実行例を以下に示す。  

```python
>>> d["key"] = "value"
>>> 
>>> d
{'key': 'value'}
>>> 
>>> d["key2"] = "value2"
>>> 
>>> d
{'key': 'value', 'key2': 'value2'}
>>> 
>>> d["key"] = "value3"
>>> d
{'key': 'value3', 'key2': 'value2'}
>>> 
```

{{< /tab >}}
{{< tab "Javascript" >}}

Javascriptにおいて、連想配列にデータを追加する方法は普通の配列と同じようにすれば良い。
添字には任意の文字列を指定する。

例を以下に示す。

```javascript
var temperature = new Array();

temperature['Tokyo'] = 20;
temperature['Sapporo'] = 15;
temperature['Naha'] = 25;
```

{{< /tab >}}
{{< /tabs >}}



