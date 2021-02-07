---
title: "ブラウザ関連API"
weight: 1
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: true
---

# ブラウザ関連API

ブラウザに関するAPIについてを述べる。

# History API

History APIは、ブラウザの履歴を提供するためのAPIである。また、bブラウザの戻る・進むボタンの様なページを遷移するためのイベントもここで行える。

主なプロパティ及びメソッドは以下の通り。

<table style="border:none;">
    <tr>
        <th style="border:none;">プロパティ名</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">length</td>
        <td style="border:none;">履歴の数</td>
    </tr>
    <tr>
        <td style="border:none;">state</td>
        <td style="border:none;">最後に設定された状態</td>
    </tr>
</table>

<table style="border:none;">
    <tr>
        <th style="border:none;">メソッド</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">go()</td>
        <td style="border:none;">履歴において指定した番目のページへ遷移する</td>
    </tr>
    <tr>
        <td style="border:none;">back()</td>
        <td style="border:none;">1つ前のページへ遷移する</td>
    </tr>
    <tr>
        <td style="border:none;">forward()</td>
        <td style="border:none;">1つ後のページへ遷移する</td>
    </tr>
</table>

これらをJavascript上で利用することで、ページの遷移も行えることができる。


