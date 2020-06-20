---
title: "テーブル(表)"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---


# テーブル(表)

テーブル(表)を作る要素についてを述べる。


## table要素

table要素は１つのテーブル(表)を表すの要素である。

table要素の中で後述の行や列を表す要素を定義していく。

一般的には、次の順で定義する。

- caption要素
- colgroup要素
- thead要素
- tbody要素
- tr要素
- tfoot要素


## tr要素

tr要素(table rowの略)は、テーブルの１行を表すための要素である。


## td要素

td要素(table data cellの略)は、テーブルの１行内の１列分のデータ(セル)を表すための要素である。

先のtable要素、tr要素を含め、使用例を以下に示す。

```
<table>
    <tr>
        <td>0,0</td>
        <td>0,1</td>
    </tr>
    <tr>
        <td>1,0</td>
        <td>1,1</td>
    </tr>
</table>
```

表示例

<hr>
<table>
    <tr>
        <td>0,0</td>
        <td>0,1</td>
    </tr>
    <tr>
        <td>1,0</td>
        <td>1,1</td>
    </tr>
</table>
<hr>

## th要素

th要素(table header cellの略)は、見出し用のデータ(セル)を表すための要素である。

使用例を以下に示す。

```
<table>
    <tr>
        <th>0,0</th>
        <th>0,1</th>
    </tr>
    <tr>
        <td>1,0</td>
        <td>1,1</td>
    </tr>
</table>
```

表示例

<hr>
<table>
    <tr>
        <th>0,0</th>
        <th>0,1</th>
    </tr>
    <tr>
        <td>1,0</td>
        <td>1,1</td>
    </tr>
</table>
<hr>
