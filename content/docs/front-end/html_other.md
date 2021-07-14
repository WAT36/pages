---
title: "その他の要素"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---


# その他の要素


その他の要素についてを述べる。


## figure要素

figure要素は、それが文書から参照される、自己完結型のコンテンツ(フローコンテンツ)であることを示す要素である。

この要素の中には、図やソースコードなどを入れる。

使用例

```
<figure id="fig">
    <img src="/img/front-end/img.jpg" width="100" height="100" alt="宗谷岬、青空">
</figure>
```

表示例

<hr>
<figure id="fig">
    <img src="/img/front-end/img.jpg" width="100" height="100" alt="宗谷岬、青空">
</figure>
<hr>


## figcaption要素

figcaption要素は、figure要素で示したコンテンツにキャプションを示すための要素である。

使用例


```
<figure id="fig">
    <figcaption>宗谷岬の交差点</figcaption>
    <img src="/img/front-end/img.jpg" width="100" height="100" alt="宗谷岬、青空">
</figure>
```

表示例

<hr>
<figure id="fig">
    <figcaption>宗谷岬の交差点</figcaption>
    <img src="/img/front-end/img.jpg" width="100" height="100" alt="宗谷岬、青空">
</figure>
<hr>


## details要素

details要素は、ディスクロージャーウィジェット(折りたたみ)を示すための要素である。

**open**属性を指定すると、最初から開かれた状態で表示される。

使用例

```
<details>
    <p>その１</p>
    <p>その２</p>
    <p>その３</p>
</details>
```

表示例

<hr>
<details>
    <p>その１</p>
    <p>その２</p>
    <p>その３</p>
</details>
<hr>

## summary要素

summary要素は、ディスクロージャーウィジェットにおける見出しを示すための要素である。summary要素で示された内容は、ディスクロージャーウィジェットが開いても開いてなくても表示される。

使用例

```
<details>
    <summary>リスト</summary>
    <p>その１</p>
    <p>その２</p>
    <p>その３</p>
</details>
```

表示例

<hr>
<details>
    <summary>リスト</summary>
    <p>その１</p>
    <p>その２</p>
    <p>その３</p>
</details>
<hr>


## iframe要素

iframe要素は、文書の中で別の文書を表示する領域(ブラウジングコンテキスト)を示す要素である。

使用する主な属性は以下の通り。

<table style="border:none;">
    <tr style="border:none;">
        <td style="border:none;">・</td>
        <td style="border:none;">src</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">表示させる文書のアドレス</td>
    </tr>
    <tr style="border:none;">
        <td style="border:none;">・</td>
        <td style="border:none;">srcdoc</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">表示させるHTMLデータ</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">name</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">表示させる領域の名前</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">width</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">横</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">height</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">縦</td>
    </tr>
</table>


使用例を以下に示す。

```
<iframe width="200" height="150">
</iframe>
```

表示例

<hr>
<iframe width="200" height="150">
</iframe>
<hr>



## hr要素

hr要素は区切りのための水平線を引く要素である。段落・話題・場面が変わるところなどで利用する。


使用例

```
<hr>
<hr>
<hr>
```

表示例

<hr>
<hr>
<hr>


## script要素

script要素は、文書内に実行できるコードを組み込むための要素である。

コードは要素内容として直接書くか、src属性にコードのアドレスを指定して読み込ませる。

例えば、HTMLコード内でJavascriptを適用させたい場合は、scriptタグを書きtype属性に```text/javascript```または```application/javascript```と指定し、内部にJavascriptコードを記載する。

外部ファイルを組み込ませたい場合は、src属性を書いてファイル名を指定する。

（以下例）

```html
・・・
<script type="text/javascript">
    //Javascriptコードを記載する
    //
</script>
・・・
<script src="組み込ませたい外部ファイル名">
・・・
```

<hr>

## noscript要素

noscript要素は、script要素で組み込んだコード(スクリプト)が無効であった場合に利用される要素である。

よって、コード(スクリプト)が有効なときには、この要素は実行されない。


## template要素

template要素は、その部分がコードによって挿入される部分であることを示す。



## canvas要素

canvas要素は、コードによって図を描画したいときに利用する要素である。

これとは別に描画を行うコード(JavaScriptなど)を用意し、それにより描画されたビットマップイメージが入る。

canvas要素が実行できない環境では、要素内容に指定した内容が表示される。

(以上、使用例はjsやれるようになったらやります・・・)