---
title: "HTMLの全体構造"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# HTMLの全体構造

HTMLファイルの構造についてを述べる。

HTMLファイルは主に以下から構成される。

- DOCTYPE宣言（文書型宣言）
- html要素
 - head要素
 - body要素

大まかな記載は以下の通り。

```
<!DOCTYPE html>
<html>
    <head>
        <!-- 文書に関する情報 -->
    </head>
    <body>
        <!-- 表示させるコンテンツの情報 -->
    </body>
</html>
```

## DOCTYPE宣言

HTML5では実は必要なものではないそうだが、ブラウザの表示モードを「標準モード」にする目的で指定することになっている。

指定がない場合、通常は以下の通りに記入する。

```
<!DOCTYPE HTML>
```

## html要素

html要素は、HTML文書のルートとなる要素である。

他の全ての要素は、この要素内に記述しなければならない。

また、グローバル属性であるlang属性を指定して、その文書で使用されている言語の種類を示すことが推奨されている。

```
<!DOCTYPE html>
<html lang="ja>
    ・・・
</html>
```

## head要素

head要素は、HTML文書のメタデータを入れるための要素である。

大体は文書のタイトル(title要素)、また文書の文字コード(meta要素)をここで指定する。

### title要素

title要素は、HTML文書のタイトル(名前)を示す要素である。この要素は、必ずhead要素の中で指定する。

```
・・・
<head>
    <title>XXXのページ</title>
</head>
・・・
```

### meta要素

meta要素は、HTML文書の様々なメタデータを指定できる空要素である。

属性が色々あり、例えばcharset属性は文字コードを、name,content属性で指定したメタデータ名とそれに対する値を指定できる。

```
・・・
<head>
    <meta charset="UTF-8">
    <meta name="author" content="T.Wakasugi">
    <meta name="keywords" content="HTML programming meta">
</head>
・・・
```

### link要素

link要素は、このHTML文書に関連する外部ファイルやリソースを示すための要素である。

ここでいう関連するファイルやリソースというのは、HTML,CSS,RSSファイルなどのことを言う。

link要素にはhref属性とrel属性は必ず指定する必要がある。

|属性|指定する値|
|:---|:---|
|href|外部ファイルやリソースのアドレス|
|rel|当文書から見た外部ファイルやリソースの関係性を示すキーワード|
|rev|外部ファイルから見た当文書の関係性を示すキーワード|
|hrefflag|外部ファイルの言語(日本語や英語など)|

rel・rev属性に指定できる値としては以下の通り（一部）。

|指定する値|意味|
|:---|:---|
|author|執筆者|
|help|ヘルプ|
|icon|アイコン|
|license|著作権ライセンス|
|prev|前の文書|
|next|次の文書|
|stylesheet|適用するスタイルシート|

