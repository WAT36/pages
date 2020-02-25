---
title: "ガウス関数(2次元)"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# ガウス関数(2次元)


{{< tabs "gauss2d" >}}
{{< tab "Python" >}}

ガウス関数  

<math>
    <mi>a</mi>
    <mi>exp</mi>
    <mrow>
        <mo>(</mo>
            <mo>-</mo>
            <mfrac>
                <mrow>
                    <msup>
                        <mrow>
                            <mi>(x</mi>
                            <mo>-</mo>
                            <mi>&mu;</mi>
                            <mn>)</mn>
                        </mrow>
                        <mn>2</mn>
                    </msup>
                </mrow>
                <mrow>
                    <msup>
                        <mi>&sigma;</mi>
                        <mn>2</mn>
                    </msup>
                </mrow>
            </mfrac>
        <mo>)</mo>
    </mrow>
</math>

において、入力xを2次元ベクトルとした時の場合を考える。(以下)  

<math>
<mi mathvariant="bold">x</mi>
<mo>=</mo>
<mfenced open="[" close="]"> 
    <mtable>
        <mtr> 
            <mtd>
                <msub>
                    <mi>x</mi>
                    <mn>0</mn>
                </msub>
            </mtd>
        </mtr> 
        <mtr>
            <mtd>
                <msub>
                    <mi>x</mi>
                    <mn>1</mn>
                </msub>
            </mtd>
        </mtr>
    </mtable> 
</mfenced>
</math>

この時、μも入力x<sub>0</sub>、x<sub>1</sub>の中心(平均)である要素μ<sub>0</sub>、μ<sub>1</sub>を持つベクトルを作成する。  

<math>
<mi mathvariant="bold">&mu;</mi>
<mo>=</mo>
<mfenced open="[" close="]"> 
    <mtable>
        <mtr> 
            <mtd>
                <msub>
                    <mi>&mu;</mi>
                    <mn>0</mn>
                </msub>
            </mtd>
        </mtr> 
        <mtr>
            <mtd>
                <msub>
                    <mi>&mu;</mi>
                    <mn>1</mn>
                </msub>
            </mtd>
        </mtr>
    </mtable> 
</mfenced>
</math>

また、分散(標準偏差)σに関しては、ベクトルの要素間の分散である**共分散行列**を用いる。  
今回の2変数の場合だと以下のようになる。

<math>
<mi mathvariant="bold">&Sigma;</mi>
<mo>=</mo>
<mfenced open="[" close="]"> 
    <mtable>
        <mtr> 
            <mtd>
                <msub>
                    <mi>&sigma;</mi>
                    <mn>00</mn>
                </msub>
            </mtd>
            <mtd>
                <msub>
                    <mi>&sigma;</mi>
                    <mn>01</mn>
                </msub>
            </mtd>
        </mtr> 
        <mtr>
            <mtd>
                <msub>
                    <mi>&sigma;</mi>
                    <mn>10</mn>
                </msub>
            </mtd>
            <mtd>
                <msub>
                    <mi>&sigma;</mi>
                    <mn>11</mn>
                </msub>
            </mtd>
        </mtr>
    </mtable> 
</mfenced>
</math>

σ<sub>ij</sub>はxの要素x<sub>i</sub>、x<sub>j</sub>の分散であり、σ<sub>ij</sub> = σ<sub>ji</sub> である。  

これらを利用し、2次元でのガウス関数は以下のようになる。

<math>
    <mi>y</mi>
    <mo>=</mo>
    <mi>a</mi>
    <mi>exp</mi>
    <mrow>
        <mo>{</mo>
            <mo>-</mo>
            <mfrac>
                <mrow>
                    <mn>1</mn>
                </mrow>
                <mrow>
                    <mn>2</mn>
                </mrow>
            </mfrac>
            <msup>
                <mrow>
                    <mo>(</mo>
                        <mi mathvariant="bold">x</mi>
                        <mo>-</mo>
                        <mi mathvariant="bold">&mu;</mi>
                    <mo>)</mo>
                </mrow>
                <mo>T</mo>
            </msup>
            <msup>
                <mi mathvariant="bold">&Sigma;</mi>
                <mn>-1</mn>
            </msup>
            <mrow>
                <mo>(</mo>
                    <mi mathvariant="bold">x</mi>
                    <mo>-</mo>
                    <mi mathvariant="bold">&mu;</mi>
                <mo>)</mo>
            </mrow>
        <mo>}</mo>
    </mrow>
</math>


{{< /tab >}}
{{< /tabs >}}


