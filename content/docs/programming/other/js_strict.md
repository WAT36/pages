---
title: "Strictモード(Javascript)"
weight: 1
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: true
---

JavascriptのStrictモードについて。

Javascriptの仕様には様々な理由で曖昧さが存在しており、それが時にエラーの原因になりうることもある。

これらの問題の原因に対して、厳格な(Strict)チェックをするための昨日が**Strictモード**になる。

このStrictモードを指定することにより、エラーを発見が容易になったり、適切な最適化が行え処理を高速化することができる。

Strictモードにするには、以下の宣言を記述する。


```javascript
"use strict";
```

記述した箇所によって適用されるスコープが変わるので注意。ソースコードの先頭に記述した場合はソースコード全体に、関数内の先頭に記述した場合はその関数全体に適用される。