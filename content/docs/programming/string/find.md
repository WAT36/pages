---
title: "文字列中にある文字列が含まれているときにその位置を確認する"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# 文字列中にある文字列が含まれているときにその位置を確認する

文字列中に特定の文字列が含まれていた時、その位置を確認したい場合どうするか？
ここではその方法についてを示す。

{{< tabs "find" >}}
{{< tab "Java" >}}

JavaではStringのメソッドである**indexOf()**を利用する。  
`public int indexOf(String str)`  
このメソッドは、文字列内で指定された部分文字列が最初に出現する位置のインデックスを返す。   
文字列の途中の位置から検索したい場合は下記のメソッドを利用する。  
`public int indexOf(String str, int fromIndex)`  
このメソッドは文字列のfromIndex番目以降の文字列で部分文字列が最初に出現する位置のインデックスを返す。   
ちなみに部分文字列が存在しない場合は-1を返す。

```java
class Main{
    public static void main(String args[]){
        String s = "apple,banana,cherry,durian";
        System.out.println(s.indexOf("banana"));

        System.out.println(s.indexOf("banana",10));        
    }
}
```

```
> java Main
6
-1
```

{{< /tab >}}
{{< tab "Python" >}}

pythonでは文字列strの関数**find**関数を使う。  
`str.find(sub[, start[, end]])`  
subには検索したい部分文字列を入力する。  
実行結果には、strの中でsubが最初に現れる位置のインデックスが返される。  
存在しない場合には-1が返る。  
strの指定した範囲内だけで検索したい場合には、引数start,endに値を指定して実行する。  

```python
>>> s = "apple,banana,cherry" 
>>> 
>>> s.find("banana") 
6
>>> 
>>> s.find("banana",10) 
-1
>>>
```

また、文字列を右から検索する関数**rfind**もある。
```python
>>> s.rfind("banana") 
6
>>> 
>>> s.find("a")
0
>>> s.rfind("a") 
11
>>>
```

{{< /tab >}}
{{< /tabs >}}

