---
title: "デバイスアクセス(Javascript)"
weight: 1
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: true
---

# デバイスアクセス(Javascript)

デバイスアクセス、いわゆる機器に関する情報を得るためのAPIをここでは述べる。

# Geolocation API

Geolocation APIは、ユーザの位置情報を扱うためのAPIである。位置情報は、無線LAN・WiFi、携帯電話基地局、GPS、IPアドレスなどから取得する。(どのソースから取得したかは知れない)

また、取得するにはユーザーの許可が必要となる。(ブラウザに確認ウィンドウが出る)

位置情報を取得するためのGeolocationオブジェクトは、navigatorオブジェクトから取得する。Geolocationオブジェクトのメソッド例は以下のとおり。

<table style="border:none;">
    <tr>
        <th style="border:none;">メソッド名</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">getCurrentPosition()</td>
        <td style="border:none;">ユーザの現在の位置情報を取得する(1回のみ)</td>
    </tr>
    <tr>
        <td style="border:none;">watchPosition()</td>
        <td style="border:none;">ユーザの位置情報を定期的に監視する</td>
    </tr>
    <tr>
        <td style="border:none;">clearWatch()</td>
        <td style="border:none;">watchPosition()による位置情報の監視をクリアする</td>
    </tr>
</table>

メソッドにより返る位置情報はPositionCallBack型のオブジェクトとして得られる。(また、Geolocationオブジェクトによる位置情報の測位が失敗したときはPositionErrorCallbackオブジェクトが返る。)

その中に更にPositionオブジェクトがあり、そのプロパティは以下の通り。

<table style="border:none;">
    <tr>
        <th style="border:none;">プロパティ名</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">coords</td>
        <td style="border:none;">位置情報(Coordinatesオブジェクト)</td>
    </tr>
    <tr>
        <td style="border:none;">timestamp</td>
        <td style="border:none;">測位した時刻</td>
    </tr>
</table>

この内、coordsプロパティに入るCoordinatesオブジェクトに取得できた位置情報が格納される。

Coordinatesオブジェクトのプロパティは以下の通り。

<table style="border:none;">
    <tr>
        <th style="border:none;">プロパティ名</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">latitude</td>
        <td style="border:none;">緯度</td>
    </tr>
    <tr>
        <td style="border:none;">longitude</td>
        <td style="border:none;">経度</td>
    </tr>
    <tr>
        <td style="border:none;">altitude</td>
        <td style="border:none;">高度</td>
    </tr>
    <tr>
        <td style="border:none;">heading</td>
        <td style="border:none;">方角</td>
    </tr>
    <tr>
        <td style="border:none;">speed</td>
        <td style="border:none;">速度</td>
    </tr>
</table>

# DeviceOrientation Event

DeviceOrientation Eventは、スマートフォンに搭載された加速度センサーやコンパスの情報をリアルタイムに取得することができるAPIである。

以下2種類のイベントから成り、情報はイベントを受け取るごとに行われる。

- DeviceOrientationEvent ・・・ 加速度センサーがデバイスの方向の変化を検出したときに発生
- DeviceMotionEvent ・・・ 加速度が変化したときに発生

DeviceOrientationEventのAPIは以下の通り。

<table style="border:none;">
    <tr>
        <th style="border:none;">プロパティ名</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">alpha</td>
        <td style="border:none;">z軸を中心としたデバイスの動き</td>
    </tr>
    <tr>
        <td style="border:none;">beta</td>
        <td style="border:none;">x軸を中心としたデバイスの動き</td>
    </tr>
    <tr>
        <td style="border:none;">gamma</td>
        <td style="border:none;">y軸を中心としたデバイスの動き</td>
    </tr>
</table>

DeviceMotionEventのAPIは以下の通り。

<table style="border:none;">
    <tr>
        <th style="border:none;">プロパティ名</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">acceleration</td>
        <td style="border:none;">DeviceAccelerationオブジェクト</td>
    </tr>
    <tr>
        <td style="border:none;">rotationRate</td>
        <td style="border:none;">DeviceRotationRateオブジェクト</td>
    </tr>
</table>


DeviceAccelerationのAPIは以下の通り。

<table style="border:none;">
    <tr>
        <th style="border:none;">プロパティ名</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">x</td>
        <td style="border:none;">西から東へ向かう方向の加速度</td>
    </tr>
    <tr>
        <td style="border:none;">y</td>
        <td style="border:none;">南から北へ向かう方向の加速度</td>
    </tr>
    <tr>
        <td style="border:none;">z</td>
        <td style="border:none;">地面から直立する方向の加速度</td>
    </tr>
</table>

DeviceRotationRateのAPIは以下の通り。

<table style="border:none;">
    <tr>
        <th style="border:none;">プロパティ名</td>
        <th style="border:none;">意味</td>
    </tr>
    <tr>
        <td style="border:none;">alpha</td>
        <td style="border:none;">画面またはキーボードから直立した軸に対する回転量</td>
    </tr>
    <tr>
        <td style="border:none;">beta</td>
        <td style="border:none;">画面またはキーボードの左から右へ向かう軸に対する回転量</td>
    </tr>
    <tr>
        <td style="border:none;">gamma</td>
        <td style="border:none;">画面またはキーボードの下から上に向かう軸に対する回転量</td>
    </tr>
</table>


