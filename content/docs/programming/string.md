---
title: "文字列"
date: 2019-09-03T07:54:45+09:00
categories: [ "プログラミング" ]
tags: [ "java", "python", "文字列"]
---

# 文字列

文字列について、主な動作をまとめる。

## 文字列の宣言

## 文字列の変換・置換





### 文字列中のある文字を全て別の文字に置換する

{{< tabs "string_replace" >}}
{{< tab "Java" >}}

javaで文字列を置換したい時は **replace()** メソッドを使う。<br>
使用法は以下の通り。

```
文字列.replace(置換前の文字列,置換後の文字列);
```

以下に使用例を示す。

```java
String s = "test";
String t = s.replace("t","b");
System.out.println(t); // besb
```

上記例では"test"という文字列をreplaceメソッドで"t"を"b"に置換し、結果を表示している。結果として"besb"という文字列が表示される。

{{< /tab >}}
{{< tab "Python" >}}

Pythonでは文字列型のstrオブジェクトにメソッド **replace()** があり、これにより文字列中の文字を置換できる。<br>
使用法は以下の通り。

```python
文字列.replace(old,new [,count]);
```

これにより文字列中のoldの部分をnewに変換する。
また、オプション引数countがあり、指定すると先頭からcount個分のoldのみを置換する。

使用例を以下に示す。

```python
s = "test"
t = s.replace("t","b")
print(t)  # "besb"

t = s.replace("t","b",1)
print(t)  # "best"
```

{{< /tab >}}
{{< /tabs >}}

## 文字列の追加・削除・分割

### 文字列に別の文字列を追加する

{{< tabs "string_add" >}}
{{< tab "Java" >}}

javaの場合は使用しているクラスにより方法が異なる。<br>
Stringでは **+** 演算子を使うっことで文字列を連結できる。<br>
文字列の先頭・末尾に連結する場合はこれで良いが、文字列の途中に別の文字列を追加したい場合は、String.**substring(int beginindex, int endindex)** メソッドで文字列の一部分のみを取り出せるので、これと + 演算子を利用して連結する。
ちなみにsubstringメソッドはbeginindex〜(endindex-1)までの位置の文字列を取ってくるので注意。<br>
以下に使用例を示す。

```java
String s = "test";
String t = "1" + s;
System.out.println(t); // 1test
String t = "1" + s;
System.out.println(t); // test1
String t = s.substring(0,2) + "1" s.substring(2,4);
System.out.println(t); // te1st
```

また、StringBuilderクラスを使っている場合は、**append(追加する値)** メソッドを使うと末尾に追加されるので便利。<br>
指定した位置に追加したい場合は **insert(追加する位置,追加する値)** メソッドを使う。
ちなみに、これらメソッドは引数の型にかかわらず入力でき、引数は自動的に文字列型に置き換えられて追加される。

```java
StringBuilder sb = new StringBuilder("test");
sb.append("1");
System.out.println(sb.toString()); // test1
sb.insert(0,"1");
System.out.println(sb.toString()); // 1test1
```

{{< /tab >}}
{{< tab "Python" >}}

Pythonでも " **+** "," **+=** " 演算子を使って文字列を連結できる。<br>
また" * "演算子を使って同じ文字を指定回数連結することもできる。
以下に使用例を示す。

```python
s = "test"
t = s + "1"
print(t) # s1
t = s * 5
print(t) # testtesttesttesttest
```

{{< /tab >}}
{{< /tabs >}}

|説明|Java|Python||
|:---|:---|:---|:---|
|文字列をある文字で区切る||文字列.**split**(区切り文字(無い場合スペース))|↓の逆|
|文字列をゼロ埋めして表示する||文字列.**zfill**(ゼロ埋め後の桁数)||


## 文字列を数値に変換する

|説明|Java|Python||
|:---|:---|:---|:---|
|文字列を数値に変更する|Integer.parseInt(文字列)|int(文字列)||
|１文字からアスキーコードを取得|char c;<br>int ascii = (int)c; |ord(１文字)||

## 文字列を検索する

|説明|Java|Python||
|:---|:---|:---|:---|
|文字列中からある文字列が入ってるか検索する||文字列.**find**(検索したい文字列[,開始インデックス[,終了インデックス]])<br>最初に見つかった位置のインデックスを返し、無い場合は-1を返す<br>**rfind**を使うと右から検索。<br>**index**もfindと同じ動作をするが、無い場合はValueErrorという例外を発生する||
|文字列がある文字で始まっている（終わっている）かを確認する||文字列.**startswith**(検索したい文字列[,開始インデックス[,終了インデックス]])<br>文字列が検索したい文字列で始まっている時にTrue(真)を返す<br>終わっているときは**endswith**を使う||
|||||
