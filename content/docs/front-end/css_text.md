---
title: "CSSでのテキスト"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# CSSでのテキスト

CSSでのテキストの表現方法についてを示す。

## text-shadowプロパティ

text-shadowプロパティは、テキストに影を表示させるプロパティである。

設定できる値は以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">none</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">影を表示させない</td>
    </tr>
    <tr>
        <td style="border:none;">色</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">影の色</td>
    </tr>
    <tr>
        <td style="border:none;">数値(2~3個、単位付)</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">影の表示位置(1番目から左右、上下、ぼかし範囲の指定)</td>
    </tr>
</table>

使用例

```
<p style="text-shadow: 5px 5px 5px red">
テキストに影を表示させる
</p>
```

表示例

<hr>
<p style="text-shadow: 5px 5px 5px red">
テキストに影を表示させる
</p>
<hr>


## text-decoration関連のプロパティ

text-decoration競のプロパティは、文字に下線・上線・取消線を引いたり、及びその線種を指定するプロパティである。

プロパティ名・指定する値・意味は以下の通り。


<table style="border:none;">
    <tr>
        <td style="border:none;" rowspan="3">text-decoration-line</td>
        <td style="border:none;">underline</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">下線</td>
    </tr>
    <tr>
        <td style="border:none;">overline</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">上線</td>
    </tr>
    <tr>
        <td style="border:none;">line-through</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">取消線</td>
    </tr>
    <tr>
        <td style="border:none;">text-decoration-color</td>
        <td style="border:none;">(色を示す値)</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">線に色を付ける</td>
    </tr>
    <tr>
        <td style="border:none;" rowspan="5">text-decoration-style</td>
        <td style="border:none;">solid</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">実線</td>
    </tr>
    <tr>
        <td style="border:none;">double</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">二重線</td>
    </tr>
    <tr>
        <td style="border:none;">dotted</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">点線</td>
    </tr>
    <tr>
        <td style="border:none;">dashed</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">破線</td>
    </tr>
    <tr>
        <td style="border:none;">wavy</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">波線</td>
    </tr>
    <tr>
        <td style="border:none;">text-decoration</td>
        <td style="border:none;" colspan="3">上記で指定する値を空白区切りで区切ってまとめて指定</td>
    </tr>
</table>


使用例

```
<p>テキストに<span style="text-decoration:underline;">下線</span>を付けてみる</p>
```

表示例

<hr>
<p>テキストに<span style="text-decoration:underline;">下線</span>を付けてみる</p>
<hr>

