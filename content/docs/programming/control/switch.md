---
title: "switch文"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# switch文

switch文は一つの式の結果から多くの処理に分岐させたいときに用いる。  
ここではそのswitch文についてを示す。

{{< tabs "switch" >}}
{{< tab "Java" >}}

Javaでのswitch文での記法は以下の通り。  

```
switch (式) {
    case 定数１:
        //式の結果が定数１に一致したときはここの処理が実行
        break;
    case 定数２：
        //式の結果が定数２に一致したときはここの処理が実行
        break;
    ・・・
    ・・・
    default:
        //どのcaseにも一致しなかった場合はこの処理が実行
        break;
}
```

case,default後の処理の最後には必ず**break**を書く。書かないとその後ろのcase文の処理も実行してしまう。  


```java
import java.util.Random;

class Main{
  public static void main(String args[]){

    Random random = new Random();
    int val = random.nextInt(3); //0~2でランダムに数値選出
    System.out.print(val + ": ");

    switch(val){
      case 2:
        System.out.println("大吉");
        break;
      case 1:
        System.out.println("中吉");
        break;
      default:
        System.out.println("吉");
        break;
    }

  }
}
```

実行結果

```
$ java Main
0: 吉
$ java Main
2: 大吉
```

{{< /tab >}}
{{< tab "Python" >}}

Pythonには**switch文が存在しない**。  

そのためif-elseなどで条件分岐を実装する。

{{< /tab >}}
{{< /tabs >}}



