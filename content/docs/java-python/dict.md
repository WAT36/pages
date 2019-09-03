---
title: "Dict"
date: 2019-09-03T23:05:48+09:00
---

# 辞書、Map

|説明|Java|Python||
|:---|:---|:---|:---|
|||||
|辞書（Map)|Map<String,String> a = new HashMap<String,String>();<br>(String,Stringの例)|dict = {}<br>||
|辞書(Map)に要素を置く|(Map).put(キー,値)|辞書[キー] = 要素||
|辞書(Map)からキーを指定して要素取得|(Map).get(キー)|**辞書[キー]**<br>または<br>**辞書.get(key[,default])**<br>（defaultはキーがない場合のデフォルト値）||
|辞書(Map)から要素削除||辞書.pop(キー)<br>※全削除するなら↓<br>辞書.clear()||
|辞書(Map)から最大のキーを取得||max(辞書)||
|辞書(Map)から最小のキーを取得||min(辞書)||
|辞書(Map)から最大の値を取得||max(辞書.values())||
|辞書(Map)から最小の値を取得||min(辞書.values())||
|辞書(Map)から最大の値をとるキーを取得||max(辞書,key=辞書.get)||
|辞書(Map)から最小の値をとるキーを取得||min(辞書,key=辞書.get)||
|辞書(Map)からキーのリストを取得||**辞書.keys()**<br>（dict_keys型で取得。全てのキーを順に取るには<br>**for v in 辞書.keys()**）||
|辞書(Map)から値のリストを取得||**辞書.values()**<br>（dict_values型で取得。全ての値を順に取るには<br>**for i in 辞書.values()**）||
|||||
