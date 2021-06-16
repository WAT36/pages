---
title: "ジェネレータ関数"
weight: 1
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: true
---

# ジェネレータ関数

**ジェネレータ関数**とは、呼び出されるたびにこtなる値を返す関数の事である。例としては乱数がある。

ジェネレータ関数が普通の関数と違うのは、前回の呼び出しで処理が戻された位置が保存されており、次の呼び出しでは前回の呼び出しで処理が戻された位置から処理を開始するところである。

各言語のジェネレータ関数についてを以下に述べる。

{{< tabs "field" >}}
{{< tab "Javascript" >}}


Javascriptで、ジェネレータ関数内でreturn文のように処理を戻すものが**yield文**である。

yield文を指定するとジェネレータ関数内で処理が止まり、次の呼び出しではその止まった位置から処理が始まる。

ジェネレータ関数で処理を開始するメソッドは **next()** である。

例

```javascript
function* generator(){
    //処理１
    console.log("1");
    yield;
    //処理２
    console.log("2");
    yield;
    //処理３
    console.log("3");
    yield;
}

var g = generator();

console.log("generator 1回目スタート");
g.next();
console.log("generator 2回目スタート");
g.next();
console.log("generator 3回目スタート");
g.next();
```

結果

```
generator 1回目スタート
1
generator 2回目スタート
2
generator 3回目スタート
3
```

{{< /tab >}}
{{< /tabs >}}
