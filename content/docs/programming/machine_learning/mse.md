---
title: "平均二乗誤差"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# 平均二乗誤差

前述の[直線モデル]({{< relref "/docs/programming/machine_learning/linear_model.md" >}})にて、データに応じた最適なw<sub>0</sub>,w<sub>1</sub>を決めれば最適な関係式が得られると書いたが、
どのようにして最適なw<sub>0</sub>,w<sub>1</sub>を求めれば良いのか？  


関係式が最適になるようにするには、入力値に対する実際の結果と関係式による出力結果との差（誤差）が小さくなるようにすればよい。  

前述に倣い、入力をx<sub>i</sub>、実際の結果をt<sub>i</sub>、関係式による出力結果をy<sub>i</sub> (= w<sub>0</sub> x<sub>i</sub> + w<sub>1</sub> )(i = 1,2,・・・,n)  とすると、それぞれの誤差は  

<math>
<mo>|</mo>
<msub>
<mi>y</mi>
<mi>i</mi>
</msub>
<mo>-</mo>
<msub>
<mi>t</mi>
<mi>i</mi>
</msub>
<mo>|</mo>
</math>

となる。  
このままやってもよいのだが、計算の簡略化[^1]のために、この誤差の2乗をとり、さらに全てのiにおける平均を取ると以下のような値になる。

<math display='block'>
    <mfrac>
        <mn>1</mn>
        <mi>N</mi>
    </mfrac>
    <munderover>
        <mo>&Sum;</mo>
        <mrow><mi>i</mi><mo>=</mo><mi>0</mi></mrow>
        <mi>N</mi>
    </munderover>
    <msup>
        <mrow>
            <mi>(</mi>
            <msub>
                <mi>y</mi>
                <mi>i</mi>
            </msub>
            <mo>-</mo>
            <msub>
                <mi>t</mi>
                <mi>i</mi>
            </msub>
            <mi>)</mi>
        </mrow>
        <mn>2</mn>
    </msup>
</math>

この値を**平均二乗誤差**(mean square error)といい、この値がなるべく小さくなるようなw<sub>0</sub>,w<sub>1</sub>を求めることを考える。



[^1]: 誤差の二乗を取る理由は諸説あるが、ほとんどはこの理由（らしい）。もちろん2乗せず絶対値のまま計算してもよい。

