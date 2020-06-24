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

