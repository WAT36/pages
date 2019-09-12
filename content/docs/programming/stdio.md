---
title: "標準入力、出力"
date: 2019-09-03T00:06:44+09:00
categories: [ "プログラミング" ]
tags: [ "java", "python", "標準入力", "標準出力"]
---

# 標準入力・出力

標準入力・出力について、主な動作をまとめる。

## 標準入力

データの入力について<br>
ソースコードを実行する時及び実行中に、何かデータを入力して実行することができる。<br>
具体的な方法としては、<br>
ソースコードを実行するときに、引数としてデータを入力（ **コマンドライン引数** と呼ぶ）して実行する方法と、<br>
ソースコードを実行した後に、キーボード等でデータを打ち込んで入力する方法がある。<br>
（後者はここではコンソール入力と呼ぶことにする、何か具体的な名前ってあったかな）

### コマンドライン引数

{{< tabs "commandline_input" >}}
{{< tab "Java" >}}

クラスはここではMain.javaとする

```
class Main{
    public static void main(String args[]){
      String[] input = args //コマンドライン引数を格納した配列を取得する
    }
}
```

Javaではコマンドライン引数は
クラス内で宣言するmainメソッドの引数であるString型の配列(上記コード中の"args")に入る。<br>
コマンドライン引数をスペースで区切って何個かに分けて入力した場合、初めから順にargsの0番目から順に入る。

{{< /tab >}}
{{< tab "Python" >}}

```
import sys
inputs = sys.argv # コマンドライン引数を格納したリストを取得する
```

Pythonはsysモジュールのargv属性にコマンドライン引数がリストとして入る。<br>
コマンドライン引数を取得するには、sysモジュールをインポートしてargvを参照する。

{{< /tab >}}
{{< /tabs >}}

### コンソール入力

{{< tabs "console_input" >}}
{{< tab "Java" >}}

クラスはここではMain.javaとする

```
import java.util.Scanner

class Main{
  public static void main(String args[]){

    //Scannerのインスタンスを生成
    Scanner sc = new Scanner(System.in);

    //入力を何のデータ型で受け取るかで別れる
    //(例)int型
    int i = sc.nextInt();

    //String型（１行分全て）
    String s = sc.nextLine();
    //String型（スペース等で区切った一部分ずつ）
    String s = sc.next();
  }
}
```

javaでコンソールからの入力を扱うには **Scanner** クラスをインポートし、インスタンスを生成する。<br>
その後、入力データを何のデータ型で受け取るかにより利用するScannerクラスのメソッドが別れるが、多いので一部に留める。<br>
全て知りたい人は以下の公式サイトを参照。<br>
https://docs.oracle.com/javase/jp/8/docs/api/java/util/Scanner.html

{{< /tab >}}
{{< tab "Python" >}}

```
s = input() # コンソールからの入力をsに格納する
```

Pythonでコンソールからの入力を扱うには組み込み関数の **input()** を使う。<br>
基本入力１行を読み込み、文字列に変換して渡される。<br>
数値にしたい場合はint()で囲うなどし、スペースを区切りたい時などはsplit()等を使う。<br>
詳しくは以下の公式ドキュメント参照。<br>
https://docs.python.org/ja/3/library/functions.html#input

{{< /tab >}}
{{< /tabs >}}

<hr>

## 標準出力

標準出力は指定したデータの内容をコンソール画面に出力する事を言うが、
標準出力にも通常の標準出力の他に、エラー発生時用の出力である標準エラー出力というのもある。

### 標準出力

{{< tabs "standard_output" >}}
{{< tab "Java" >}}

クラスはここではMain.javaとする

```
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

```
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

```
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

```
import sys
print(x,file=sys.stderr) # xを画面にエラー出力する
```

Pythonでエラー出力を扱うにはまずsysモジュールをインポートし、<br>
print()のfileパラメータに **sys.stderr** を指定する。

{{< /tab >}}
{{< /tabs >}}
