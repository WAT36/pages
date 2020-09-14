---
title: "多次元配列"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# 多次元配列

多次元配列とは、配列の中に同じ長さの配列を複数含ませたデータ構造のことである。

{{< tabs "array" >}}
{{< tab "Java" >}}

Javaにおいて、例として二次元配列を設定するには以下の形式で宣言する。

```
データ型[][] 配列名 = new データ型[要素数][要素数];
```

配列の次元数を増やしたい場合は、かっこ[]の数をその数になるように増やして設定する。

配列への値の代入及び取得は、同様にインデックスを指定して行う。ただし、次元の数に注意する。

ここでは、使用例を以下に記載する。


```java
class Main{
    public static void main(String args[]){
        int[][] table = new int[3][4];

        for(int i=0;i<table.length;i++){
            for(int j=0;j<table[i].length;j++){
                table[i][j] = i+j;
                System.out.print(table[i][j]+" ");
            }
            System.out.println();
        }
    }
}
```

実行結果

```
$ java Main
0 1 2 3 
1 2 3 4 
2 3 4 5 
```


{{< /tab >}}
{{< tab "Javascript" >}}

Javascriptでは以下の形式で配列を宣言する。Javaのような要素数の指定は不要である。

```
var 配列名 = [(値、カンマ区切りで複数入力可)]
```

配列への値の代入及び取得は、Javaと同じようにインデックスを指定して行う。

```
配列名[インデックス] = 値;
変数 = 配列名[インデックス];
```

{{< /tab >}}
{{< /tabs >}}

