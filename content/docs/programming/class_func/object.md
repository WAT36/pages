---
title: "オブジェクト(Javascript)"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# オブジェクト(Javascript)

Javascriptのオブジェクトについて。

Javascriptでは、オブジェクトと呼ばれる、C言語などの構造体のようなデータ構造が存在する。

ここではそれについて記載する。

## オブジェクトの定義

Javascriptでのオブジェクトは、以下のような方法で記載する。

記法

```
var 変数名 = {
    (key名1) : (value名1),
    (key名2) : (value名2),
    ・・・
}
```

このように、キーと値のセットを複数連ねたような構造になる。

ちなみに、オブジェクトではこのキーと値のセットのことを**プロパティ**と呼んでいる。

<hr>

## プロパティの書き換え

オブジェクト中のプロパティの値を書き換える方法についてを述べる。

Javascriptでのオブジェクトのプロパティの書き換えは、以下のような記法で行う。


```
(オブジェクトの変数名).(変更したいプロパティのキー) = (書き換えたい値);
```

<hr>

## プロパティの追加

オブジェクトにプロパティを追加する方法についてを述べる。

Javascriptでのオブジェクトのプロパティの追加は、以下のような記法で行う。


```
(オブジェクトの変数名).(追加したいプロパティのキー) = (追加したい値);
```

要はプロパティの書き換えと同じ。

<hr>

## プロパティの削除

オブジェクト中のプロパティを削除するには、特殊演算子の**delete**を利用する。

```javascript
delete (オブジェクトの変数名).(削除したいプロパティ名)
```

<hr>

## thisキーワード

**this**キーワードは、オブジェクト内でオブジェクトのプロパティを参照するときに用いる。

但し、オブジェクトを参照するのは、thisがメソッドとして使用された場合に限るので注意。

```
var 変数名 = {
    (key名1) : (value名1),
    (key名2) : (value名2),
    ・・・
    (key名) : function(){
        //メソッド
        this.key名1  //これでvalue名1が参照できる
    }
}
```

<hr>

## セッターの設定(set演算子)

**set**演算子は、擬似プロパティを設定する演算子で、プロパティが呼び出された時に呼び出す関数を設定する演算子である。

これを利用して、オブジェクトのプロパティに値を設定しようとした時に、設定した関数を呼び出してプロパティに値を設定する事が行える。

```javascript
//例
var obj = {
    set setAge(age){
        this.age = age;
        this.category = (age >= 20) ? '大人' : '小人';
    }
}

obj.setAge = 18
console.log(obj);
```

結果

```
{age: 18, category: "小人"}
```

<hr>

## ゲッターの設定(get演算子)

**get**演算子は、擬似プロパティを取得する演算子で、setと同様にプロパティが呼び出された時に呼び出す関数を設定する演算子である。

関数には、オブジェクトのプロパティを返すように設定する。このようにする事で、プロパティを取得することが可能になる。

```javascript
//例
var obj = {
    set setAge(age){
        this.age = age;
        this.category = (age >= 20) ? '大人' : '小人';
    },

    get getAge(){
        return this.age;
    }
}

obj.setAge = 18
console.log(obj.getAge);
```

結果

```
18
```

## プロパティの存在確認(in演算子)

指定したプロパティがオブジェクト内に存在するかを確認したいときは、**in**演算子を利用する。

```javascript
//例
var obj = {
    set setAge(age){
        this.age = age;
        this.category = (age >= 20) ? '大人' : '小人';
    },

    get getAge(){
        return this.age;
    }
}

console.log('setAge' in obj);
console.log('a' in obj);
```

結果

```
true
false
```
