---
title: "継承"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 継承

クラスを実装できる言語の大半は、他のクラスの構造を受け継ぎ、そこから新しい変数やメソッド(関数)等を付け足す形でクラスを定義することができる。  
これを**継承**という。  
クラスの継承の方法についてをここでは示す。  


{{< tabs "inheritance" >}}
{{< tab "Java" >}}

Javaでは・・
（作成中）

{{< /tab >}}
{{< tab "Python" >}}

Pythonでのクラスの継承の方法は以下の通り。  

```
class クラス名(継承元クラス名):
    //文
```

ここで定義したクラスは継承元クラスが持つ変数や関数を受け継ぐので、文中に定義しなくても参照が可能である。  
別クラスを継承したクラスに定義した変数や関数はそのクラスのみが持ち、継承元のクラスは利用できない。  

実行例を以下に示す。  

```python
>>> #Beverageクラス(飲み物)
>>> class Beverage():
...     price=0       
...     name=""        
...     def __init__(self,p,n):
...             self.price=p    
...             self.name=n     
...     def howmuch(self):  
...             return "This "+self.name+" is "+str(self.price)+" yen." 
... 
>>> 
>>> #Liquorクラス(アルコール飲料)、Beverageクラスを継承
>>> class Liquor(Beverage):
...     alcohol_content=100 
...     def __init__(self,p,n,a): 
...             self.price=p      
...             self.name=n  
...             self.alcohol_content=a
... 
>>> 
>>> orange_juice = Beverage(100,"orange juice")
>>> 
>>> screw_driver = Liquor(1000,"screw driver",15) 
>>> 
>>> #Beverageクラスのprice,nameは参照できる
>>> orange_juice.price
100
>>> orange_juice.name 
'orange juice'
>>> 
>>> #Beverageクラスはalcohol_contentは持ってないので、参照しようとするとエラーになる
>>> orange_juice.alcohol_content
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'Beverage' object has no attribute 'alcohol_content'
>>>
>>> #Beverageクラスのhowmuch関数は利用できる
>>> orange_juice.howmuch()
'This orange juice is 100 yen.'
>>>
>>> #LiquorクラスはBeverageクラスを継承しているので、変数price,nameを参照できる。
>>> screw_driver.price            
1000
>>> screw_driver.name             
'screw driver'
>>>
>>> #Liquorクラスはalcohol_contentを定義しているので、これも参照できる。
>>> screw_driver.alcohol_content  
15
>>> #LiquorクラスはBeverageクラスを継承しているので、関数howmuch()を利用できる。
>>> screw_driver.howmuch()        
'This screw driver is 1000 yen.'
>>>
```


{{< /tab >}}
{{< /tabs >}}




