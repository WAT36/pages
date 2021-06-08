---
title: "while文"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# while文

繰り返し処理を行う制御構文の一つ、while文について各言語での利用法を示す。  

{{< tabs "while" >}}
{{< tab "Java" >}}

Javaでの記法は以下の通り。

```
while(条件式){
    //処理
}
```

上記におけるフローは以下の通り。  

1. 条件式を実行しtrueなら3,falseなら4に行く
2. while文の中身の処理が実行される。
3. 1.に戻る
4. 終了する

while文の条件式は必ずtrueかfalseを返すような式にする。  
処理の関係上、条件式がずっとtrueになるような処理にさせると無限ループとなり、実行が終わらなくなるので注意。  

実行例を以下に示す。  

```java
class Main{
  public static void main(String args[]){

    int i=0;
    while(i<5){
      System.out.println(i);
      i++; //iに1を足す これがないと無限ループ
    }
  }
}
```

実行結果

```
> java Main
0
1
2
3
4
```

{{< /tab >}}
{{< tab "Python" >}}

Pythonでの記法は以下の通り。

```
while 条件式:
    #処理
    ・・・
```

条件式がTrueである限り、while文以下の処理を実行し続ける。

実行例を以下に示す。

```python
>>> i=0   
>>> while i<5:
...     print(i)
...     i+=1
... 
0
1
2
3
4
>>>
```

{{< /tab >}}
{{< tab "Javascript" >}}

Javascriptでの記法は以下の通り。

```javascript
while(条件){
    //条件が真だった場合に実行される処理
    ・・・
}
```

条件式がtrueである限り、while文内の処理を実行し続ける。

実行例を以下に示す。

```javascript
var i=0;
while(i<5){
  console.log(i);
  i+=1
}
```

結果

```
0
1
2
3
4
```

{{< /tab >}}
{{< /tabs >}}




