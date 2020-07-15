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
