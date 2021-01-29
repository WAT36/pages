---
title: "指定URLにWebリクエストを送るSlack Appの作成"
date: 2020-05-09T15:13:17+09:00
---

Slackには自作のアプリを作成でき、またコマンドを指定することで指定した動作を行える。

今回はSlackアプリの作成方法、及びコマンドの作成方法、コマンド実行時に指定URLへWebリクエストを送信する方法をまとめる。


## 1. Slack Appを作成する

- [https://api.slack.com/apps](https://api.slack.com/apps)のページに行く。



## 2. (指定URLへWebリクエストを送る)コマンドを作成する

Slackアプリのコマンドはスラッシュコマンドと言われる（スラッシュから始まるので）

ここではこの作成方法についてを示す。

### 2.1 Slack Appのトップページへ行く

スラッシュコマンドを作りたいSlack Appのページに行く。

具体的には、[https://api.slack.com/apps](https://api.slack.com/apps)のページに行くと、作成したSlack Appが表示されるので、そのアプリ名をクリックする。

### 2.2 Slash Commandを作成する

ページ左側にある「Slash Command」をクリックする。

![Slack App](/img/blog/slackapp_config.png)

その後、「Create New Command」をクリックする。

![Slack App](/img/blog/slack_slashcommand.png)

するとコマンド名、リクエスト先のURL等の入力を求められるので、入力する。

![Slack App](/img/blog/slack_createnewcommand.png)

入力後、右下の「Save」を押すとコマンドが作成される。


なお、この形式で作ったSlash Commandは、指定URLにJSON形式のデータをPOSTで送る。

コマンド実行時に引数も指定できるが、引数に指定したデータはJSONの"text"というキーに渡されて送られる。

