ボタン設定Javascript

[sample.js]

function clickAlert() {
  alert("クリックされました");
}



イベントハンドラ属性	イベントの内容
onclick	クリックした時
onmouseover	マウスが要素に重なった時
onkeydown	キーボードのキーが押された時
onkeyup	キーボードのキーが離れた時
onchange	input要素の内容が変更された時
onfocus	input要素にフォーカスが当たった時



[index.html]

<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <title>JavaScript</title>
  </head>
  <body>
     JavaScript
     <!-- イベントハンドラを設定 -->
     <button onclick="clickAlert()">クリック</button>
     <script type="text/javascript" src="sample.js"></script>
  </body>
</html>
