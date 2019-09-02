---
title: "Integer"
date: 2019-09-03T08:02:46+09:00
---

# 数値

|説明|Java|Python||
|:---|:---|:---|:---|
|数値を文字列に変換する|String.valueOf(数値)|str(数値)||
|数字の頭をゼロ詰して表示する|**String.format("03d",数値)**<br>（ゼロ詰して３桁で表示する時の例）|||
|数値を１６進数にして表示する||hex(数値)||
|階乗の計算||import math<br>math.factorial(数値)||
|絶対値|Math.abs(数値)|abs(数値)||
|２つの数字のうち大きい方|Math.max(数値、数値)|max(数値、数値・・)<br>幾つでも可||
|２つの数字のうち小さい方|Math.min(数値、数値)|min(数値、数値・・)<br>幾つでも可||
|円周率(π)||import numpy as np<br>**np.pi**||
|常用対数(底10)|Math.log10()|import math<br>math.log10(数値)||
|対数(底2)||import math<br>math.log2(数値)||
|||||
|小数点切り下げ|Math.floor(数値)|import math<br>math.floor(数値)<br><hr><br>また、割り算の時は<br>a = b **//** c<br>とすれば割り算と同時に切り下げも行う||
|小数点切り上げ|Math.ceil(数値)|import math<br>math.ceil(数値)<br><hr><br>また、割り算の時は<br>a =**- (-b // c)**<br>とすれば割り算と同時に切り下げも行う||
|二進数で表示||bin(10進数の数値)||
|二進数で表示した時の長さ||数値.bit_length()||
|８進数で表示||oct(10進数の数値)||
|１６進数で表示||hex(10進数の数値)||
|||||
|xとyの論理和(OR)をとる||x ｜ y||
|xとyの論理積(AND)をとる||x & y||
|xとyの排他的論理和(XOR)をとる||x ^ y||
|３項演算子|int a = (条件式) ? (正のとき入れる値) : (負のとき入れる値)|a = (正のとき入れる値) if (条件式) else (負のとき入れる値)||
|||||
