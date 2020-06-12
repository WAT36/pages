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


## textarea要素

textarea要素は、複数行のテキスト入力フィールドとなる要素である。

使用する主な属性は以下の通り。


<table style="border:none;">
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">cols</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">１行で入力できる文字数</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">rows</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">入力できる行数</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">autocomplete</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">オートコンプリート機能のオン</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">form</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">特定のform要素と結びつける(form要素のid属性の値を指定)</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">maxlength</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">最大文字数</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">placeholder</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">プレースホルダー(入力欄に薄く表示する説明のようなもの)</td>
    </tr>
</table>


使用例

```
入力：
<textarea cols="20" rows="5" autocomplete="on" maxlength="80" placeholder="20文字/行 5列まで、最大80文字"></textarea>
```

表示例

<hr>
入力：
<textarea cols="20" rows="5" autocomplete="on" maxlength="80" placeholder="20文字/行 5列まで、最大80文字"></textarea>
<hr>


## button要素

button要素は、ボタンを表示させる要素である。要素内の内容はラベルとして、ボタンに表示される。

使用する主な属性は以下の通り。


<table style="border:none;">
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">type</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">ボタンの種類(submit,reset,menu,buttonのいずれか)</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">menu</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">表示させるメニュー</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">form</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">特定のform要素と結びつける(form要素のid属性の値を指定)</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">formaction</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">フォームの送信先のURL</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">formmethod</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">フォームのデータを送信する際のHTTPメソッド</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">name</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">フォーム部品の名前</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">value</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">フォームのデータを送信する際に使用される値</td>
    </tr>
</table>

使用例

```
<form id="button">
<textarea cols="20" rows="4" placeholder="何か書いてresetボタンを押すと？" form="button"></textarea>

<button type="button" name="test" form="button">
buttonテスト
</button>

<button type="reset" name="resettest" form="button">
resetテスト
</button>
</form>
```

表示例

<hr>
<form id="button">
<textarea cols="20" rows="4" placeholder="何か書いてresetボタンを押すと？" form="button"></textarea>

<button type="button" name="test" form="button">
buttonテスト
</button>

<button type="reset" name="resettest" form="button">
resetテスト
</button>
</form>
<hr>

## select要素

select要素は、選択肢の中から選ぶ形式のフォーム部品を示す要素である。

フォーム部品自体はselect要素で示し、中身の選択肢は後述するoption要素・optgroup要素で示す。

select要素で使用する主な属性は以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">multiple</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">複数の入力・選択を許可する</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">size</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">表示させる項目数</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">autocomplete</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">オートコンプリート機能のオン</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">form</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">特定のform要素と結びつける(form要素のid属性の値を指定)</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">name</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">フォーム部品の名前</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">required</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">入力・選択が必須であることを示す</td>
    </tr>
</table>


## option要素

option要素は、前述のselect要素またはdatalist要素の選択肢となる要素である。

要素の内容には、表示させたい内容を入力する。

使用する主な属性は以下の通り。


<table style="border:none;">
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">selected</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">デフォルトで選択済みの状態にするか</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">label</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">要素内容よりも優先してブラウザに表示させる選択肢名</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">value</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">要素内容よりも優先してsubmit等でサーバーに送信する用の値</td>
    </tr>
</table>

前述のselect要素を使って、例を示す。

```
<select>
    <option selected >選択肢その１</option>
    <option label="ラベルに書いた選択肢その２">選択肢その２</option>
    <option>選択肢その３</option>
</select>
```

表示例

<hr>
<select>
    <option selected >選択肢その１</option>
    <option label="ラベルに書いた選択肢その２">選択肢その２</option>
    <option>選択肢その３</option>
</select>
<hr>