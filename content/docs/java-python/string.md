---
title: "文字列"
date: 2019-09-03T07:54:45+09:00
categories: [ "java", "python" ]
tags: [ "java", "python", "文字列"]
---

# 文字列

文字列について、諸操作のjava-python対応表をまとめる。


## 文字列の変換

|説明|Java|Python||
|:---|:---|:---|:---|
|文字列を大文字にする|(文字列).toUpperCase()|(文字列).upper()||
|文字列を小文字にする|(文字列).toLowerCase()|(文字列).lower()||
|文字列中のある文字を別の文字に一括置換する||文字列.**replace**(置換対象の文字,置換後の文字)||

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