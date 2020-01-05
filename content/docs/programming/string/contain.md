---
title: "文字列中にある文字列が含まれているかを確認する"
date: 2019-10-29T23:27:48+09:00
bookToc: false
---

# 文字列中にある文字列が含まれているかを確認する

文字列中に特定の文字列を含んでいるかを確認したい場合どうするか？
ここではその方法についてを示す。

{{< tabs "find" >}}
{{< tab "Java" >}}

Javaで文字列中にある文字列が含まれているかを確認するにはStringのメソッドである**contains()**を利用する。  
`public boolean split(String s)`  
呼び出し元の文字列中に引数に指定した文字列が含まれていればtrue、そうでない場合はfalseを返す。
```java
class Main{
    public static void main(String args[]){
        String s = "apple,banana,cherry,durian";
        System.out.println(s.contains("banana"));

        System.out.println(s.contains("grape"));        
    }
}
```

実行結果を以下に示す。

```
> java Main
true
false
```

{{< /tab >}}
{{< tab "Python" >}}

pythonで文字列中にある文字列が含まれているかを確認するには**in**演算子を使う。   
含まれているとTrue、そうでない場合はFalseを返す。

```python
>>> s = "apple,banana,cherry" 
>>> 
>>> "banana" in s
True
>>>
>>> "grape" in s
False
>>>
```

{{< /tab >}}
{{< /tabs >}}

