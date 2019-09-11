---
title: "標準入力、出力"
date: 2019-09-03T00:06:44+09:00
categories: [ "プログラミング","java", "python" ]
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
数値にしたい場合はint()で囲うなどし、スペースを区切りたい時などはsplit()等を使う。

{{< /tab >}}
{{< /tabs >}}

## 標準出力

コンソールに出力した後改行する方法と、改行しない方法がある。

|Java|Python|
|:---|:---|
|System.out.println(xx)|print(xx)||
|System.out.print(xx)|print(xx,end="")||
