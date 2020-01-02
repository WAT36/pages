---
title: "辞書(Map)"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# 辞書(Map)

辞書(Map)とは何か？  

辞書(Map)とは **"キー"** と **"値"** の２つの要素からなるデータ構造で、キーを指定した時、辞書(Map)内でそのキーに対応づけられている値が返ってくるというデータ構造である。  
またこの定義上、キーは辞書(Map)内では一意でないといけない（キーが重複してはならない）。ただし、値の方は一意になってなくても良い（重複しても良い）

定義の方法をそれぞれの言語で示す。

{{< tabs "map" >}}
{{< tab "Java" >}}

Javaでは**java.util.Map**をインポートして利用する。  
ただし、このMapクラスはインタフェースなので、利用するには具体的な実装がある別のMapのクラスをインポートして利用する。  
特に指定無い場合は**java.util.HashMap**を使う。

```java
import java.util.Map;
import java.util.HashMap;
class Main{
  public static void main(String args[]){

      Map<String,String> m = new HashMap<>();

  }
}
```

実際にこのMap内にキー・要素を入れる方法については別項に記載する。

{{< /tab >}}
{{< tab "Python" >}}

Pythonでは辞書という名前で呼ばれ、**{}** のカッコ内で囲まれたものが辞書となる。   
`{キー: 値}`

```python
>>> a={}
>>> 
>>> a
{}
>>> 
```

実際にこの辞書内にキー・要素を入れる方法については別項に記載する。

{{< /tab >}}
{{< /tabs >}}


