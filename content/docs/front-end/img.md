---
title: "画像・動画・音声"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# 画像・動画・音声

画像・動画・音声についての要素を述べる。

## img要素

img要素は画像を表示させたい時、及びそれが利用できない時に代わりに表示させるテキストを指定する要素である。

属性がいくつかあり、それらを利用する。

<table style="border:none;">
    <tr style="border:none;">
        <td style="border:none;">・</td>
        <td style="border:none;">src</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">表示する画像の相対パスまたはアドレス</td>
    </tr>
    <tr style="border:none;">
        <td style="border:none;">・</td>
        <td style="border:none;">alt</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">画像が利用できない場合に代わりに使用されるテキスト<br>(ブラウザによる)</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">width</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">幅(整数値)</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">height</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">高さ(整数値)</td>
    </tr>
</table>

使用例

```
<img src="/img/front-end/img.jpg" width="100" height="100">

<img src="/img/front-end/img.jpg" width="50" height="50">

<img src="/img/front-end/img.jpg" width="100" height="100" alt="宗谷岬、青空">
```

実行例

<hr>
<img src="/img/front-end/img.jpg" width="100" height="100">

<img src="/img/front-end/img.jpg" width="50" height="50">

<img src="/img/front-end/img.jpg" width="100" height="100" alt="宗谷岬、青空">
<hr>



## picture要素

picture要素はHTML5以降で追加された新しい要素で、複数のsource要素(後述)と一つのimg要素を取りまとめる要素である。これにより、最適なsource要素による画像、source要素が使えないブラウザではimg要素の画像が使われ、柔軟な画像の選定が行われる。

（使用例はsource要素のところを参照）

## source要素

source要素は、picture要素・video要素・audio要素の子要素として使用する要素で、複数記述、及び使用条件を指定することで、ブラウザに適した形で画像等を表示できる。


<table style="border:none;">
    <tr style="border:none;">
        <td style="border:none;">・</td>
        <td style="border:none;">media</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">画像の使用条件</td>
    </tr>
    <tr style="border:none;">
        <td style="border:none;">・</td>
        <td style="border:none;">srcset</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">候補画像等のパス</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">sizes</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">使用条件と画像の表示幅</td>
    </tr>
</table>

使用例

```
<picture>
    <source media="(min-width: 200em)" srcset="/img/front-end/img3.jpg" title="img3.jpg">
    <source media="(min-width: 100em)" srcset="/img/front-end/img2.jpg" title="img2.jpg">
    <img src="/img/front-end/img.jpg" width="50" height="50">
</picture>
```

実行例

<hr>
<picture>
    <source media="(min-width: 200em)" srcset="/img/front-end/img3.jpg" title="img3.jpg">
    <source media="(min-width: 100em)" srcset="/img/front-end/img2.jpg" title="img2.jpg">
    <img src="/img/front-end/img.jpg" width="50" height="50">
</picture>
<hr>



## video要素

video要素は、動画を再生するための要素である。

指定する属性は以下の通り。

<table style="border:none;">
    <tr style="border:none;">
        <td style="border:none;">・</td>
        <td style="border:none;">src</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">ファイルのアドレス・パス</td>
    </tr>
    <tr style="border:none;">
        <td style="border:none;">・</td>
        <td style="border:none;">controls</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">再生・停止ボタンを表示させる</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">autoplay</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">再生を自動で開始させる</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">loop</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">再生を繰り返す(ループ)</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">muted</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">デフォルトでミュート(音量0)にする</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">width</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">幅を指定する</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">height</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">高さを指定する</td>
    </tr>
</table>


例を以下に示す。

```
<video src="/img/front-end/IMG_3279.MOV.mp4" controls muted width="500" height="200" />
```

実行例

<hr>
<video src="/img/front-end/IMG_3279.MOV.mp4" controls muted width="500" height="200" />
<hr>

(ちなみにこの動画は私が学生時代に研究室の窓から外の吹雪を撮ったものである)


## audio要素

audio要素は音声を再生するための要素である。

基本的には、video要素から視覚的な内容を排除したものであり、使う属性もvideo要素とほとんど同じ。

<table style="border:none;">
    <tr style="border:none;">
        <td style="border:none;">・</td>
        <td style="border:none;">src</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">ファイルのアドレス・パス</td>
    </tr>
    <tr style="border:none;">
        <td style="border:none;">・</td>
        <td style="border:none;">controls</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">再生・停止ボタンを表示させる</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">autoplay</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">再生を自動で開始させる</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">loop</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">再生を繰り返す(ループ)</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">muted</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">デフォルトでミュート(音量0)にする</td>
    </tr>
</table>

先程の動画ファイルをaudio要素で表示させてみよう。

```
<audio src="/img/front-end/IMG_3279.MOV.mp4" controls />
```

実行例は以下の通り。

<hr>
<audio src="/img/front-end/IMG_3279.MOV.mp4" controls />
<hr>


## track要素

track要素はvideo要素やaudio要素の子要素として利用する要素で、字幕などの外部テキストトラックファイルを指定する場合に使用する要素である。

使用するテキストトラックファイルは、WebVTT形式(.vtt形式)またはTTML形式ファイルである。

指定する主な属性は以下の通り。

<table style="border:none;">
    <tr style="border:none;">
        <td style="border:none;">・</td>
        <td style="border:none;">src</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">ファイルのアドレス・パス</td>
    </tr>
    <tr style="border:none;">
        <td style="border:none;">・</td>
        <td style="border:none;">srclang</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">外部テキストファイルの言語</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">kind</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">外部テキストファイルをどのように使用するかの指定</td>
    </tr>
</table>

また、kind属性には以下の値を指定する。

<table style="border:none;">
    <tr style="border:none;">
        <td style="border:none;">・</td>
        <td style="border:none;">subtitles</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">音は聞こえるが理解できない人向けの字幕、映像に重ねて表示</td>
    </tr>
    <tr style="border:none;">
        <td style="border:none;">・</td>
        <td style="border:none;">captions</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">音が（明瞭に）聞こえない人向けの字幕、映像に重ねて表示</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">descriptions</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">映像が（明瞭には）見えない場合向けの解説、合成音声で読み上げる</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">chapters</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">映像のチャプターのタイトル、操作により一覧を表示</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">metadata</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">スクリプトから利用する事を想定したメタデータ</td>
    </tr>
</table>

先程の動画ファイルを利用して実行例を示す。

```
<video src="/img/front-end/IMG_3279.MOV.mp4" controls muted width="500" height="200" >
    <track default kind="captions"
           srclang="ja"
           src="/img/front-end/track.vtt">
</video>
```

ちなみに字幕として利用するvttファイル(track.vtt)は以下の通り。

```
WEBVTT

00:00:00.000 --> 00:00:15.000
これは字幕です。15秒まで表示されます。

00:00:15.000 --> 00:00:30.000
雪が降ってます。
```

表示例

<hr>
<video src="/img/front-end/IMG_3279.MOV.mp4" controls muted width="500" height="200" >
    <track default kind="captions"
           srclang="ja"
           src="/img/front-end/track.vtt">
</video>
<hr>


## embed要素

embed要素は、動画や音声などをプラグインを使って組み込む際に使う要素である。

src属性で外部コンテンツを読み込み、ブラウザに追加インストールされたプラグインでコンテンツを利用する。

よく使われるものとしては、.swfファイル(Flash)、.mpgファイル(MPEG)など。

<table style="border:none;">
    <tr style="border:none;">
        <td style="border:none;">・</td>
        <td style="border:none;">src</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">組み込むファイルのパス</td>
    </tr>
    <tr style="border:none;">
        <td style="border:none;">・</td>
        <td style="border:none;">type</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">組み込むデータの種類</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">width</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">幅</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">height</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">高さ</td>
    </tr>
</table>


## map要素

一つの画像に複数のリンクを設定することをイメージマップという。map要素はこのイメージマップを設定する時に使用する要素である。

具体的に画像のどの部分をどのリンクに対応させるかは、map要素の子要素として使う後述のarea要素で指定する。

map要素のname属性でイメージマップに名前を定義し、画像を定義しているimg要素の**usemap**属性でその名前を指定するとイメージマップを画像に適用できる。


## area要素

area要素は、イメージマップにおいて指定した領域を指定したリンク先に紐付ける要素である。

使用する主な属性は以下の通り。


<table style="border:none;">
    <tr style="border:none;">
        <td style="border:none;">・</td>
        <td style="border:none;">coords</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">領域の座標</td>
    </tr>
    <tr style="border:none;">
        <td style="border:none;">・</td>
        <td style="border:none;">shape</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">領域の形状</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">href</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">リンク先のアドレス</td>
    </tr>
</table>

ここで、shape属性で指定できる値は決まっており、以下の通りである。また、それに応じてcoords属性で指定するあたいも変わってくる。



<table style="border:none;">
    <tr>
        <td style="border:none;"></td>
        <td style="border:none;"><b>値</b></td>
        <td style="border:none;"></td>
        <td style="border:none;"><b>図形</b></td>
        <td style="border:none;"><b>coords属性に指定する値</b></td>
    </tr>
    <tr style="border:none;">
        <td style="border:none;">・</td>
        <td style="border:none;">rect</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">長方形</td>
        <td style="border:none;">左上のx座標,左上のy座標,右下のx座標,右下のy座標</td>
    </tr>
    <tr style="border:none;">
        <td style="border:none;">・</td>
        <td style="border:none;">circle</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">円</td>
        <td style="border:none;">円の中心のx座標,円の中心のy座標,半径</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">poly</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">多角形</td>
        <td style="border:none;">各座標をx座標、y座標の順に指定</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">default</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">画像全体</td>
        <td style="border:none;">(指定しない)</td>
    </tr>
</table>


使用例

```
<img src="/img/front-end/area.png" usemap="#top" width="100" height="100">

<map name="top">
    <area href="https://wat36.github.io/pages/" shape="rect" coords="0,0,100,50"></area>
    <area href="https://github.com/WAT36" shape="rect" coords="0,50,100,100"></area>
</map>
```

表示例（画像の上半分がこのブログのトップ、下半分は私のGithubへのリンク）

<hr>
<img src="/img/front-end/area.png" usemap="#top" width="100" height="100">

<map name="top">
    <area href="https://wat36.github.io/pages/" shape="rect" coords="0,0,100,50"></area>
    <area href="https://github.com/WAT36" shape="rect" coords="0,50,100,100"></area>
</map>
<hr>


## object要素

object要素は、画像や音声の他、様々な形式の外部データを組み込むための要素である。


<table style="border:none;">
    <tr style="border:none;">
        <td style="border:none;">・</td>
        <td style="border:none;">data</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">組み込むデータのアドレス</td>
    </tr>
    <tr style="border:none;">
        <td style="border:none;">・</td>
        <td style="border:none;">type</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">組み込むデータの種類</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">width</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">幅</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">height</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">高さ</td>
    </tr>
</table>


## param要素

param要素は、object要素における任意のパラメータ(属性)を指定する要素である。

object要素内では他の要素よりも前に配置させる。

<table style="border:none;">
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">name</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">パラメータ名</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">value</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">パラメータの値</td>
    </tr>
</table>
