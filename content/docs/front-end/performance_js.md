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

このうちlocationプロパティで得られるWorkLocationオブジェクトのプロパティは以下の通り。

<table style="border:none;">
    <tr>
        <th style="border:none;">プロパティ名</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">href</td>
        <td style="border:none;">このオブジェクトが示すURL</td>
    </tr>
    <tr>
        <td style="border:none;">protocol</td>
        <td style="border:none;">プロトコル</td>
    </tr>
    <tr>
        <td style="border:none;">host</td>
        <td style="border:none;">ホスト</td>
    </tr>
    <tr>
        <td style="border:none;">hostname</td>
        <td style="border:none;">ホスト名</td>
    </tr>
    <tr>
        <td style="border:none;">port</td>
        <td style="border:none;">ポート</td>
    </tr>
    <tr>
        <td style="border:none;">search</td>
        <td style="border:none;">検索ワード</td>
    </tr>
</table>


# High Resolution Time API

High Resolution Time APIは、ms以下の分解能を持つ時刻を扱うためのAPIである。

使用するには、W3CのHigh Resolution Timeで定義されている**Performance**オブジェクトを利用する。

実際に時刻を取得するには、**performance.now()**メソッドを利用する。

このメソッドにより得られるデータはDOMHighResTimeStamp型は、ns精度のタイムスタンプを表す。


# Application Cache

Application Cacheは、マニフェストファイルに指定したファイルをローカルにキャッシュすることで、ネットワークがオフラインでもブラウザからページを閲覧できる仕組みを提供するAPIである。

全体的な流れを示した図は以下の通り。

<img src="/img/front-end/applicationcache.png" width=50%>

Application Cacheは、Javascriptでは**ApplicationCache**オブジェクトを利用して扱う。

ApplicationCacheのAPI類は以下の通り。

<table style="border:none;">
    <tr>
        <th style="border:none;">プロパティ名</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">status</td>
        <td style="border:none;">Application Cacheの状態(下表参照)</td>
    </tr>
</table>

このstatusで得られる値は以下の通り。

<table style="border:none;">
    <tr>
        <th style="border:none;">値</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">UNCACHED</td>
        <td style="border:none;">キャッシュが存在しない</td>
    </tr>
    <tr>
        <td style="border:none;">IDLE</td>
        <td style="border:none;">キャッシュがアイドル状態</td>
    </tr>
    <tr>
        <td style="border:none;">CHECKING</td>
        <td style="border:none;">キャッシュの更新を確認中</td>
    </tr>
    <tr>
        <td style="border:none;">DOWNLOADING</td>
        <td style="border:none;">キャッシュをダウンロード中</td>
    </tr>
    <tr>
        <td style="border:none;">OBSOLETE</td>
        <td style="border:none;">キャッシュが廃止された状態</td>
    </tr>
</table>

<hr>

<table style="border:none;">
    <tr>
        <th style="border:none;">メソッド名</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">update()</td>
        <td style="border:none;">キャッシュの更新を行う</td>
    </tr>
    <tr>
        <td style="border:none;">abort()</td>
        <td style="border:none;">キャッシュのダウンロードを中断する</td>
    </tr>
</table>

<table style="border:none;">
    <tr>
        <th style="border:none;">イベントハンドラ名</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">onchecking</td>
        <td style="border:none;">キャッシュのチェック中</td>
    </tr>
    <tr>
        <td style="border:none;">onerror</td>
        <td style="border:none;">エラーが発生した時</td>
    </tr>
    <tr>
        <td style="border:none;">ondownloading</td>
        <td style="border:none;">キャッシュのダウンロード中</td>
    </tr>
    <tr>
        <td style="border:none;">onprogress</td>
        <td style="border:none;">キャッシュ処理の進行中</td>
    </tr>
    <tr>
        <td style="border:none;">oncached</td>
        <td style="border:none;">キャッシュ済み</td>
    </tr>
</table>
