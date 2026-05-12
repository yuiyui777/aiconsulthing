# AI導入支援サービス 出演パートナー募集サイト

## ローカルで確認する方法

```bash
npm install
npm run dev
```

表示されたURLをブラウザで開くと確認できます。

## 公開する方法

VercelやNetlifyなどにこのフォルダをアップロードすると公開できます。

### Vercelの場合

1. このzipを解凍
2. GitHubにアップロード
3. Vercelで該当リポジトリを選択
4. Framework Presetは `Vite`
5. Deployを押す

## 編集したい主な箇所

- 文章や金額：`src/App.jsx`
- 問い合わせ先メールアドレス：`src/App.jsx` の `mailto:` 部分
- ページタイトル：`index.html`
