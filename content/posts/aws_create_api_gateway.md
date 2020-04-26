---
title: "API GatewayでのAPI作成方法(AWS)"
date: 2020-04-27T00:02:47+09:00
draft: false
---

AWSでのAPI GatewayでのAPI作成方法について、備忘がてら手順をのせる。

## 1. AWSマネジメントコンソールにログインする

AWSマネジメントコンソールのページに行き、ログインする。

![AWSマネジメントコンソール](/img/aws/aws_management_console.png)

## 2. API Gatewayのページを開く

マネジメントコンソールにログインしたら、サービスの検索ボックスにAPIと入力し、API Gatewayのページを開く。

![AWSマネジメントコンソール](/img/aws/aws_management_console_apigateway.png)

## 3. APIを作成する

右上の「APIの作成」ボタンを押す。

![AWSマネジメントコンソール](/img/aws/apigateway_top.png)

## 4. 作成するAPIタイプを選択する

どのタイプのAPIを作成するかが画面に出るので、適切なものを作成する。

今回はREST APIを作成する。

![AWSマネジメントコンソール](/img/aws/apigateway_selecttype.png)

## 5. API名を設定する

API名などを設定して「APIの作成」をクリック

![AWSマネジメントコンソール](/img/aws/apigateway_setname.png)

するとAPIの設定画面が表示される。

![AWSマネジメントコンソール](/img/aws/apigateway_apiconfig.png)
