---
title: "1文字からその文字の文字コード（アスキーコード）を取得する"
date: 2019-10-24T20:43:32+09:00
bookToc: false
---

# 1文字からその文字の文字コード（アスキーコード）を取得する

コンピュータは二進数しか扱えないため、文字データも二進数（つまり整数）として扱われる。
つまり１文字に対して対応する整数が割り当てられており、コンピュータはその数を特定の文字と思い込み処理する。この数の事を文字コードという。
文字１文字から、その文字の文字コードを取得する方法をまとめる。


{{< tabs "ascii" >}}
{{< tab "Java" >}}

クラスはここではMain.javaとする

```java
class Main{
    public static void main(String args[]){
      char c = 'a';
      int a = c;
      System.out.println(a); // 97
    
      String s = "aaaaa";
      a = s //コンパイルエラー

      c = s.charAt(0) // sの0文字目をchar型で返す 
      System.out.println(c); // a
      a = c;
      System.out.println(a); // 97
    }
}
```

Javaでは１文字のchar型と文字列のString型があるが、
文字コードに変換できるのは**char型**のほうであり、String型の変換はできない。
char型のデータをint型の変数に代入するのは可能なのか？という疑問もあるだろうが、
Javaには代入する変数とデータの型が違っていても、片方がもう片方の型に変換が可能であれば代入は行える。
char型の変数はint型、double型などの数値データ型に変換が可能であり、この例ではint型の変数に代入できる。
対してString型はint,doubleなどの数値データ型には変換できないので、変換したい1文字をchar型として取り出してから行う。

{{< /tab >}}
{{< tab "Python" >}}

Pythonで文字から文字コードを取得するには**ord()**関数を利用する。
ord()関数は1文字を受け取りその文字コードを出力する。入力する文字は半角でも全角でも良い。
２文字以上を入力するとエラーになる。

```python
>>> ord("a")
97
>>> ord("aa")
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: ord() expected a character, but string of length 2 found
>>>
>>> 
>>> ord("あ") 
12354
>>>
```

また、逆の文字コードから対応する文字を出力する関数**chr()**もある。

```python
>>> chr(97)
'a'
>>> chr(98)
'b'
```

{{< /tab >}}
{{< /tabs >}}

