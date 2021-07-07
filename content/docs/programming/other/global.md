---
title: "大域変数と局所変数（グローバルオブジェクトとCallオブジェクト）"
weight: 1
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: true
---

# 大域変数と局所変数（グローバルオブジェクトとCallオブジェクト）

大域変数と局所変数（グローバルオブジェクトとCallオブジェクト）についてを述べる。


## グローバルオブジェクトとCallオブジェクト

Javascriptはスクリプトを読み込んだ時に、**グローバルオブジェクト**なるものを自動で生成する。グローバルオブジェクトはグローバルスコープを持ったグローバル変数やグローバル関数を管理する。

同様に、関数を呼んだ時には**Callオブジェクト**が生成される。Callオブジェクトには関数のスコープ内での変数や関数が管理される。

変数が参照された時、それが関数内でだった場合はその関数に対応したCallオブジェクトから変数を探し、無い場合はその上位のCallオブジェクト(あるいはグローバルオブジェクト)に変数を探していく。


## グローバルオブジェクト

グローバルオブジェクトはブラウザが新しいページを読み込む時に自動で生成されるオブジェクトで、インスタンスの記述は不要である。関数やプロパティを参照する際も、インスタンス名の記述は不要である。

代表的なグローバルオブジェクトは以下の通り。

<table style="border:none;">
    <thead>
        <th style="border:none;">オブジェクト名</th>
        <th style="border:none;">説明</th>
    </thead>
    <tr>
        <td style="border:none;">Array</td>
        <td style="border:none;">配列オブジェクト</td>
    </tr>
    <tr>
        <td style="border:none;">Boolean</td>
        <td style="border:none;">真偽値オブジェクト</td>
    </tr>
    <tr>
        <td style="border:none;">Date</td>
        <td style="border:none;">日付オブジェクト</td>
    </tr>
    <tr>
        <td style="border:none;">Error</td>
        <td style="border:none;">エラーオブジェクト</td>
    </tr>
    <tr>
        <td style="border:none;">JSON</td>
        <td style="border:none;">JSONオブジェクト</td>
    </tr>
    <tr>
        <td style="border:none;">Math</td>
        <td style="border:none;">Mathオブジェクト</td>
    </tr>
    <tr>
        <td style="border:none;">Number</td>
        <td style="border:none;">数値オブジェクト</td>
    </tr>
    <tr>
        <td style="border:none;">Object</td>
        <td style="border:none;">オブジェクト</td>
    </tr>
    <tr>
        <td style="border:none;">String</td>
        <td style="border:none;">文字列オブジェクト</td>
    </tr>
</table>


## クロージャ
