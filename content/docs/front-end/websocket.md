---
title: "通信(Javascript)"
weight: 1
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: true
---

# 通信(Javascript)

Javascriptにおける通信の方法についてを述べる。

# WebSocket

WebSocketはHTTPとは異なる、双方向通信を実現する通信プロトコルである。

WebSocketを表すオブジェクトは、次のコンストラクタで作成できる。

```javascript
WebSocket(url);
```

引数には、接続先のサーバのURLを入力する。

