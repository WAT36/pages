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

### 文字列を全て大文字にする

{{< tabs "string_uppercase" >}}
{{< tab "Java" >}}

クラスはここではMain.javaとする

```
class Main{
    public static void main(String args[]){
      String s = "test";
      s = s.toUpperCase();
    }
}
```

JavaではStringクラスに **toUpperCase()** というメソッドがあり、これにより文字列を全て英大文字に変換して表示してくれる。<br>
ただし、文字列自体が変換されるわけではないので、反映させたい場合は出力を元の変数に代入してやる必要がある。

{{< /tab >}}
{{< tab "Python" >}}

```
s = "test"
s.upper()
```

Pythonは文字列型のstrオブジェクトにメソッド **upper()** があり、これにより文字列を全て大文字にできる。<br>
ただし、これも文字列自体が変換されるわけではないので、反映させたい場合は出力を元の変数に代入してやる必要がある。


{{< /tab >}}
{{< /tabs >}}

### 文字列を全て小文字にする

{{< tabs "string_lowercase" >}}
{{< tab "Java" >}}

クラスはここではMain.javaとする

```
class Main{
    public static void main(String args[]){
      String s = "test";
      s = s.toLowerCase();
    }
}
```

JavaではStringクラスに **toLowerCase()** というメソッドがあり、これにより文字列を全て英小文字に変換して表示してくれる。<br>
ただし、これも文字列自体が変換されるわけではないので、反映させたい場合は出力を元の変数に代入してやる必要がある。

{{< /tab >}}
{{< tab "Python" >}}

```
s = "test"
s.lower()
```

Pythonは文字列型のstrオブジェクトにメソッド **lower()** があり、これにより文字列を全て小文字にできる。<br>
ただし、これも文字列自体が変換されるわけではないので、反映させたい場合は出力を元の変数に代入してやる必要がある。


{{< /tab >}}
{{< /tabs >}}


### 文字列中のある文字を全て別の文字に置換する

{{< tabs "string_replace" >}}
{{< tab "Java" >}}

javaで文字列を置換したい時は **replace()** メソッドを使う。<br>
使用法は以下の通り。

```
文字列.replace(置換前の文字列,置換後の文字列);
```

以下に使用例を示す。

```
String s = "test";
String t = s.replace("t","b");
System.out.println(t); // besb
```

上記例では"test"という文字列をreplaceメソッドで"t"を"b"に置換し、結果を表示している。結果として"besb"という文字列が表示される。

{{< /tab >}}
{{< tab "Python" >}}

Pythonでは文字列型のstrオブジェクトにメソッド **replace()** があり、これにより文字列中の文字を置換できる。<br>
使用法は以下の通り。

```
文字列.replace(old,new [,count]);
```

これにより文字列中のoldの部分をnewに変換する。
また、オプション引数countがあり、指定すると先頭からcount個分のoldのみを置換する。

使用例を以下に示す。

```
s = "test"
t = s.replace("t","b")
print(t)  # "besb"

t = s.replace("t","b",1)
print(t)  # "best"
```

{{< /tab >}}
{{< /tabs >}}

## 文字列の追加・削除・分割

|説明|Java|Python||
|:---|:---|:---|:---|
|文字列の後ろに１文字追加する||||
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
