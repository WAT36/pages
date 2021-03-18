---
title: "動画・音声(JavaScript)"
weight: 1
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: true
---

# 動画・音声(JavaScript)

前述のHTMLの章で動画・音声についてを述べたが、実は動画・音声ファイルに関してはJavascriptで制御することができる。

動画はvideo要素、音声はaudio要素を利用する。ここでは、それに関してを述べる。

## プロパティ

Javascriptで、動画、音声を扱う時に利用する主なプロパティは以下の通り。


<table style="border:none;">
    <tr>
        <th style="border:none;">プロパティ名</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">readyState</td>
        <td style="border:none;">メディア要素の準備状態、詳細は別表</td>
    </tr>
    <tr>
        <td style="border:none;">networkState</td>
        <td style="border:none;">ネットワークの状態。詳細は別表</td>
    </tr>
    <tr>
        <td style="border:none;">error</td>
        <td style="border:none;">エラーの状態。詳細は別表</td>
    </tr>
    <tr>
        <td style="border:none;">paused</td>
        <td style="border:none;">再生が中断されている場合はtrueを返す。そうでない場合はfalse</td>
    </tr>
    <tr>
        <td style="border:none;">ended</td>
        <td style="border:none;">再生が完了した場合はtrue、そうでない場合はfalseを返す</td>
    </tr>
    <tr>
        <td style="border:none;">duration</td>
        <td style="border:none;">再生時間の長さ(秒)を返す</td>
    </tr>
    <tr>
        <td style="border:none;">currentTime</td>
        <td style="border:none;">現在の再生位置(秒)を返す</td>
    </tr>
</table>

うち、readyStateで返る値は以下の通り。


<table style="border:none;">
    <tr>
        <th style="border:none;">状態名</td>
        <th style="border:none;">数値</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">HAVE_NOTHING</td>
        <td style="border:none;">0</td>
        <td style="border:none;">利用可能でない状態</td>
    </tr>
    <tr>
        <td style="border:none;">HAVE_METADATA</td>
        <td style="border:none;">1</td>
        <td style="border:none;">メディアリソースに関する情報が取得済みである状態</td>
    </tr>
    <tr>
        <td style="border:none;">HAVE_CURRENT_DATA</td>
        <td style="border:none;">2</td>
        <td style="border:none;">現在の再生位置に対応するデータが利用可能</td>
    </tr>
    <tr>
        <td style="border:none;">HAVE_FUTURE_DATA</td>
        <td style="border:none;">3</td>
        <td style="border:none;">現在の再生位置及びその後に対応するデータが利用可能</td>
    </tr>
</table>

また、networkStateで返る値は以下の通り。


<table style="border:none;">
    <tr>
        <th style="border:none;">状態名</td>
        <th style="border:none;">数値</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">NETWORK_EMPTY</td>
        <td style="border:none;">0</td>
        <td style="border:none;">初期化されていない状態</td>
    </tr>
    <tr>
        <td style="border:none;">NETWORK_IDLE</td>
        <td style="border:none;">1</td>
        <td style="border:none;">一時停止された時など、ネットワークを利用していない状態</td>
    </tr>
    <tr>
        <td style="border:none;">NETOWRK_LOADING</td>
        <td style="border:none;">2</td>
        <td style="border:none;">データをダウンロード中の状態</td>
    </tr>
    <tr>
        <td style="border:none;">NETWORK_NO_SOURCE</td>
        <td style="border:none;">3</td>
        <td style="border:none;">利用するリソースが見つかってない</td>
    </tr>
</table>
