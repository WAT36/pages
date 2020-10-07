---
title: "二部グラフ"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# 二部グラフ

前述の[グラフの彩色問題](https://wat36.github.io/pages/posts/graph_coloring/)において、彩色数(グラフの頂点を彩色するのに必要な最小の色数)が2であるグラフを**二部グラフ**という。

![二部グラフ例](/img/procon/bipartite_1.png)

グラフが与えられたとき、それが二部グラフであるかを判定するには、適当な点から彩色して行っていけば良い。２色のみで塗れたら、二部グラフと判定できる。これには深さ優先探索を用いてやると良い。

```python

V=10                            #頂点の数(入力)
G=[[] for _ in range(V)]        #グラフ（入力）

color=[0 for _ in range(V)]    #頂点の色

def dfs(v,c):
    color[v]=c
    for i in range(len(G[v])):
        #隣接している頂点が同じ色ならfalse
        if(color[G[v][i]]==c):
            return false
        #隣接している頂点がまだ塗られていないなら-cで塗る
        if(color[G[v][i]]==0 && not dfs(G[v][i],-c)):
            return false
    #全ての頂点を塗れたらTrue
    return True

for i in range(V):
    if(color[i]==0):
        #まだ頂点iが塗られていなければ1で塗る
        if(not dfs(i,1)):
            print("No")
            return

print("Yes")


```