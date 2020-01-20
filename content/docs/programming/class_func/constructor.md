---
title: "コンストラクタ(\_\_init\_\_)"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# コンストラクタ(\_\_init\_\_)

クラスのコンストラクタについてを書く。  
コンストラクタとはクラスのインスタンスを作成した時に、そのインスタンスで最初に実行される関数である。主に初期化のために使われる。  
これも言語により呼び名が違うので注意。  


{{< tabs "constructor" >}}
{{< tab "Java" >}}

Javaでは、クラス内でそのクラス名と同じ名前のメソッドを定義した時、それがコンストラクタになる。    
引数を変えれば、多重定義（オーバーロード）でいくらでも定義できる。  
ただし、コンストラクタを定義したら、インスタンス生成時に設定する引数はそのコンストラクタと同じでなければならない。  
因みにコンストラクタは定義しなくても良い。その場合インスタンス生成時に設定する引数は無しでないといけない。  

使用例を以下に示す。  

```java
class Car{

  String name = null;
  String number = null;
  String owner = null;

  public Car(String carname,String carnumber,String carowner) {
    this.name = carname;
    this.number = carnumber;
    this.owner = carowner;
  }
}

class Main{
  public static void main(String args[]){

    Car car1 = new Car("lexus","100-1010","ai-ueo");
    Car car2 = new Car("carrola","200-2020","kaki-kukeko");

    System.out.println("Car1:"+car1.name+" "+car1.number+" "+car1.owner);
    System.out.println("Car2:"+car2.name+" "+car2.number+" "+car2.owner);
  }
}
```

実行結果
```
> java Main
Car1:lexus 100-1010 ai-ueo
Car2:carrola 200-2020 kaki-kukeko
```

{{< /tab >}}
{{< tab "Python" >}}

Pythonでは　**\_\_init()\_\_** という関数がクラスのコンストラクタの役目を果たす。   
クラスのインスタンス生成後、真っ先にこの関数\_\_init\_\_が実行される。  
大体はインスタンス変数を設定するために利用されることが多い。そのときは\_\_init\_\_の引数に、変数に設定したい値に加えて**self**を追加することを忘れずに行う。  

実行例を以下に示す。  

```python
>>> 
>>> class Car:
...     def __init__(self,carname,carnumber,carowner):
...             self.name=carname
...             self.number=carnumber
...             self.owner=carowner
... 
>>> car1 = Car("lexus","100-1010","ai-ueo") 
>>> car2 = Car("carrola","200-2020","kaki-kukeko") 
>>> 
>>> [car1.name,car1.number,car1.owner]  
['lexus', '100-1010', 'ai-ueo']
>>> [car2.name,car2.number,car2.owner] 
['carrola', '200-2020', 'kaki-kukeko']
>>>
```

{{< /tab >}}
{{< /tabs >}}



