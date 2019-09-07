---
title: "標準入力、出力"
date: 2019-09-03T00:06:44+09:00
---

# 標準入力・出力

標準入力・出力について、主な動作をJava/Python別にまとめる。

## 標準入力

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

|Java|Python|
|:---|:---|
|コンソールにxxを出力して改行する|System.out.println(xx)|print(xx)||
|コンソールにxxを出力して改行しない|System.out.print(xx)|print(xx,end="")||
