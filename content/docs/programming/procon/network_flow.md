---
title: "ネットワークフロー"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# ネットワークフロー

グラフにおける最大流・最小流問題についてを述べる。

以下に例題を示す。

```

ネットワーク上の2台のコンピュータS,Tがあり、SからTにデータを送りたいとする。
このネットワークには全部でN台のコンピュータがあり、いくつかのコンピュータの間は一方向性の通信ケーブルで接続されていて、
それぞれ１秒間に通信できる最大のデータ量が決まっています。他のコンピュータが通信を行なっていない時、
sからtへどれだけのデータを送信することができるでしょうか。

```

![ネットワークフロー](/img/procon/networkflow1.png)

まずは、貪欲法を用いて流せるところに目一杯データを流すという方法が考えられる。

その方法で試した場合、以下のような流れになる。

<img src="/img/procon/networkflow2.png" width=50%>

<img src="/img/procon/networkflow3.png" width=50%>

これが最適なのか？というと、実はもっと最適な方法があり、以下の通りである。

<img src="/img/procon/networkflow4.png" width=50%>

最初の貪欲法では最適解を導けないという事だろうか。

ここで、最適解と貪欲法で導いた解との、各辺におけるフローの差をとると以下の通りになる。

<img src="/img/procon/networkflow5.png" width=50%>
