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
クラス内で宣言するmainメソッドの引数であるString型の配列(上記コード中の"args")に入る。
コマンドライン引数をスペースで区切って何個かに分けて入力した場合、初めから順にargsの0番目から順に入る。

{{< /tab >}}
{{< tab "Python" >}}

```
import sys
inputs = sys.argv # コマンドライン引数を格納したリストを取得する
```

Pythonはsysモジュールのargv属性にコマンドライン引数がリストとして入る。
コマンドライン引数を取得するには、sysモジュールをインポートしてargvを参照する。

{{< /tab >}}
{{< /tabs >}}

### 数値として取得

|Java|Python|
|:---|:---|
|Scanner.nextInt()|int(input().split())|

### 文字列として取得

１行丸ごと文字列として取得する方法と、１行をスペースで区切って１個ずつ取得する方法、またargvから取得する方法がある。

|Java|Python|
|:---|:---|
|Scanner.nextLine()|str(input())|
|Scanner.next()|list(input())|
|メソッドの引数にString[] argsと書いて<br>そのメソッド内でargs（引数のインデックス）|import sys<br>sys.argv |

## 標準出力

コンソールに出力した後改行する方法と、改行しない方法がある。

|Java|Python|
|:---|:---|
|System.out.println(xx)|print(xx)||
|System.out.print(xx)|print(xx,end="")||
