
// vite.config.js

// Node.jsの 'path' モジュールから 'resolve' 関数をインポートします。
// これにより、ファイルへの絶対パスを安全に作成できます。
import { resolve } from 'path'

// Viteから 'defineConfig' ヘルパー関数をインポートします。
// これを使うと、設定ファイルでコード補完が効くようになり、書きやすくなります。
import { defineConfig } from 'vite'

export default defineConfig({
  // 1. 公開フォルダの指定
  // GitHub Pagesで公開する際、サイトがサブディレクトリに配置されることをViteに伝えます。
  // '/リポジトリ名/' の形式で指定します。
  base: '/lumiere-atelier-site/',

  // 2. ビルド設定
  // `npm run build` を実行した際の、本番公開用ファイルを作成するための設定です。
  build: {
    rollupOptions: {
      // どのHTMLファイルをビルドの起点（エントリーポイント）にするかを指定します。
      // これにより、Viteは複数ページのサイトを正しくビルドできるようになります。
      input: {
        // 'main' という名前で、プロジェクトルートにある index.html を指定
        main: resolve(__dirname, 'index.html'),

        // 'lesson' という名前で、html-pages/lesson-page.html を指定
        lesson: resolve(__dirname, 'html-pages/lesson-page.html'),

        // 'commitment' という名前で、html-pages/commitment-page.html を指定
        commitment: resolve(__dirname, 'html-pages/commitment-page.html'),

        // 'pricing' という名前で、html-pages/pricing-page.html を指定
        pricing: resolve(__dirname, 'html-pages/pricing-page.html'),

        // 'journal' という名前で、html-pages/journal-page.html を指定
        journal: resolve(__dirname, 'html-pages/journal-page.html'),

        // 'login' という名前で、html-pages/login-page.html を指定
        login: resolve(__dirname, 'html-pages/login-page.html'),

        // 'start' という名前で、html-pages/start-page.html を指定
        start: resolve(__dirname, 'html-pages/start-page.html'),
      },
    },
  },
})
