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


## text-decoration関連のプロパティ

text-decoration競のプロパティは、文字に下線・上線・取消線を引いたり、及びその線種を指定するプロパティである。

プロパティ名・指定する値・意味は以下の通り。


<table style="border:none;">
    <tr>
        <td style="border:none;" rowspan="3">text-decoration-line</td>
        <td style="border:none;">underline</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">下線</td>
    </tr>
    <tr>
        <td style="border:none;">overline</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">上線</td>
    </tr>
    <tr>
        <td style="border:none;">line-through</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">取消線</td>
    </tr>
    <tr>
        <td style="border:none;">text-decoration-color</td>
        <td style="border:none;">(色を示す値)</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">線に色を付ける</td>
    </tr>
    <tr>
        <td style="border:none;" rowspan="5">text-decoration-style</td>
        <td style="border:none;">solid</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">実線</td>
    </tr>
    <tr>
        <td style="border:none;">double</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">二重線</td>
    </tr>
    <tr>
        <td style="border:none;">dotted</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">点線</td>
    </tr>
    <tr>
        <td style="border:none;">dashed</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">破線</td>
    </tr>
    <tr>
        <td style="border:none;">wavy</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">波線</td>
    </tr>
    <tr>
        <td style="border:none;">text-decoration</td>
        <td style="border:none;" colspan="3">上記で指定する値を空白区切りで区切ってまとめて指定</td>
    </tr>
</table>


使用例

```
<p>テキストに<span style="text-decoration:underline;">下線</span>を付けてみる</p>
```

表示例

<hr>
<p>テキストに<span style="text-decoration:underline;">下線</span>を付けてみる</p>
<hr>


## word-breakオプション

word-breakプロパティは、行の折り返しの設定を行うプロパティである。

設定できる値は以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">break-all</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">全ての文字で折り返しが行える</td>
    </tr>
    <tr>
        <td style="border:none;">keep-all</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">空白文字が連続しないところでは折り返されない</td>
    </tr>
    <tr>
        <td style="border:none;">normal</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">テキストの言語のルールに従い折り返される</td>
    </tr>
</table>

使用例

```
<p style="word-break:break-all">break-allbreak-allbreak-allbreak-allbreak-allbreak-allbreak-allbreak-allbreak-allbreak-allbreak-allbreak-allbreak-allbreak-allbreak-allbreak-allbreak-allbreak-allbreak-allbreak-allbreak-all</p>
<p style="word-break:keep-all" >keep-allkeep-allkeep-allkeep-allkeep-allkeep-allkeep-allkeep-allkeep-allkeep-allkeep-allkeep-allkeep-allkeep-allkeep-allkeep-allkeep-allkeep-allkeep-allkeep-allkeep-all</p>
```

表示例

<hr>
<p style="word-break:break-all">break-allbreak-allbreak-allbreak-allbreak-allbreak-allbreak-allbreak-allbreak-allbreak-allbreak-allbreak-allbreak-allbreak-allbreak-allbreak-allbreak-allbreak-allbreak-allbreak-allbreak-all</p>
<p style="word-break:keep-all" >keep-allkeep-allkeep-allkeep-allkeep-allkeep-allkeep-allkeep-allkeep-allkeep-allkeep-allkeep-allkeep-allkeep-allkeep-allkeep-allkeep-allkeep-allkeep-allkeep-allkeep-all</p>
<hr>


## hyphensプロパティ

hyphensプロパティは、ハイフネーションの設定を行うプロパティである。

ハイフネーションとは、語の途中でハイフン(-)を使って改行させる仕様のことである。

設定できる値は以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">manual</td>
        <td style="border:none;">・・</td>
        <td style="border:none;"><code>& shy;</code>の場所でのみハイフネーションが行われる</td>
    </tr>
    <tr>
        <td style="border:none;">none</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">ハイフネーションは一切行わない(<code>& shy;</code>も無視される)</td>
    </tr>
    <tr>
        <td style="border:none;">auto</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">言語に応じてブラウザが適当な箇所でハイフネーションを行う(lang属性による言語の指定が必要となる)</td>
    </tr>
</table>


使用例

```
<p style="hyphens:manual">au&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;to</p>
```

表示例

<hr>
<p style="hyphens:manual">au&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;toau&shy;to</p>
<hr>


## white-spaceプロパティ

white-spaceプロパティは、「連続する空白文字を１つにまとめるか」など、空白文字に関する設定を行うプロパティである。

設定できる値と意味は以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">normal</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">半角スペース・改行・タブを一つの半角スペースにまとめる。幅が広くなった場合、行を折り返す。</td>
    </tr>
    <tr>
        <td style="border:none;">nowrap</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">半角スペース・改行・タブを一つの半角スペースにまとめる。幅が広くなっても行は折り返さない。</td>
    </tr>
    <tr>
        <td style="border:none;">pre</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">半角スペース・改行・タブはまとめず。入力した通りに表示される。幅が広くなっても行は折り返さない。</td>
    </tr>
    <tr>
        <td style="border:none;">pre-wrap</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">半角スペース・改行・タブはまとめず。入力した通りに表示される。幅が広くなった場合、行を折り返す。</td>
    </tr>
</table>

使用例

```
<p style="white-space:normal"  >  あ    い  う  え  お  か  き  く  け  こ  </p>
<p style="white-space:pre-wrap">  あ    い  う  え  お  か  き  く  け  こ  </p>
```

表示例

<hr>
<p style="white-space:normal"  >  あ    い  う  え  お  か  き  く  け  こ  </p>
<p style="white-space:pre-wrap">  あ    い  う  え  お  か  き  く  け  こ  </p>
<hr>



## text-alignプロパティ

text-alignプロパティは、要素の行揃えを設定するプロパティである。


設定できる値と意味は以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">left</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">左揃え</td>
    </tr>
    <tr>
        <td style="border:none;">right</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">右揃え</td>
    </tr>
    <tr>
        <td style="border:none;">center</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">中央揃え</td>
    </tr>
    <tr>
        <td style="border:none;">justify</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">両端揃え</td>
    </tr>
</table>

使用例

```
<p style="text-align:left"   >あいうえおかきくけこさしすせそ</p>
<p style="text-align:right"  >あいうえおかきくけこさしすせそ</p>
<p style="text-align:center" >あいうえおかきくけこさしすせそ</p>
```

表示例

<hr>
<p style="text-align:left"   >あいうえおかきくけこさしすせそ</p>
<p style="text-align:right"  >あいうえおかきくけこさしすせそ</p>
<p style="text-align:center" >あいうえおかきくけこさしすせそ</p>
<hr>


## vertical-alignプロパティ

vertical-alignプロパティは、行の中での文字の縦方向の揃え位置を設定するプロパティである。

設定できる値と意味は以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">baseline</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">親要素(アルファベット)のベースラインに合わせる</td>
    </tr>
    <tr>
        <td style="border:none;">top</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">上揃え</td>
    </tr>
    <tr>
        <td style="border:none;">middle</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">中央揃え</td>
    </tr>
    <tr>
        <td style="border:none;">bottom</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">下揃え</td>
    </tr>
    <tr>
        <td style="border:none;">super</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">上付き文字の位置に揃える</td>
    </tr>
    <tr>
        <td style="border:none;">sub</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">下付き文字の位置に揃える</td>
    </tr>
</table>


使用例

```
<div>
<span style="font-size:30px">a</span>
<span style="font-size:10px;vertical-align:baseline">bcde</span>
<span style="font-size:10px;vertical-align:top">fghi</span>
<span style="font-size:10px;vertical-align:middle">jklm</span>
<span style="font-size:10px;vertical-align:bottom">nopq</span>
</div>
```

表示例

<hr>
<div>
<span style="font-size:30px">a</span>
<span style="font-size:10px;vertical-align:baseline">bcde</span>
<span style="font-size:10px;vertical-align:top">fghi</span>
<span style="font-size:10px;vertical-align:middle">jklm</span>
<span style="font-size:10px;vertical-align:bottom">nopq</span>
</div>
<hr>


## line-heightプロパティ

line-heightプロパティは、行間を設定するプロパティである。

設定できる値と意味は以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">数値(単位なし)</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">この数値とフォントサイズを掛けた値が行間になる</td>
    </tr>
    <tr>
        <td style="border:none;">数値(単位px)</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">pxの長さが行間になる</td>
    </tr>
    <tr>
        <td style="border:none;">パーセンテージ</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">フォントサイズに対するパーセンテージが行間になる</td>
    </tr>
    <tr>
        <td style="border:none;">normal</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">ブラウザが妥当とする行間に設定する</td>
    </tr>
</table>

使用例

```
<p style="line-height:100px">
あいうえお<br>
かきくけこ<br>
さしすせそ<br>
たちつてと<br>
なにぬねの<br>
</p>
```

表示例

<hr>
<p style="line-height:100px">
あいうえお<br>
かきくけこ<br>
さしすせそ<br>
たちつてと<br>
なにぬねの<br>
</p>
<hr>


## text-indentプロパティ

text-indentプロパティは、要素の１行目のインデントを設定するプロパティである。

設定できる値と意味は以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">数値(単位px)</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">pxの値に応じてインデントされる</td>
    </tr>
    <tr>
        <td style="border:none;">パーセンテージ</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">幅に対するパーセンテージの分だけ</td>
    </tr>
</table>

使用例

```
<p style="text-indent:10px">あいうえお<p>
<p style="text-indent:20px">かきくけこ<p>
<p style="text-indent:30px">さしすせそ<p>
<p style="text-indent:5%">たちつてと<p>
<p style="text-indent:10%">なにぬねの<p>
<p style="text-indent:15%">はひふへほ<p>
```

表示例

<hr>
<p style="text-indent:10px">あいうえお<p>
<p style="text-indent:20px">かきくけこ<p>
<p style="text-indent:30px">さしすせそ<p>
<p style="text-indent:5%">たちつてと<p>
<p style="text-indent:10%">なにぬねの<p>
<p style="text-indent:15%">はひふへほ<p>
<hr>

## letter-spacingプロパティ

letter-spacingプロパティは、文字の間隔を設定するプロパティである。

設定できる値と意味は以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">数値(単位px)</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">pxの値に応じて文字間隔が設定される</td>
    </tr>
    <tr>
        <td style="border:none;">normal</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">標準の間隔にする</td>
    </tr>
</table>

使用例

```
<p style="letter-spacing:10px">あいうえお<p>
<p style="letter-spacing:20px">かきくけこ<p>
```

表示例

<hr>
<p style="letter-spacing:10px">あいうえお<p>
<p style="letter-spacing:20px">かきくけこ<p>
<hr>


## word-spacing プロパティ

word-spacingプロパティは、単語の間隔を設定するプロパティである。


設定できる値と意味は以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">数値(単位px)</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">pxの値に応じて文字間隔が設定される</td>
    </tr>
    <tr>
        <td style="border:none;">normal</td>
        <td style="border:none;">・・</td>
        <td style="border:none;">標準の間隔にする</td>
    </tr>
</table>

使用例

```
<p style="word-spacing:10px">I do my best.<p>
<p style="word-spacing:20px">I will pass HTML5 Proffesinal Certification examination.<p>
```

表示例

<hr>
<p style="word-spacing:10px">I do my best.<p>
<p style="word-spacing:20px">I will pass HTML5 Proffesinal Certification examination.<p>
<hr>


