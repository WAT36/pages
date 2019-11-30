---
title: "数値の頭をゼロ詰して表示する"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# 数値の頭をゼロ詰して表示する

数値の頭をゼロ詰して表示する方法についてを示す。

{{< tabs "zfill" >}}
{{< tab "Java" >}}

JavaではStringクラスにある**format()** メソッドで頭をゼロ詰めして表示することができる。  

`public static String format(String format,Object... args)`

第1引数(format)には、値をどのような形式で表示するかを指定する。  
例えば5桁でゼロ詰めしたい時は下記の値を入力する。

- %05d
 - %　・・・　書式文字列であることを示す
 - 0　・・・　埋める文字。今回の場合0
 - 5　・・・　桁数。今回の場合5桁なので5
 - d　・・・　出力する値の型。今回は数値なのでd
  
この第1引数(format)に関しては種類によって記法が定められているので、詳しくは下記の公式レファレンスを参照のこと。  
https://docs.oracle.com/javase/jp/8/docs/api/java/util/Formatter.html#syntax  


実行例を下記に示す。  

```java
import java.lang.Math;
class Main{
    public static void main(String args[]){
      int a = 1;
      int b = 22;
      int c = 333;
      int d = 55555;

      System.out.println(String.format("%05d",a));
      System.out.println(String.format("%05d",b));
      System.out.println(String.format("%05d",c));
      System.out.println(String.format("%05d",d));
    }
}
```

実行結果

```
> java Main
00001
00022
00333
55555
```

{{< /tab >}}
{{< tab "Python" >}}

pythonで数値をゼロ詰めして表示するには文字列の組み込み関数の**zfill()**を利用する。  
`str.zfill(width)`  
この場合、文字strが長さwidthになるように、strの左から0を詰めていく。

実行例を以下に示す。

```python
>>> 
>>> a=1
>>> b=22
>>> c=333
>>> d=55555
>>> 
>>> print(str(a).zfill(5))
00001
>>> print(str(b).zfill(5)) 
00022
>>> print(str(c).zfill(5)) 
00333
>>> print(str(d).zfill(5)) 
55555
>>>
```

{{< /tab >}}
{{< /tabs >}}

