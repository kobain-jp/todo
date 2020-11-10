# todomvc

### setup 

vscodeのインストール
https://code.visualstudio.com/download

vscodeプラグインのインストール
https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

任意のパスにソースコードを入れるフォルダを作成 ex todomvc

### indexページを作ってページのタブに表示される情報を変更しよう

1. vscodeを起動し、Openから作成したフォルダを開く

2. 新規ファイル追加アイコンをクリック、index.htmlという名前でファイルを作成

3. htmlと打つと html 5とでるので選択するとhtmlの雛形が自動保管！！スゴイ！！

4. 保存し、ファイルを選択し、右クリック`Open with Live Server

-> ブラウザが立ち上がり、タブ名にDocumtと表示される。中身は空っぽ

なんでDocumentってでるの？<head>タグないの<title>に記載してあるから
https://developer.mozilla.org/ja/docs/Web/HTML/Element/title

5. todo listに変更しよう

```
 -<title>Document</title>
 +<title>todo list</title>
```
















