---
title: "標準エラー出力"
date: 2019-10-12T17:25:47+09:00
bookToc: false
---

# 標準エラー出力

標準エラー出力について。


{{< tabs "standard_error_output" >}}
{{< tab "Java" >}}

クラスはここではMain.javaとする

```java
class Main{
    public static void main(String args[]){
        //出力後、改行したい時
        System.err.println(変数もしくはデータ);

        //出力後、改行したくない時
        System.err.print(変数もしくはデータ);
    }
}
```

基本標準出力の時と同じ。<br>
ただし、エラー出力はjavaの場合例外処理を受け取ったときに利用するため、そのときに出たエラーメッセージを出力するのが普通。

{{< /tab >}}
{{< tab "Python" >}}

```python
import sys
print(x,file=sys.stderr) # xを画面にエラー出力する
```

Pythonでエラー出力を扱うにはまずsysモジュールをインポートし、<br>
print()のfileパラメータに **sys.stderr** を指定する。

{{< /tab >}}
{{< /tabs >}}
