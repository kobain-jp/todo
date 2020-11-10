# todo-day1

### setup 

vscodeのインストール
https://code.visualstudio.com/download

vscodeプラグインのインストール
https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

任意のパスにソースコードを入れるフォルダを作成 ex todo-day1

### indexページを作ってページのタブに表示される情報を変更しよう

1. vscodeを起動し、Openから作成したフォルダex todo-day1を開く

2. 新規ファイル追加アイコンをクリック、index.htmlという名前でファイルを作成 ex todo-day1/index.html

3. htmlと打つと html 5とでるので選択するとhtmlの雛形が自動保管！！スゴイ！！

4. 保存し、ファイルを選択し、右クリック`Open with Live Server

-> ブラウザが立ち上がり、タブ名にDocumtと表示される。ブラウザの表示は空

＊ちなみにLive Serverはh保存するたびにリロードされるので、今後は再起動なしでOK　便利

なんでDocumentってでるの？`<head>`タグないの`<title>`に記載してあるから
https://developer.mozilla.org/ja/docs/Web/HTML/Element/title
 
5. titleタグの中身を買い換えて、タブ名をtodo listに変更しよう

```
 -<title>Document</title>
 +<title>todo list</title>
```

なんでブラウザの表示は何もでないの？ `<body>`タグ内に何もないから

https://developer.mozilla.org/ja/docs/Web/HTML/Element/body

### コンテンツアシストをフルにつかってbodyタグ内に画面にタイトル、入力蘭、ボタンを配置しよう

1. タイトルの追加　h1とうって中身をtodo listに
2. input:textとうつ
2. input:buttonとうって、valueをaddに

```
<body>
+    <h1>todo list</h1>
+    <input type="text" name="" id="">
+    <input type="button" value="add">
</body>
```

### js ファイルを追加して、読み込もう
 
1. 同じ階層にapp.jsファイルを作成し、１行 `console.log('hello world');`と記載する ex todo-day1/app.js

app.js
```
console.log('hello world');
```

2. index.htmlのbodyタグの最後にjsを読み込むscriptタグを追加。scriptと打って、script:srcを選択し、srcにファイルのパスを記載

todo-day1/index.html
```
    <input type="text" name="" id="">
    <input type="button" value="add">
+    <script src="app.js"></script>
</body>
```

リロードして、F12でデベロッパーツールをひらき、consoleタブを開いて、helloworldとでていれば成功！

### inputタグにid:inp-newtodo-titleを付与して、jsのdocument.getElementById('inp-newtodo-title')で操作しよう

読み込んだら、inputがカーソルが選択されている状態を作ろう

todo-day1/index.html

```
-    <input type="text" name="" id="">
+    <input type="text" name="" id="inp-newtodo-title">
```

todo-day1/app.js

```

console.log('hello world');

+const inpNewTodoTitle = document.getElementById('inp-newtodo-title');
+inpNewTodoTitle.focus();

```

constとは？ 再代入できない変数名
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/const


focusとは？ elementにフォーカスさせる
https://developer.mozilla.org/ja/docs/Web/API/HTMLOrForeignElement/focus

### buton がクリックされた時の挙動を実装しよう

document.getElementByIdで操作するために、idをふろう

todo-day1/index.html

```
-    <input type="button" value="add" >
+    <input type="button" value="add" id="btn-newtodo">
```

document.getElementById取得したボタンオブジェクトのaddEventListnerメソッドでクリックされた時の挙動を追加しよう

todo-day1/app.js

```

// html elementを取得
const btnNewTodo = document.getElementById('btn-newtodo');

// clickが呼ばれたときに呼ばれるメソッドを定義
function onNewTodoBtnClicked() {
    window.alert('button clicked');
}

// clickに追加
btnNewTodo.addEventListener('click', onNewTodoBtnClicked);

```
https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener

buttonを押して、button clickedと表示されればOK

alertって何？
https://developer.mozilla.org/ja/docs/Web/API/Window/alert

windowって何？
https://developer.mozilla.org/ja/docs/Web/API/Window


### DeveloperTool＞Consoleから色々いじってみよう

F12を開く

1. ボタンをdisabledにしてみよう

btnNewTodo.と打ち込んでbtnNewTodoがもっているプロパティやメソッドを読んでみよう

btnNewTodo.disabled = true;を実行してみよう

2. alertで今inputに入力している値を表示させよう inpNewTodoTitle

何かを入力して、inpNewTodoTitle.valueを表示させてみよう

alert(inpNewTodoTitle.value);を実行してみよう

3. consoleでwindow.と打ってみよう

window.onNewTodoBtnClicked
window.inpNewTodoTitle 

とか定義した関数や、定義した変数がでてきますね。。

4. onNewTodoBtnClicked()を以下に変更して、eの中身をconsoleで見てみよう

```
function onNewTodoBtnClicked(e) {
    alert('button clicked');
    console.log(e.type)
    console.log(e.target)
}
```


https://developer.mozilla.org/ja/docs/Web/API/Event

今日はここまで







