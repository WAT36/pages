---
title: "break文"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# break文

ループを抜け出す際に用いるbreak文についてを示す。


{{< tabs "break" >}}
{{< tab "Java" >}}

ループ処理のfor文、while文において、処理の途中にbreakがあった場合、ループを途中で中断し、ループから抜け出してくれる。  
ループを何重にも重ねていた場合は、そのbreakがある一番内側のループにbreakが適用される。  

```java
class Main{
  public static void main(String args[]){

    for(int i=0;i<5;i++){
      //i>3になったらループ中断して抜け出す
      if(i>3){
        break;
      }
      //0..3までprint  それより上はbreakで中断されるためここには来ない
      System.out.println(i);
    }

    System.out.println();

    for(int i=0;i<3;i++){
      System.out.println(i);

      for(int j=0;j<3;j++){
        //j>1になったらループ中断して抜け出す　が、抜け出せるのはjのループだけ
        //iのループを抜け出したい時は、その階層内でbreakを設ける
        if(j>1){
          break;
        }

        //j=0..1までprintされる
        System.out.println(i+" "+j);
      }
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

0
0 0
0 1
1
1 0
1 1
2
2 0
2 1
```

ちなみに、switch文ではこのbreak文は必須である。  
break文がない場合、該当したcase文以下のcase文の処理が行われてしまうので注意。

実行例を以下に示す。

```java
class Main{
  public static void main(String args[]){
    int k=1;
    switch(k){
      case 1:
        System.out.println(1);
        //break;
      case 2:
        System.out.println(2);
        //break;
      default:
        System.out.println("default");
        //break;
    }

  }
}
```

実行結果

```
> java Main      
1
2
default
```

この例の場合、本当はcase 1の所の処理だけ行わせたいのだが、breakを置かない場合case 1の下、case 2やdefaultの処理も順に行ってしまう。switch文でbreakを設けるのはこれが理由。  

{{< /tab >}}
{{< tab "Python" >}}

break文の使い方はPythonもjavaと同じ。  
途中で中断したいfor,whileループの中に設定する。

```python
>>> for i in range(5): 
...     if(i>3):
...             break
...     print(i)
... 
0
1
2
3
>>>
>>> for i in range(3):
...     for j in range(3):
...             if(j>1):
...                     break
...             print(i,j) 
... 
0 0
0 1
1 0
1 1
2 0
2 1
>>>
```

{{< /tab >}}
{{< /tabs >}}





