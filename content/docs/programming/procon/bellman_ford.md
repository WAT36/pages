---
title: "ベルマンフォード法"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# ベルマンフォード法

ベルマンフォード法とは、最短路問題(ある点から他の全ての頂点との間の最短路を求める問題)を解く手法の一つである。

始点sから頂点iへの最短距離をd[i]とした時、以下の式が成り立つ。

{{< katex  >}}
  dp[i] = min( d[j] + (jからiへの辺のコスト) | e=(j,i) \in E )
{{< /katex >}}

初期値をd[s]=0,d[i]=INFとし、この式を繰り返すと最短距離を計算し更新していく。負の閉路が存在しなければこの更新はいつか停止する。停止した時のdが最短距離を示している。


コードの例を以下に示す。

```python
INF=float("inf")

#辺
class edge:
    __init__(self,start,end,cost):
        self.start=start
        self.end=end
        self.cost=cost


#以下、V,E,edgesを入力する
V=0     #頂点の数
E=0     #辺の数

edges = [edge(-1,-1,-1) for _ in range(E)] #辺
d  = [-1 for _ in range(V)] # 最短距離

def shortest_path(s):
    for i in range(V):
        d[i] = INF
    d[s]=0
    while True:
        update=False
        for i in range(E):
            e=edges[i]
            if(d[e.start] != INF and d[e.end] > d[e.start] + e.cost):
                d[e.end] = d[e.start] + e.cost
                update = True
        if(not update):
            break
```