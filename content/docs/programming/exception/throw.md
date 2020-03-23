---
title: "例外の明示的な発生"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 例外の明示的な発生

例外(エラー)は実行時にコードの不備によりに起こるのみではなく、（コード中で）自分で意図的に発生させることもできる。ここではその方法についてを示す。

{{< tabs "throw" >}}
{{< tab "Java" >}}

Javaでは**throw**文を使うことで指定した例外を発生することができる。

使用例

```
throw new Exception();

Exception e = new Exception();
throw e;
```

実行例を以下に示す。

```java
class Main{
  public static void main(String args[]){
    try{
      throw new Exception();
    }catch(Exception e){
      System.out.println(e.getMessage());
    }
  }
}
```

実行結果

```
> java Main
null
```

{{< /tab >}}
{{< tab "Python" >}}

Pythonでは**raise**文を使うことで指定した例外を発生する事ができる。  

```python
>>> raise NameError("例外発生!") 
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: 例外発生!
>>>
>>> try:
...     raise NameError("例外発生!")
... except NameError:
...     print("NameError発生!") 
... 
NameError発生!
>>>
```

{{< /tab >}}
{{< /tabs >}}


