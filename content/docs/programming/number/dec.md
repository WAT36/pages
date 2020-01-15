---
title: "2,8,16進数を10進数に変換して表示"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 2,8,16進数を10進数に変換して表示

2,8,16進数を10進数に変換する方法についてを示す。  

{{< tabs "max" >}}
{{< tab "Java" >}}

Javaでは[文字列を数値に変換する]({{< relref "/docs/programming/string/parseInt.md" >}}) の所で述べたメソッド**Integer.parseInt()**を利用する。  

`public static int parseInt(String s,int radix)`  

前述の章で述べたところのメソッドとは別に、オーバーロードとして引数に`int radix`を加えたものが定義されている。  
入力された(文字列で表した)数値sを、radix進数の数値とみて10進数に変換し、返すというメソッドである。  
変換できないような組み合わせを入力するとエラーが発生する。  

```java
class Main{

  public static void main(String args[]){

    System.out.println(Integer.parseInt("0", 10));
    System.out.println(Integer.parseInt("777", 10));
    System.out.println(Integer.parseInt("+77", 10));
    System.out.println(Integer.parseInt("0101", 2));
    System.out.println(Integer.parseInt("FF", 16));
    System.out.println(Integer.parseInt("2147483647", 10));

    System.out.println(Integer.parseInt("2147483648", 10)); //Intのオーバーフローなのでエラー
    System.out.println(Integer.parseInt("0b0101", 2));      //接頭辞0b等は含めなくてよい。これもエラー

  }
}
```

実行結果

```
> java Main      
0
777
77
5
255
2147483647
Exception in thread "main" java.lang.NumberFormatException: For input string: "2147483648"
        at java.lang.NumberFormatException.forInputString(Unknown Source)
        at java.lang.Integer.parseInt(Unknown Source)
        at Main.main(Main.java:12)
```

{{< /tab >}}
{{< tab "Python" >}}

Pythonでも[文字列を数値に変換する]({{< relref "/docs/programming/string/parseInt.md" >}}) の所で述べた**int()**関数を利用する。  

` class int(x, base=10)`  

この通り、int関数には第1引数に数値に変換したい文字列、第2引数baseには変換元の(文字列で表した)数値の基数を入力する。  
変換できないような値を入力するとエラーになる。  

実行例を以下に示す。  

```python
>>> int('010101',2) 
21
>>>
>>> #接頭辞0b,0xは合ってもなくてもよい
>>> int('0b010101',2)  
21
>>>
>>> int('0xAA',16) 
170
>>> #接頭辞と基数の組み合わせに注意する
>>> int('0b010101',16) 
184615169
>>> int('abe',16) 
2750
>>>
>>> #変換できない組み合わせだとエラー
>>> int('0xAA',2)      
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: invalid literal for int() with base 2: '0xAA'
>>>
```

{{< /tab >}}
{{< /tabs >}}

