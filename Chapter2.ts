...Advantages of TS 
JavaScriptの上位互換。
安全性が高い。 (タイプセーフ)
型推論がある。

1.静的型チェック
2.モジュール性
3.学習コスト低

・トランスパイル
babel .. 最新JSを古いJS環境でも使える。
ts .. 形チェックあり。

・モジュールバンドラ
webpack .. 複数JS+CSSetc..を１つのJSに。
parcel .. 設定ファイルなし。

・タスクランナー .. 決められた処理を実行しやすい形にまとめ、実行の順序を考慮不要に！！
gulp, grunt

・パッケージマネジャ ライブラリの依存をauto i
npm yarn

・実行環境 .. Node.js, browser
↑実行環境の内部にはv8エンジン（JSを評価して実行するエンジン）
JSはコンパイルして機械語にはできないから実行環境が必要！

・コードフォーマッター .. 書き方の揺れを整形。
Prettier　 .. コードの整形
ESLint .. ＋コード間違い

・AltJS...JSにコンパイラして使う言語。

・動的型付け..プログラム実行時に決まる。
・静的型付け..コンパイラ時に決まる。

・About ECMAScript
ブラウザ→レンダリングエンジン→JSエンジン→ECMAScript

