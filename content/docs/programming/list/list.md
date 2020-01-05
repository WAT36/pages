---
title: "リストの宣言"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# リストの宣言

リストを使用する方法を示す。

{{< tabs "list" >}}
{{< tab "Java" >}}

Javaでのリストは**List**クラスをインポートして利用する。  
しかし、Listクラスはインターフェースであるため、そのまま使用することはできない。  
使用するには、リストの具体的な定義が書いてあるクラスをListのインスタンスに代入して使う。  
このクラスは複数あるが、ここでは一般的な**ArrayList**クラスを利用する。  
なお、ArrayListも使用するにはインポートする必要がある。  
実行例を以下に示す。  

```java
import java.util.ArrayList;
import java.util.List;
class Main{
  public static void main(String args[]){
    List<Integer> l = new ArrayList<Integer>();
  }
}
```

なお、ArrayListを宣言するときの記法は以下の通り。  
```List<データ型> 変数名 = new ArrayList<データ型>();```

また、javaでのリストは基本的に、宣言したデータ型の値しか入れることはできない。
今後、javaではリストはArrayListであることを前提に記していく。

{{< /tab >}}
{{< tab "Python" >}}

Pythonでリストを宣言するときは変数に角括弧囲いを代入してやればそれがリストとなる。  
また最初にデータを入れた状態でも宣言可能である。  

```python
>>> a = []
>>> a
[]
>>> 
>>> b = [1,2]
>>> b
[1, 2]
>>>
```

{{< /tab >}}
{{< /tabs >}}

