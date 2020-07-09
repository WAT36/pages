---
title: "CSSでの色"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# CSSでの色の表現

CSSでの色の表現について述べる。


## 16進数の値

方法の一つとして、#(シャープ)と16進数6桁の値で色を表現する方法がある。

6桁の内、上2桁をR(赤),中2桁をG(緑),下2桁をB(青)として、それぞれ0x00~0xff(255)の値で表現する。

例えば、RGB値が10進数で0,0,255の場合は、

```
#0000ff
```

と示すことができる。


## 色を示すキーワード

16進数による数値でなくとも、基本的な色を使いたい場合はその色を示すキーワードを指定することで、その色を使用できる。

キーワードの例は以下のとおり。


<table>
    <tr>
        <th>キーワード</th>
        <th>色</th>
        <th>16進数の値</th>
    </tr>
    <tr>
        <td>white</td>
        <td style="background-color:white">　　</td>
        <td>#ffffff</td>
    </tr>
    <tr>
        <td>black</td>
        <td style="background-color:black">　　</td>
        <td>#000000</td>
    </tr>
    <tr>
        <td>gray</td>
        <td style="background-color:gray">　　</td>
        <td>#808080</td>
    </tr>
    <tr>
        <td>red</td>
        <td style="background-color:red">　　</td>
        <td>#ff0000</td>
    </tr>
    <tr>
        <td>green</td>
        <td style="background-color:green">　　</td>
        <td>#00ff00</td>
    </tr>
    <tr>
        <td>blue</td>
        <td style="background-color:blue">　　</td>
        <td>#0000ff</td>
    </tr>
    <tr>
        <td>yellow</td>
        <td style="background-color:yellow">　　</td>
        <td>#ffff00</td>
    </tr>
    <tr>
        <td>fuchsia</td>
        <td style="background-color:fuchsia">　　</td>
        <td>#ff00ff</td>
    </tr>
    <tr>
        <td>aqua</td>
        <td style="background-color:aqua">　　</td>
        <td>#00ffff</td>
    </tr>
</table>

