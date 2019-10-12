---
title: "標準入力、出力"
date: 2019-09-03T00:06:44+09:00
categories: [ "プログラミング" ]
tags: [ "java", "python", "標準入力", "標準出力"]
---

# 標準入力・出力

標準入力・出力について、主な動作をまとめる。

## 標準入力
<hr>

## 標準出力


### 標準出力

{{< tabs "standard_output" >}}
{{< tab "Java" >}}

クラスはここではMain.javaとする

```java
class Main{
    public static void main(String args[]){
        //出力後、改行したい時
        System.out.println(変数もしくはデータ);

        //出力後、改行したくない時
        System.out.print(変数もしくはデータ);
    }
}
```

javaで画面に出力したい時は **System.out.println()** を利用する。<br>
引数には画面に出力したい変数またはデータを入れる。
出力後改行したくない時は System.out. **print()** を使う。

{{< /tab >}}
{{< tab "Python" >}}

```python
x=(変数もしくはデータ)
print(x)        # xを画面に出力して改行する
print(x,end="") # xを画面に出力して改行しない
```

Pythonでコンソール画面への出力を扱うには組み込み関数の **print()** を使う。<br>
基本、入力された引数を画面に出力する。<br>
改行したくない場合はprint()のendパラメータに""を指定。<br>
詳しくは以下の公式ドキュメント参照。<br>
https://docs.python.org/ja/3/library/functions.html#print

{{< /tab >}}
{{< /tabs >}}


### 標準エラー出力

{{< tabs "standard_error_output" >}}
{{< tab "Java" >}}

クラスはここではMain.javaとする

```java
class Main{
    public static void main(String args[]){
        //出力後、改行したい時
        System.err.println(変数もしくはデータ);

        //出力後、改行したくない時
        System.err.print(変数もしくはデータ);
    }
}
```

基本標準出力の時と同じ。<br>
ただし、エラー出力はjavaの場合例外処理を受け取ったときに利用するため、そのときに出たエラーメッセージを出力するのが普通。

{{< /tab >}}
{{< tab "Python" >}}

```python
import sys
print(x,file=sys.stderr) # xを画面にエラー出力する
```

Pythonでエラー出力を扱うにはまずsysモジュールをインポートし、<br>
print()のfileパラメータに **sys.stderr** を指定する。

{{< /tab >}}
{{< /tabs >}}
