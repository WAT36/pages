---
title: "通信(Javascript)"
weight: 1
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: true
---

# 通信(Javascript)

Javascriptにおける通信の方法についてを述べる。

# WebSocket

WebSocketはHTTPとは異なる、双方向通信を実現する通信プロトコルである。

WebSocketを表すオブジェクトは、次のコンストラクタで作成できる。

```javascript
WebSocket(url);
```

引数には、接続先のサーバのURLを入力する。なお、このコンストラクタを呼び出しオブジェクトを生成するタイミングで、サーバとの接続を開始する。

WebSocketの主なAPIは以下の通り。

<table style="border:none;">
    <tr>
        <th style="border:none;">プロパティ名</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">url</td>
        <td style="border:none;">接続先のURL</td>
    </tr>
    <tr>
        <td style="border:none;">readyState</td>
        <td style="border:none;">現在の接続状態</td>
    </tr>
    <tr>
        <td style="border:none;">bufferedAmount</td>
        <td style="border:none;">WebSocketオブジェクト内にあるデータのサイズを示す。0の時、プログラムから送信指示があったデータはネットワークに送信されている状態。</td>
    </tr>
</table>

<table style="border:none;">
    <tr>
        <th style="border:none;">メソッド名</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">send()</td>
        <td style="border:none;">サーバにデータを送信する</td>
    </tr>
    <tr>
        <td style="border:none;">close()</td>
        <td style="border:none;">サーバとの接続を切断する</td>
    </tr>
</table>

<table style="border:none;">
    <tr>
        <th style="border:none;">イベントハンドラ名</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">onopen</td>
        <td style="border:none;">サーバとの接続確立が成功した時</td>
    </tr>
    <tr>
        <td style="border:none;">onmessage</td>
        <td style="border:none;">サーバから新しいメッセージが届いた時</td>
    </tr>
    <tr>
        <td style="border:none;">onclose</td>
        <td style="border:none;">サーバとの接続がクローズした時</td>
    </tr>
    <tr>
        <td style="border:none;">onerror</td>
        <td style="border:none;">エラーが発生した時</td>
    </tr>
</table>


また、readyStateプロパティで得られる値は以下の通り。

<table style="border:none;">
    <tr>
        <th style="border:none;">値</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">CONNECTING</td>
        <td style="border:none;">接続中</td>
    </tr>
    <tr>
        <td style="border:none;">OPEN</td>
        <td style="border:none;">接続確立済みでサーバとの通信が可能な状態</td>
    </tr>
    <tr>
        <td style="border:none;">CLOSING</td>
        <td style="border:none;">接続切断中</td>
    </tr>
    <tr>
        <td style="border:none;">CLOSED</td>
        <td style="border:none;">接続切断済み</td>
    </tr>
</table>

WebSocketの接続確立におけるこれらAPIの利用を示した図を以下に記載する。

<img src="/img/front-end/websocket.png" width=50%>


# XMLHttpRequest

XMLHttpRequestは、Javascriptから呼び出し可能なHTTP通信を提供するAPIである。

これにより、スクリプトがHTTP通信を行うことが可能になり、画面遷移を伴わずに、HTTPリクエストを送信することができる。

この技術を利用したものをAjaxと呼ぶこともあり、Single Page Applicationの実現にも利用される。

XMLHttpRequestのAPIは以下の通り。


<table style="border:none;">
    <tr>
        <th style="border:none;">プロパティ名</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">readyState</td>
        <td style="border:none;">現在の接続状態</td>
    </tr>
    <tr>
        <td style="border:none;">timeout</td>
        <td style="border:none;">リクエストのタイムアウト時間</td>
    </tr>
    <tr>
        <td style="border:none;">withCredentials</td>
        <td style="border:none;">クロスドメイン通信時にユーザの認証情報を含める場合にはtrue,それ以外はfalse</td>
    </tr>
</table>

<table style="border:none;">
    <tr>
        <th style="border:none;">メソッド名</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">open()</td>
        <td style="border:none;">リクエストメソッド(GET,POSTなど)、リクエスト先URL、非同期フラグ、ユーザ名、パスワードを設定する</td>
    </tr>
    <tr>
        <td style="border:none;">setRequestHeader()</td>
        <td style="border:none;">リクエストヘッダを追加する</td>
    </tr>
    <tr>
        <td style="border:none;">send()</td>
        <td style="border:none;">サーバにデータを送信する</td>
    </tr>
    <tr>
        <td style="border:none;">abort()</td>
        <td style="border:none;">通信を中止する</td>
    </tr>
    <tr>
        <td style="border:none;">getResponseHeader()</td>
        <td style="border:none;">レスポンスヘッダ引数で指定された名前を持つ値を返す</td>
    </tr>
    <tr>
        <td style="border:none;">getAllResponseHeader()</td>
        <td style="border:none;">レスポンスヘッダを返す</td>
    </tr>
</table>

<table style="border:none;">
    <tr>
        <th style="border:none;">イベントハンドラ名</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">onloadstart</td>
        <td style="border:none;">リクエストを開始した</td>
    </tr>
    <tr>
        <td style="border:none;">onprogress</td>
        <td style="border:none;">データを送信（受信）中</td>
    </tr>
    <tr>
        <td style="border:none;">onabort</td>
        <td style="border:none;">通信が中止された時</td>
    </tr>
    <tr>
        <td style="border:none;">onerror</td>
        <td style="border:none;">エラーが発生した時</td>
    </tr>
    <tr>
        <td style="border:none;">onload</td>
        <td style="border:none;">リクエストが正常に完了した時</td>
    </tr>
    <tr>
        <td style="border:none;">ontimeout</td>
        <td style="border:none;">リクエストがタイムアウトした時</td>
    </tr>
</table>

XMLHttpRequestのAPIの一連の流れを示した図を以下に記載する。

<img src="/img/front-end/xmlhttprequest.png" width=50%>


# Server-Sent Events

Server-Sent Eventsは、Webサーバからブラウザへのデータプッシュを受信するためのインタフェースである。

Server-Sent Eventsでは、サーバからMIME-type text/event-streamの形式でデータを送信する事ができる。

API類は以下の通り。

<table style="border:none;">
    <tr>
        <th style="border:none;">プロパティ名</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">readyState</td>
        <td style="border:none;">現在の接続状態</td>
    </tr>
</table>


<table style="border:none;">
    <tr>
        <th style="border:none;">メソッド名</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">EventSource()</td>
        <td style="border:none;">EventSourceオブジェクトのコンストラクタで、サーバへの接続を開始する。引数には接続先URLを入力</td>
    </tr>
    <tr>
        <td style="border:none;">close()</td>
        <td style="border:none;">サーバ接続を切断する</td>
    </tr>
</table>

<table style="border:none;">
    <tr>
        <th style="border:none;">イベントハンドラ名</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">onopen</td>
        <td style="border:none;">サーバとの接続確立が成功した時</td>
    </tr>
    <tr>
        <td style="border:none;">onmessage</td>
        <td style="border:none;">サーバから新しいメッセージが届いた時</td>
    </tr>
    <tr>
        <td style="border:none;">onerror</td>
        <td style="border:none;">エラーが発生した時</td>
    </tr>
</table>

また、readyStateプロパティで得られる値は以下の通り。

<table style="border:none;">
    <tr>
        <th style="border:none;">値</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">CONNECTING</td>
        <td style="border:none;">接続中</td>
    </tr>
    <tr>
        <td style="border:none;">OPEN</td>
        <td style="border:none;">接続確立済みでサーバとの通信が可能な状態</td>
    </tr>
    <tr>
        <td style="border:none;">CLOSED</td>
        <td style="border:none;">接続切断済み</td>
    </tr>
</table>

Server-Sent EventsのAPIの一連の流れを示した図を以下に記載する。

<img src="/img/front-end/serversentevent.png" width=50%>


