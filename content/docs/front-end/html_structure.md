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
