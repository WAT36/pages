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
        <td style="border:none;">button</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">汎用ボタン</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">image</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">画像の送信ボタン</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">file</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">送信するファイルを選択する</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">color</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">色の入力</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">date</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">日付の入力</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">month</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">年と月の入力</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">week</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">年と週の入力</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">time</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">時刻の入力</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">datetime-local</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">日付と時刻の入力</td>
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
        <td style="border:none;">reset</td>
        <td style="border:none;"><input type="reset"></td>
    </tr>
    <tr>
        <td style="border:none;">button</td>
        <td style="border:none;"><input type="button"></td>
    </tr>
    <tr>
        <td style="border:none;">image</td>
        <td style="border:none;"><input type="image" src="/img/front-end/img.jpg" width=25% height=25%></td>
    </tr>
    <tr>
        <td style="border:none;">color</td>
        <td style="border:none;"><input type="color"></td>
    </tr>
    <tr>
        <td style="border:none;">date</td>
        <td style="border:none;"><input type="date"></td>
    </tr>
    <tr>
        <td style="border:none;">month</td>
        <td style="border:none;"><input type="month"></td>
    </tr>
    <tr>
        <td style="border:none;">week</td>
        <td style="border:none;"><input type="week"></td>
    </tr>
    <tr>
        <td style="border:none;">time</td>
        <td style="border:none;"><input type="time"></td>
    </tr>
    <tr>
        <td style="border:none;">datetime-local</td>
        <td style="border:none;"><input type="datetime-local"></td>
    </tr>
    <tr>
        <td style="border:none;">hidden</td>
        <td style="border:none;"><input type="hidden"></td>
    </tr>
</table>
</form>
```

表示例（ブラウザによっては正しく表示されない場合もあります）

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
        <td style="border:none;">reset</td>
        <td style="border:none;"><input type="reset"></td>
    </tr>
    <tr>
        <td style="border:none;">button</td>
        <td style="border:none;"><input type="button"></td>
    </tr>
    <tr>
        <td style="border:none;">image</td>
        <td style="border:none;"><input type="image" src="/img/front-end/img.jpg" width=25% height=25%></td>
    </tr>
    <tr>
        <td style="border:none;">color</td>
        <td style="border:none;"><input type="color"></td>
    </tr>
    <tr>
        <td style="border:none;">date</td>
        <td style="border:none;"><input type="date"></td>
    </tr>
    <tr>
        <td style="border:none;">month</td>
        <td style="border:none;"><input type="month"></td>
    </tr>
    <tr>
        <td style="border:none;">week</td>
        <td style="border:none;"><input type="week"></td>
    </tr>
    <tr>
        <td style="border:none;">time</td>
        <td style="border:none;"><input type="time"></td>
    </tr>
    <tr>
        <td style="border:none;">datetime-local</td>
        <td style="border:none;"><input type="datetime-local"></td>
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

使用例は下記、option要素の所で示す。

## option要素

option要素は、前述のselect要素またはdatalist要素の選択肢となる要素である。

要素の内容には、表示させたい内容を入力する。

使用する主な属性は以下の通り。


<table style="border:none;">
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">selected</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">デフォルトで選択済みの状態にする</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">label</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">ブラウザに表示させる選択肢名(要素内容よりも優先する)</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">value</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">submit等でサーバーに送信する値(要素内容よりも優先する)</td>
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


## optgroup要素

optgroup要素は、select要素内のoption要素をグループ化して、そこにグループの名前（ラベル）をつける要素である。

グループに名前をつけるにはlabel属性を利用する。

使用例

```
<select>
    <optgroup label="選択肢">
        <option selected >選択肢その１</option>
        <option label="ラベルに書いた選択肢その２">選択肢その２</option>
        <option>選択肢その３</option>
</select>
```

表示例

<hr>
<select>
    <optgroup label="選択肢">
        <option selected >選択肢その１</option>
        <option label="ラベルに書いた選択肢その２">選択肢その２</option>
        <option>選択肢その３</option>
</select>
<hr>


## datalist要素

datalist要素は、input要素にサジェストを追加するための要素である。

実際のサジェストの内容は、前述の**option要素・optgroup要素**を利用して表現する。

datalist要素とinput要素を関連付けるには、datalist要素のid属性の値をinput要素のlist属性に指定する。

使用例

```
<p>行きたい場所は?
<input type="text" list="place">
    <datalist id="place">
        <option>東京</option>
        <option>横浜</option>
        <option>京都</option>
    </datalist>
</p>
```

表示例

<hr>
<p>行きたい場所は?
<input type="text" list="place">
    <datalist id="place">
        <option>東京</option>
        <option>横浜</option>
        <option>京都</option>
    </datalist>
</p>
<hr>


## meter要素

meter要素は、メーター（ゲージ)を示すための要素である。

具体的には、特定の範囲内で指定した位置を示すときに利用する。

使用する主な属性は以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">value</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">要素の現在値</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">min</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">メーターの範囲の下限</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">max</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">メータの範囲の上限</td>
    </tr>
</table>


使用例

```
<p>使用量状況：
<meter min="0" max="100" value="45">
</meter>
</p>
```

表示例

<hr>
<p>使用量状況：
<meter min="0" max="100" value="45">
</meter>
</p>
<hr>


## progress要素

progress要素は、タスクの進み具合を示すゲージを示すための要素である。

使用する属性は以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">value</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">要素の現在値</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">max</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">全体量</td>
    </tr>
</table>

使用例

```
Now loading...:
<progress value="45" max="100"></progress>
```

表示例

<hr>
Now loading...:
<progress value="45" max="100"></progress>
<hr>


## output要素

output要素は、計算式の計算結果、またはユーザーの操作結果を示すための要素である。

使用する属性は以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">for</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">計算の元となったフォームの部品</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">name</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">フォーム部品の名前</td>
    </tr>
</table>

使用例

```
<form oninput="result.value=a.valueAsNumber+b.valueAsNumber">
	<input name="a" value="20" type="number"> +
	<input name="b" value="30" type="number"> =
	<output for="a b" name="result"></output>	
</form>
```

表示例

<hr>
<form oninput="result.value=a.valueAsNumber+b.valueAsNumber">
	<input name="a" value="20" type="number"> +
	<input name="b" value="30" type="number"> =
	<output for="a b" name="result"></output>	
</form>
<hr>

## keygen要素

keygen要素は、公開鍵・秘密鍵のペアを生成するための要素である。

実行すると、秘密鍵はローカルに保存され、公開鍵はサーバー側に送られる。

<table style="border:none;">
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">keytype</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">生成する暗号鍵の種類(rsaなど)</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">challenge</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">生成された公開鍵とともに送られる文字列</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">name</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">form要素と関連づけるための値</td>
    </tr>
</table>

(実行例略)

## label要素

label要素は、その要素内容をフォームの部品と紐づけるための要素である。

紐づけられたラベルは、フォームの部品と一体化してユーザの操作に一緒に反応されるようになる。

紐づけるための方法は

- label要素の中に、要素内容と一緒に関連づけたいフォームの部品の要素を入れる
- フォーム部品の要素にid属性を指定し、label要素のfor属性にもそのid属性と同じ値を指定する

である。

使用例

```
<form>
<label for="yes"><input type="radio" name="ans" id="yes">はい</label>
<label for="no"><input type="radio" name="ans" id="no">いいえ</label>
</form>
```

表示例

<hr>
<form>
<label for="yes"><input type="radio" name="ans" id="yes">はい</label>
<label for="no"><input type="radio" name="ans" id="no">いいえ</label>
</form>
<hr>


## fieldset要素

fieldset要素は、formに関する要素をグループ化するための要素である。

使用する属性は以下の通り。

<table style="border:none;">
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">form</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">関連づけるform要素のid属性の値</td>
    </tr>
    <tr>
        <td style="border:none;">・</td>
        <td style="border:none;">name</td>
        <td style="border:none;">　・・・　</td>
        <td style="border:none;">form要素と関連づけるための値</td>
    </tr>
</table>

使用例

```
<form id="ticket">
<fieldset form="ticket">
<p>
乗車駅→降車駅<br>
<input type="text" width="10">
→
<input type="text" width="10">
</p>
大人：
<label><input type="radio" name="adult" id="zero">０人</label>
<label><input type="radio" name="adult" id="one">１人</label>
<label><input type="radio" name="adult" id="two">２人</label>
<br>
小人：
<label><input type="radio" name="child" id="zero">０人</label>
<label><input type="radio" name="child" id="one">１人</label>
<label><input type="radio" name="child" id="two">２人</label>
</fieldset>
</form>
```

表示例

<hr>
<form id="ticket">
<fieldset form="ticket">
<p>
乗車駅→降車駅<br>
<input type="text" width="10">
→
<input type="text" width="10">
</p>
大人：
<label><input type="radio" name="adult" id="zero">０人</label>
<label><input type="radio" name="adult" id="one">１人</label>
<label><input type="radio" name="adult" id="two">２人</label>
<br>
小人：
<label><input type="radio" name="child" id="zero">０人</label>
<label><input type="radio" name="child" id="one">１人</label>
<label><input type="radio" name="child" id="two">２人</label>
</fieldset>
</form>
<hr>

## legend要素

legend要素は、fieldset要素でグループ化されたフォーム部品にキャプションをつけて表示させるための要素である。

legend要素を使用する場合は、必ずfieldset要素の中で使用し、かつその先頭に指定する必要がある。


使用例

```
<form id="ticket">
<fieldset form="ticket">
<legend>乗車券</legend>
<p>
乗車駅→降車駅<br>
<input type="text" width="10">
→
<input type="text" width="10">
</p>
大人：
<label><input type="radio" name="adult" id="zero">０人</label>
<label><input type="radio" name="adult" id="one">１人</label>
<label><input type="radio" name="adult" id="two">２人</label>
<br>
小人：
<label><input type="radio" name="child" id="zero">０人</label>
<label><input type="radio" name="child" id="one">１人</label>
<label><input type="radio" name="child" id="two">２人</label>
</fieldset>
</form>
```

表示例

<hr>
<form id="ticket">
<fieldset form="ticket">
<legend>乗車券</legend>
<p>
乗車駅→降車駅<br>
<input type="text" width="10">
→
<input type="text" width="10">
</p>
大人：
<label><input type="radio" name="adult" id="zero">０人</label>
<label><input type="radio" name="adult" id="one">１人</label>
<label><input type="radio" name="adult" id="two">２人</label>
<br>
小人：
<label><input type="radio" name="child" id="zero">０人</label>
<label><input type="radio" name="child" id="one">１人</label>
<label><input type="radio" name="child" id="two">２人</label>
</fieldset>
</form>
<hr>