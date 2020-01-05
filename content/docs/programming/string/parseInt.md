---
title: "文字列を数値に変換する"
date: 2019-10-15T22:02:08+09:00
bookToc: false
---

# 文字列を数値に変換する

数字の文字列を数値に変換する方法を述べる。  
ちなみに、逆の[数値を文字列にする]({{< relref "/docs/programming/number/str.md" >}})方法もある。

{{< tabs "parseint" >}}
{{< tab "Java" >}}

クラスはここではMain.javaとする

```java
class Main{
    public static void main(String args[]){
      String s = "1";
      
      int i = Integer.parseInt(s);

      System.out.println(i) // 1
    }
}
```

Javaでは各数値型のラッパークラスに **parsexxx(String s)** というメソッドがあり、これにより文字列を数値リテラルに変換してくれる。   
int型の場合はintのラッパークラスIntegerに**parseInt**というメソッドがあり、そのメソッドに文字列を入力すると、対応する数値に変換してくれる。上記例では"1"という文字列をparseIntに入力すると、int型(数値リテラル)の1が返る。  
数値リテラルに変換できないような文字列を入力すると```NumberFormatException```という例外エラーが発生する。

他の数値型に変換したいときは、それぞれ対応するラッパークラスにparsexxメソッドがあるのでそれを活用する。

```java
class Main{
    public static void main(String args[]){
      String s = "1";
      
      long l = Long.parseLong(s); //"1"をLong型に変換
      byte b = Byte.parseByte(s); //"1"をByte型に変換

      double d = Double.parseDouble(s); //"1"をDouble型に変換
      float  f = Float.parseFloat(s);   //"1"をFloat型に変換
    }
}
```

{{< /tab >}}
{{< tab "Python" >}}

Pythonで数値の文字列を数値リテラルに変換したい時は組み込み関数の**int()**や**float()**を利用する。

```python
s = "1"
print(s) #'1'

s = int(s)
print(s) # 1

s = float(s)
print(s) # 1.0
```

数値リテラルに変換できないような文字列を入力したときは、例外```ValueError```を返す。
```python
>>>s = "+"
>>>s = int(s)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: invalid literal for int() with base 10: '+'
```

{{< /tab >}}
{{< /tabs >}}