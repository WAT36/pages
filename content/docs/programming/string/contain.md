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
{{< tab "Javascript" >}}

Javascriptでは ** String.includes() ** メソッドで判別が行える。利用方法は以下の通り。

```
(元の文字列).includes(検索する文字列)
```

の形式である文字列に指定した文字列が含まれているかを判別でき、含まれているとtrue、そうでない場合はfalseを返す。

使用例

```javascript
var s = 'apple,banana,cherry';

console.log(s.includes('banana'));
console.log(s.includes('durian'));
```

実行結果

```
true
false
```

{{< /tab >}}
{{< /tabs >}}

