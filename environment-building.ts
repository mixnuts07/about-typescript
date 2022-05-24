const message : string = "Hello TypeScript";
console.log(message);

// compile
tsc heelo.ts

// webpack(ビルドツール)でTSの自動コンパイル、複数コードの結合、ソースコード更新時の自動リロード。

// ツール類 .. npm install  ↓*
typescript	TypeScriptコンパイラ
ts-loader	TypeScript用のローダー。Webpackと連動してTypeScriptコンパイラを動作させる
webpack	JavaScript用のビルドツール（正式にはモジュールバンドラーと呼ぶ）
webpack-cli	コマンドプロンプトからWebpackを動作させるためのツール。Webpack 4.0から必要になった
webpack-dev-server	Webpackのビルド、開発用Webサーバー、ソースコードの変更検知、ブラウザの自動リロードを一括して提供するサーバー

