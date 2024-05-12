# fb-kill-sync

## 使用用途

- Kviewer-Formbridge連携させて、FBにKintoneのデータを表示している
- FBで編集されたデータをKintoneの新規レコードとしたい場合
  - 通常は、連携機能で引っ張ってきたレコードに上書き

## 使い方

- `disconnect_kvfv.js`をFBのカスタマイズとして追加
- （または）以下のCDNをFBのカスタマイズとして追加
  - https://cdn.jsdelivr.net/gh/NKR-24/disconnect_kvfv/disconnect_kvfv.js

## イベントタイミングを変更
- こちらを参考に、適切なタイミングでKV-FBの連携を切る
  - https://formbridge.kintoneapp.com/help/customize
- 現状では、KV lookupの直後、および確認画面の表示直前に連携を切るようになっている