---
title: "フォーム"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# フォーム

フォームを作成するための要素についてを述べる。

## form要素

form要素はフォームを構成する要素である。

使用する主な属性は以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">action</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">フォームの送信先のURL</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">autocomplete</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">フォーム内のオートコンプリート機能のデフォルト値</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">method</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">フォームのデータを送信する際のHTTPメソッドを指定</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">name</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">フォームの名前</td>
    </tr>
        <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">novalidate</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">入力(選択)内容のチェックを問わない</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">target</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">フォームの送信結果を表示させるウィンドウやタブなどの名前</td>
    </tr>
</table>

実際の使用例は以下の要素のところで述べる。

## input要素


input要素はform要素内で使われる要素で、フォームの入力を示すための要素である。

フォームの入力にはいくつか種類があり、input要素で**type**属性の値を利用することで使い分ける。

type属性に指定できる値は以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">text</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">テキスト入力フィールド(デフォルト)</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">password</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">パスワード入力用のテキスト入力フィールド</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">search</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">検索用入力フィールド</td>
    </tr>
        <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">email</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">メールアドレス用入力フィールド</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">url</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">URL入力フィールド</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">tel</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">電話番号入力フィールド</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">number</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">数値入力フィールド</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">range</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">スライダー</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">checkbox</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">チェックボックス</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">radio</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">ラジオボタン</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">submit</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">送信ボタン</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">reset</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">リセットボタン</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">hidden</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">表示させずに送信するテキスト</td>
    </tr>
</table>


使用例

```
<form>
    <table style="border:none;">
    <tr>
        <td style="border:none;">text:</td>
        <td style="border:none;"><input type="text"></td>
    </tr>
    <tr>
        <td style="border:none;">password</td>
        <td style="border:none;"><input type="password"></td>
    </tr>
    <tr>
        <td style="border:none;">search</td>
        <td style="border:none;"><input type="search"></td>
    </tr>
        <tr>
        <td style="border:none;">email</td>
        <td style="border:none;"><input type="email"></td>
    </tr>
    <tr>
        <td style="border:none;">url</td>
        <td style="border:none;"><input type="url"></td>
    </tr>
    <tr>
        <td style="border:none;">tel</td>
        <td style="border:none;"><input type="tel"></td>
    </tr>
    <tr>
        <td style="border:none;">number</td>
        <td style="border:none;"><input type="number"></td>
    </tr>
    <tr>
        <td style="border:none;">range</td>
        <td style="border:none;"><input type="range"></td>
    </tr>
    <tr>
        <td style="border:none;">checkbox</td>
        <td style="border:none;"><input type="checkbox"></td>
    </tr>
    <tr>
        <td style="border:none;">radio</td>
        <td style="border:none;"><input type="radio"></td>
    </tr>
    <tr>
        <td style="border:none;">submit</td>
        <td style="border:none;"><input type="submit"></td>
    </tr>
    <tr>
        <td style="border:none;">reset</td>
        <td style="border:none;"><input type="reset"></td>
    </tr>
    <tr>
        <td style="border:none;">hidden</td>
        <td style="border:none;"><input type="hidden"></td>
    </tr>
</table>
</form>
```

表示例

<hr>
<form>
    <table style="border:none;">
    <tr>
        <td style="border:none;">text:</td>
        <td style="border:none;"><input type="text"></td>
    </tr>
    <tr>
        <td style="border:none;">password</td>
        <td style="border:none;"><input type="password"></td>
    </tr>
    <tr>
        <td style="border:none;">search</td>
        <td style="border:none;"><input type="search"></td>
    </tr>
        <tr>
        <td style="border:none;">email</td>
        <td style="border:none;"><input type="email"></td>
    </tr>
    <tr>
        <td style="border:none;">url</td>
        <td style="border:none;"><input type="url"></td>
    </tr>
    <tr>
        <td style="border:none;">tel</td>
        <td style="border:none;"><input type="tel"></td>
    </tr>
    <tr>
        <td style="border:none;">number</td>
        <td style="border:none;"><input type="number"></td>
    </tr>
    <tr>
        <td style="border:none;">range</td>
        <td style="border:none;"><input type="range"></td>
    </tr>
    <tr>
        <td style="border:none;">checkbox</td>
        <td style="border:none;"><input type="checkbox"></td>
    </tr>
    <tr>
        <td style="border:none;">radio</td>
        <td style="border:none;"><input type="radio"></td>
    </tr>
    <tr>
        <td style="border:none;">submit</td>
        <td style="border:none;"><input type="submit"></td>
    </tr>
    <tr>
        <td style="border:none;">reset</td>
        <td style="border:none;"><input type="reset"></td>
    </tr>
    <tr>
        <td style="border:none;">hidden</td>
        <td style="border:none;"><input type="hidden"></td>
    </tr>
</table>
</form>
<hr>
