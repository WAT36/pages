---
title: "変数を宣言する"
weight: 1
# bookFlatSection: false
# bookShowToC: true
categories: [ "Java", "Python","Swift"]
bookToc: false
---

# 変数を宣言する

変数を宣言する方法についてを述べる。

{{< tabs "type" >}}
{{< tab "Java" >}}

Javaでの変数の宣言は以下の通り。

```
(データ型) (変数名);
(変数名) = (値);

// または

(データ型) (変数名) = (値);
```

Javaは静的型付き言語のため、変数の宣言時に設定できる値の型を指定してやる必要がある。

そのため、変数には指定されたデータ型の値しか格納することはできない。(継承等の場合を除く)


例

```java
int a = 3;

int b;
b = 2;
```

{{< /tab >}}
{{< tab "Python" >}}

Pythonでは
{{< /tab >}}
{{< tab "Swift" >}}

Swiftでは**var**キーワードを用いて以下の様に表現する。

```
var (変数名):(型名)
```

Swiftは静的型付き言語(コンパイルなどの実行前の段階で、変数の型を決定する言語)のため、記載時の段階で変数に入れられる型を決める必要がある。

{{< /tab >}}
{{< /tabs >}}
