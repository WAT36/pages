---
title: "パフォーマンス系API(Javascript)"
weight: 1
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: true
---

# パフォーマンス系API(Javascript)

Javascriptのパフォーマンスに関するAPIを述べる。

# Web Workers

Web Workersは、Webアプリケーションでバックグラウンドスクリプトを生成するためのAPIである。

Web Workersは独立したスレッドで動作するので、UIや他のスクリプトによるユーザインタラクションの処理をブロックする事なく処理を行える。

Web Workersを作成するには、Workerオブジェクトを利用して作成する。引数にはスクリプトのファイル名を取る。

```javascript
var worker = new Worker('スクリプト名')
```

Workerに関するAPIは以下の通り。

<table style="border:none;">
    <tr>
        <th style="border:none;">メソッド名</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">terminate()</td>
        <td style="border:none;">Workerを終了する</td>
    </tr>
    <tr>
        <td style="border:none;">postMessage()</td>
        <td style="border:none;">Workerにメッセージを送信する</td>
    </tr>
</table>

<table style="border:none;">
    <tr>
        <th style="border:none;">イベントハンドラ名</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">onerror</td>
        <td style="border:none;">エラーが発生した時</td>
    </tr>
    <tr>
        <td style="border:none;">onmessage</td>
        <td style="border:none;">メッセージを受信した時</td>
    </tr>
</table>

また、WorkerオブジェクトにはグローバルオブジェクトとしてWorkerGlobalScopeオブジェクトを有している。

WorkerGlobalScopeのAPI類は以下の通り。

<table style="border:none;">
    <tr>
        <th style="border:none;">プロパティ名</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">self</td>
        <td style="border:none;">WorkerGlobalScopeオブジェクト自身</td>
    </tr>
    <tr>
        <td style="border:none;">location</td>
        <td style="border:none;">Workerが作成されたときのWorkerLocationオブジェクト</td>
    </tr>
    <tr>
        <td style="border:none;">navigator</td>
        <td style="border:none;">WorkerNavigatorオブジェクト</td>
    </tr>
</table>

<table style="border:none;">
    <tr>
        <th style="border:none;">メソッド名</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">close()</td>
        <td style="border:none;">Workerをクローズする</td>
    </tr>
    <tr>
        <td style="border:none;">importScripts()</td>
        <td style="border:none;">外部スクリプトファイルをワーカーに読み込む</td>
    </tr>
    <tr>
        <td style="border:none;">postMessage()</td>
        <td style="border:none;">Workerにメッセージを送信する</td>
    </tr>
</table>

<table style="border:none;">
    <tr>
        <th style="border:none;">イベントハンドラ名</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">onerror</td>
        <td style="border:none;">エラーが発生した時</td>
    </tr>
    <tr>
        <td style="border:none;">onoffline</td>
        <td style="border:none;">オフラインになった時</td>
    </tr>
    <tr>
        <td style="border:none;">ononline</td>
        <td style="border:none;">オンラインになった時</td>
    </tr>
    <tr>
        <td style="border:none;">onmessage</td>
        <td style="border:none;">メッセージを受信した時</td>
    </tr>
</table>