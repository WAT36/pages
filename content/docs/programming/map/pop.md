---
title: "辞書(Map)から要素削除"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# 辞書(Map)から要素削除

辞書(Map)から要素を削除する方法についてを示す。

{{< tabs "map_pop" >}}
{{< tab "Java" >}}

JavaではMapクラスに**remove()**というメソッドがあり、引数にキーを指定すると、Map内でそのキーの要素が削除される。  
`V remove(Object key)`   

指定したキーがMapに無い場合はnullが返る。  

また、Mapから全ての要素を削除したいときは、**clear()**というメソッドを用いると全ての要素を削除できる。  
`void clear()`


実行例を以下に示す。  

```java
import java.util.Map;
import java.util.HashMap;
class Main{
  public static void main(String args[]){

    Map<String,String> m = new HashMap<>();

    m.put("key","value");
    m.put("key2","value2");
    m.put("key3","value3");

    System.out.println(m);

    m.remove("key2");   //key2削除

    System.out.println(m);

    m.clear();          //全削除

    System.out.println(m);
  }
}
```

実行結果
```
> java Main
{key2=value2, key3=value3, key=value}
{key3=value3, key=value}
{}
```

{{< /tab >}}
{{< tab "Python" >}}

Pythonでは以下の二つの方法がある。  

- **del**文を使い要素を削除する (使用例： `del 辞書[キー]`)
- 辞書の関数**pop()**を使う (使用例： `辞書.pop(キー)` )

どちらの方法でも削除は行える。違う点は、del文の場合は実行した時何も返されないが、pop関数の場合は削除された値が返される。  
存在しないキーを指定した場合はエラーになる。    

また、辞書から全ての要素を削除したい時は、辞書に**clear()**という関数があるのでこれを使うと便利。  

実行例を以下に示す。  

```python
>>> d={}
>>> d["key"]="value"
>>> d["key2"]="value2"
>>> d["key3"]="value3"
>>> 
>>> d
{'key': 'value', 'key2': 'value2', 'key3': 'value3'}
>>> 
>>> del d["key2"]
>>> 
>>> d
{'key': 'value', 'key3': 'value3'}
>>> 
>>> d.pop("key3")
'value3'
>>> 
>>> d
{'key': 'value'}
>>> 
>>> del d["key2"]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'key2'
>>> 
>>> d.pop("key3")
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'key3'
>>> 
>>> d
{'key': 'value'}
>>> 
>>> d.clear()
>>> 
>>> d
{}
>>> 
```

{{< /tab >}}
{{< /tabs >}}



