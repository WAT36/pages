---
title: "Pythonでiniファイルを読み込むライブラリ「configparser」"
date: 2021-02-16T23:34:28+09:00
---


Pythonのライブラリ「configparser」について、備忘のために示す。

# 実行環境

Python 3.7.3<br>
Mac OS 10.15.5

# 設定ファイル(iniファイル)

iniファイルとは設定ファイルのことで、設定値を書き記しておき、コードを実行するときに読み込ませて利用するファイルである。

設定ファイルの形式は以下の通り。

```
[セクション名1]
キー1=値1
キー2=値2

[セクション名2]
・・・
・・・
```

セクション毎に区切り、その中にキーと値の組み合わせを書いていく。
セクションは何個書いても良い。

シェルスクリプトなどでは単純にこのiniファイルを実行すれば値を読み込めるが、Pythonでは専用のライブラリがあり、それが「configparser」である。

# configparserモジュール

この設定ファイルに対し、configparserを使って読み込みを行ってみる。

まずは、python内でconfigparserをインポートし、configparserオブジェクトを生成する。

その次に、この変数を使って設定ファイルを読み込む。

```python
import configparser

#パーサーオブジェクトを生成
config = configparser.ConfigParser()

#設定ファイル読み込み
config.read('iniファイルのパス')
```

設定ファイルを読み込むと、変数には設定ファイルの内容が入る。

例として、以下のような設定ファイル(test.ini)があったとする。

test.ini
```
[KEY-VALUES]
KEY1=VALUE1
KEY2=VALUE2
KEY3=VALUE3

[TEST]
TEST_KEY1=TEST_VALUE1
TEST_KEY2=TEST_VALUE2
TEST_KEY3=TEST_VALUE3

```


このファイルをpythonスクリプトで読み込む。(test.iniと同じフォルダで実行)

```python
import configparser

config = configparser.ConfigParser()
config.read('test.ini')
```


すると、設定ファイルの内容が変数に"ConfigParser"クラスのオブジェクトとして入る。

```python
>>> type(config)
#<class 'configparser.ConfigParser'>
```

このConfigparserオブジェクトから設定ファイルの具体的な内容の取り出す方法についてだが、
辞書と同じ様に

```
configparserオブジェクト[セクション名][キー名]
```

の形式で取り出せる。
また、関数 <b>sections()</b> でセクションのリストを表示できる。
使用例は以下の通り。

```python
>>> config.sections()
['KEY-VALUES', 'TEST']
>>> 
>>> config['KEY-VALUES']['KEY1']
'VALUE1'
>>> 
>>> config['TEST']['TEST_KEY1']
'TEST_VALUE1'
>>> 
```

このような形で、設定ファイルから値を取り出せる。