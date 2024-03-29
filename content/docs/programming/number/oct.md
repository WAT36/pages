---
title: "8進数に変換して表示"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 8進数に変換して表示

数値を8進数に変換して表示する方法についてを示す。

{{< tabs "oct" >}}
{{< tab "Java" >}}

JavaではラッパークラスIntegerに数値を8進数に変換するメソッド**toOctalString()**があるのでそれを利用する。  
`public static String toOctalString(int i)`  
戻り値はStringであり、引数の数値を8進数に表記したものが出力される。


```java
class Main{
    public static void main(String args[]){
        int a = 10;

        System.out.println(Integer.toOctalString(a));
    }
}
```

実行結果

```
> java Main 
12
```

{{< /tab >}}
{{< tab "Python" >}}

pythonに関しては、数値を8進数に変換して表示する組み込み関数**oct()**がある。  
表示される文字はプレフィックスとして"0o"が頭について表示される。

```python
>>> a = 10
>>> 
>>> oct(a)
'0o12'
>>>
```

{{< /tab >}}
{{< tab "Javascript" >}}

2進数の時と同様に、Javascriptは関数 **toString()** を利用して変換を行う。
数値の関数として利用し、引数には変換したい進数の値を入力する。今回は8進数なので8を入力する。

```javascript
let a = 10

console.log(a.toString(8))
```

実行結果

```
12
```

{{< /tab >}}
{{< /tabs >}}