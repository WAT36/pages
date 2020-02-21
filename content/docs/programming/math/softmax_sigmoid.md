---
title: "シグモイド関数とソフトマックス関数"
weight: 1
# bookFlatSection: false
# bookShowToC: true
bookToc: false
---

# シグモイド関数とソフトマックス関数

シグモイド関数とソフトマックス関数は類似しているところがある。  

2変数(x<sub>0</sub>、x<sub>1</sub>)の時のソフトマックス関数(の一つ)は以下の通りになる。  

<math>
    <mfrac>
        <mrow>
            <msup>
                <mi>e</mi>
                <mn>
                    <mrow>
                        <msub>
                            <mi>x</mi>
                            <mn>0</mn>
                        </msub>
                    </mrow>
                </mn>
            </msup>
        </mrow>
        <mrow>
            <msup>
                <mi>e</mi>
                <mn>
                    <mrow>
                        <msub>
                            <mi>x</mi>
                            <mn>0</mn>
                        </msub>
                    </mrow>
                </mn>
            </msup>
            <mo>+</mo>
             <msup>
                <mi>e</mi>
                <mn>
                    <mrow>
                        <msub>
                            <mi>x</mi>
                            <mn>1</mn>
                        </msub>
                    </mrow>
                </mn>
            </msup>
        </mrow>
    </mfrac>
</math>

分母分子にe<sup>-x<sub>0</sub></sup>を掛けると  

<math>
    <mfrac>
        <mrow>
            <mn>1</mn>
        </mrow>
        <mrow>
            <mn>1</mn>
            <mo>+</mo>
            <msup>
                <mi>e</mi>
                <mn>
                    <mrow>
                        <mo>-(</mo>
                        <msub>
                            <mi>x</mi>
                            <mn>0</mn>
                        </msub>
                        <mo>-</mo>
                        <msub>
                            <mi>x</mi>
                            <mn>1</mn>
                        </msub>
                        <mo>)</mo>
                    </mrow>
                </mn>
            </msup>
        </mrow>
    </mfrac>
</math>

となり、ここでx = x<sub>0</sub> - x<sub>1</sub> とおくとシグモイド関数となる。

<math>
    <mfrac>
        <mrow>
            <mn>1</mn>
        </mrow>
        <mrow>
            <mn>1</mn>
            <mo>+</mo>
            <msup>
                <mi>e</mi>
                <mn>-x</mn>
            </msup>
        </mrow>
    </mfrac>
</math>

つまりは2変数のソフトマックス関数の入力x<sub>0</sub>、x<sub>1</sub>の差を新たな変数xとして表したのがシグモイド関数である。  
シグモイド関数を他変数に拡張したものがソフトマックス関数となる。  


