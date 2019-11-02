---
title: "２つの数字のうち大きい方をとる"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# ２つの数字のうち大きい方をとる

複数の数値から一番大きい数値を取り出したい時の方法を示す。

{{< tabs "ascii" >}}
{{< tab "Java" >}}

Javaでは**java.lang.Math**クラス内にある**max()**メソッドがこの役割を果たす。
利用するにはjava.lang.Mathクラスをインポートする。

`public static int max(int a,int b)`

また、int型に限らず、double型、float型、long型などもオーバーロードとして定義されている。
無論だが、いずれの場合も利用するには引数、返り値の型は一致させておく必要がある。
ちなみに、引数は２つしか指定できないので、２値間での最大値しか測れない。
３つ以上の値で最大値を取りたい場合は、maxメソッドを入れ子にして利用するなどする。
使用例を以下に示す。(クラスはここではMain.javaとする)

```java
import java.lang.Math;
class Main{
	public static void main(String args[]){
		int a = 1;
		int b = 2;
		int c = 3;
		
		System.out.println(Math.max(a,b)); //a,bで大きい値
		System.out.println(Math.max(b,c)); //b,cで大きい値

        //a,bで大きい方とcで大きい値 -> a,b,cで最も大きい値
		System.out.println(Math.max(Math.max(a,b),c));
	}
}
```

実行後

```
$ java Main
2
3
3
```

{{< /tab >}}
{{< tab "Python" >}}

Pythonでは**max()**関数を利用する。


{{< /tab >}}
{{< /tabs >}}

