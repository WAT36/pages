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


# Location API

Location APIは、画面のURLに関する操作を行うAPIである。

主なプロパティ及びメソッドは以下の通り。

<table style="border:none;">
    <tr>
        <th style="border:none;">プロパティ名</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">href</td>
        <td style="border:none;">URL全体</td>
    </tr>
    <tr>
        <td style="border:none;">protocol</td>
        <td style="border:none;">URLのプロトコル</td>
    </tr>
    <tr>
        <td style="border:none;">host</td>
        <td style="border:none;">URLのホストとポート番号</td>
    </tr>
    <tr>
        <td style="border:none;">hostname</td>
        <td style="border:none;">URLのドメイン</td>
    </tr>
    <tr>
        <td style="border:none;">port</td>
        <td style="border:none;">URLのポート番号</td>
    </tr>
    <tr>
        <td style="border:none;">pathname</td>
        <td style="border:none;">URLのパス</td>
    </tr>
    <tr>
        <td style="border:none;">search</td>
        <td style="border:none;">URLのクエリ</td>
    </tr>
    <tr>
        <td style="border:none;">hash</td>
        <td style="border:none;">URLのフラグメント識別子</td>
    </tr>
    <tr>
        <td style="border:none;">username</td>
        <td style="border:none;">ユーザ名</td>
    </tr>
    <tr>
        <td style="border:none;">password</td>
        <td style="border:none;">パスワード</td>
    </tr>
</table>

<table style="border:none;">
    <tr>
        <th style="border:none;">メソッド</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">assign()</td>
        <td style="border:none;">指定したページをロードする</td>
    </tr>
    <tr>
        <td style="border:none;">reload()</td>
        <td style="border:none;">現在のページをリロードする</td>
    </tr>
    <tr>
        <td style="border:none;">toString()</td>
        <td style="border:none;">現在のページのURL全体を返す</td>
    </tr>
</table>


# ブラウザの開発ツールによるテスト

Internet Explorer,Firefox,Google Chromeなどといった様なブラウザには、開発用のツールを有している物がある。

この開発ツールを用いて、画面に関するテストやデバッグを行うことができる。

これらの機能は、Javascriptの**console**オブジェクトを用いる。

consoleオブジェクトの主なメソッドを以下に記載する。

<table style="border:none;">
    <tr>
        <th style="border:none;">メソッド</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">assert()</td>
        <td style="border:none;">テスト結果で異なっていた場合にエラーメッセージを出力</td>
    </tr>
    <tr>
        <td style="border:none;">count()</td>
        <td style="border:none;">通過した回数を出力</td>
    </tr>
    <tr>
        <td style="border:none;">debug()</td>
        <td style="border:none;">メッセージを出力</td>
    </tr>
    <tr>
        <td style="border:none;">error()</td>
        <td style="border:none;">エラーメッセージを出力</td>
    </tr>
    <tr>
        <td style="border:none;">group()</td>
        <td style="border:none;">以後に表示するメッセージをグループ化する</td>
    </tr>
    <tr>
        <td style="border:none;">groupend()</td>
        <td style="border:none;">グループ化する箇所を終了する</td>
    </tr>
    <tr>
        <td style="border:none;">info()</td>
        <td style="border:none;">メッセージ(info)を出力</td>
    </tr>
    <tr>
        <td style="border:none;">time()</td>
        <td style="border:none;">タイマー開始</td>
    </tr>
    <tr>
        <td style="border:none;">timeEnd()</td>
        <td style="border:none;">タイマー終了</td>
    </tr>
    <tr>
        <td style="border:none;">warn()</td>
        <td style="border:none;">メッセージ(warn)を出力</td>
    </tr>
</table>

