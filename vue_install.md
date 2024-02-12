# はじめに

vueのプロジェクトを生成したときの内容をメモしたものです。

# createコマンドの実行

vueのプロジェクトを生成するため、createコマンド実行します。
helpは次の通りでした。

```shell
username@T21MacAir vue % vue create --help
Usage: vue create [options] <app-name>

create a new project powered by vue-cli-service

Options:
  -p, --preset <presetName>       Skip prompts and use saved or remote preset
  -d, --default                   Skip prompts and use default preset
  -i, --inlinePreset <json>       Skip prompts and use inline JSON string as preset
  -m, --packageManager <command>  Use specified npm client when installing dependencies
  -r, --registry <url>            Use specified npm registry when installing dependencies (only for npm)
  -g, --git [message]             Force git initialization with initial commit message
  -n, --no-git                    Skip git initialization
  -f, --force                     Overwrite target directory if it exists
  --merge                         Merge target directory if it exists
  -c, --clone                     Use git clone when fetching remote preset
  -x, --proxy <proxyUrl>          Use specified proxy when creating project
  -b, --bare                      Scaffold project without beginner instructions
  --skipGetStarted                Skip displaying "Get started" instructions
  -h, --help                      display help for command
```

# Your connection to the default yarn registry seems to be slow

デフォルトのリポジトリが遅いそうで、ミラーにするかと聞かれました。
どちらでもいいとは思いますが、私としてはミラーサイトに抵抗はないので、Yesを選んでいます。

```shell
username@T21MacAir vue % vue create vue-ts-app
?  Your connection to the default yarn registry seems to be slow.
   Use https://registry.npmmirror.com for faster installation? Yes
```

# Check the features needed for your project

vueプロジェクトに必要な拡張機能を選択しました。
本当は必要ないですが、全ての機能を有効にした場合の質問が見たかったので全て有効にしています。
ちょっと学習するぐらいなら 「Babel」 「Router」 「Linter/Formatter」 ぐらいでいいのではないでしょうか？

```shell
? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)
 ◉ Babel
 ◉ TypeScript
 ◉ Progressive Web App (PWA) Support
 ◉ Router
❯◉ Vuex
 ◉ CSS Pre-processors
 ◉ Linter / Formatter
 ◉ Unit Testing
 ◉ E2E Testing
```

## 拡張機能の一覧

| 機能名 | 内容 | 参考URL |
| -- | -- | -- |
| Babel | Javascriptの下位互換対応コンパイラを使用するか否か。<br>通常はYESでいいと思う。 | [What is Babel?](https://babeljs.io/docs/en/) |
| TypeScript | Javascriptで記述するか、Typescriptで記述するか。<br>最近はTypescriptで作る人が増えているみたい。 | - |
| Progressive Web App (PWA) Support | WEBページっぽく作ったものをモバイルアプリやデスクトップアプリとして使えるネイティブアプリのような作りにできるようにするか否か。 | [VueアプリをPWAにする](https://ionicframework.com/docs/ja/vue/pwa) |
| Router | 複数のページがあるときにルーティングする機能が必要か否か。<br>SPAの作り方によっては不要かもしれないが、Login画面や設定画面をルーティングすることがある。 | [vue router Introduction](https://router.vuejs.org/introduction.html) |
| Vuex | ストアという考え方で状態管理をするか否か。<br>中規模〜大規模の場合はおすすめらしいが小規模では入れないほうが作りやすい。 | [Vuex とは何か？](https://vuex.vuejs.org/ja/) |
| CSS Pre-processors | Sass/SCSSやLessなどを使うか否か。<br>通常はYESでいいと思う。 | [プリプロセッサの使用](https://vue-loader-v14.vuejs.org/ja/configurations/pre-processors.html) |
| Linter / Formatter | ESLintでコーディング規約をチェックしたり、Prettierで自動整形を使うか否か。<br>通常はYESでいいと思う。 | - |
| Unit Testing | 単体テストがいるか否か。<br>お試し程度ならNO、通常にアプリを作るならYESでいいと思う。 | - |
| E2E Testing | 結合テストがいるか否か。<br>お試し程度ならNO、通常にアプリを作るならYESでいいと思う。 | - |


# Choose a version of Vue.js that you want to start the project

Vueバージョンを選択する。
特にこだわりが無いなら最新で良い。

```shell
? Choose a version of Vue.js that you want to start the project with (Use arrow keys)
❯ 3.x 
  2.x 
```

# Use class-style component syntax?

Class style, Object styleのどちらで記述するか
Class style, Object styleという書き方をしらないと意味がわからない話のようです。
私はClass styleの方が見慣れていると思ったのでYESにしました。

```shell
? Use class-style component syntax? (y/N) 
```

# Use Babel alongside TypeScript 

Typescriptでも下位互換のBabelを使うかどうか。
下位互換はあった方がいいと思うのでYESでいいと思います。

```shell
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? (Y/n) 
```

# Use history mode for router?

routerのモード選択です。
historyモードとhashモードがあり、URLに#が入っているのがhashモード。
hashモードの方が早いらしいので、PWAとの相性がいいかもしれない。
一般的なサイトとして使うならhistoryモードか。

```shell
? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n) 
```

# Pick a CSS pre-processor

CSSのプリプロセッサーの選択です。
ここはどれを選んでも差は無いと思いますので、自分がなれたものがいいと思います。
私はSCSSがいいので、SCSSを選択しています。

```shell
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): (Use arrow keys)
❯ Sass/SCSS (with dart-sass) 
  Less 
  Stylus 
```

# Pick a linter / formatter config

コードフォーマッターの設定と整形の有無を選択します。

| 項目 | 内容 |
| -- | -- |
| ESLint wiht error prevention only | 基本的なESLint |
| ESlint + Airbnb config | 基本的なESLint + 設定（airbnbではセミコロンがつく） |
| ESLint + Standard config | 基本的なESLint + 設定（standardでは行の最後にセミコロンがつかない） |
| ESLint + Prettier | 基本的なESLint + Prettierはフォーマッターでコードの整形を行う |

```shell
? Pick a linter / formatter config: 
  ESLint with error prevention only 
  ESLint + Airbnb config 
❯ ESLint + Standard config 
  ESLint + Prettier 
```

# Pick additional lint features

コードフォーマッターの動作タイミングの選択です。
保存のタイミングか、コミットのタイミングか。
保存のタイミングでいいと思います。

```shell
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)
❯◉ Lint on save
 ◯ Lint and fix on commit
```

# Pick a unit testing solution

単体テストユニットの選択です。


```shell
? Pick a unit testing solution: (Use arrow keys)
❯ Jest 
  Mocha + Chai 
```

# Pick an E2E testing solution

```shell
? Pick an E2E testing solution: (Use arrow keys)
❯ Cypress (Test in Chrome, Firefox, MS Edge, and Electron) 
  Nightwatch (WebDriver-based) 
  WebdriverIO (WebDriver/DevTools based) 
```

# Where do you prefer placing config for Babel, ESLint, etc.?

各設定ファイルを専用フォルダにするか

```shell
? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
❯ In dedicated config files 
  In package.json 
```

# Save this as a preset for future projects?

ここまでの選択をプリセットしますか

```shell
? Save this as a preset for future projects? (Y/n) 
```

# Pick the package manager to use when installing dependencies

パッケージ管理の選択。

| ツール名 | 内容 |
| -- | -- |
| npm  | 最も有名なJavascriptのパッケージ管理ソフト |
| yarn | npmがセキュリティなどの問題があるため、その対策入り |
| pnpm | npmが数百MB容量を使うので容量を抑えてくれる対策入り |

```shell
? Pick the package manager to use when installing dependencies: (Use arrow keys)
❯ Use Yarn 
  Use PNPM 
  Use NPM
```

# create start

```shell
Vue CLI v5.0.1
✨  Creating project in /Users/username/projects/vue/vue-ts-app.
🗃  Initializing git repository...
⚙️  Installing CLI plugins. This might take a while...

🚀  Invoking generators...
📦  Installing additional dependencies...

⚓  Running completion hooks...

📄  Generating README.md...

🎉  Successfully created project vue-ts-app.
👉  Get started with the following commands:

 $ cd vue-ts-app
 $ pnpm run serve

username@T21MacAir vue % 
```



# 参考サイト

[最小限の構成でVue.extendとクラスコンポーネントを比べてみる](https://zenn.dev/kata_n/articles/233ee8e03c5cb1)
[npmとyarnとpnpmの違い2021](https://zenn.dev/hibikine/articles/27621a7f95e761)
[[Vue.js] vue-routerのhashモードとhistoryモードの違いをざっくり理解する](https://qiita.com/kozzzz/items/af9ad63fa70d4724cc2a)



Babel
下位互換対応のコンパイラ
> BabelはJavaScriptコンパイラです
> Babelは、現在および古いブラウザまたは環境でECMAScript2015 +コードを下位互換性のあるバージョンのJavaScriptに変換するために主に使用されるツールチェーンです。



Progressive Web App (PWA) Support
WEBページっぽく作ったものをネイティブアプリのような使い方ができるようにする
> https://ionicframework.com/docs/ja/vue/pwa
> [Webディレクターが知らないとマズい！Googleの注目プロジェクトPWAって何？](https://www.webprofessional.jp/what-is-the-attention-project-pwa-by-google/)
> PWA（Progressive Web Apps）はグーグルがモバイルユーザーのユーザー体験向上を目的とし、今までのWebアプリ（サービス）にWebとアプリの両方の利点を兼ね備えた仕組みのことです。



Router
複数ページを作るときに使用するルーティング機能


Vuex
> [Vuex とは何か？](https://vuex.vuejs.org/ja/)
> Vuex は Vue.js アプリケーションのための 状態管理パターン + ライブラリです。 これは予測可能な方法によってのみ状態の変異を行うというルールを保証し、アプリケーション内の全てのコンポーネントのための集中型のストアとして機能します。
> 今あなたが中規模から大規模の SPA を構築しているなら、Vue コンポーネントの外の状態をもっとうまく扱えないか考えなくてはならない状況にあるかもしれません。


CSS Pre-processors
scss, coffee script, pugを使用できる
> [プリプロセッサの使用](https://vue-loader-v14.vuejs.org/ja/configurations/pre-processors.html)


Linter / Formatter
> ESLintは構文の記述間違いやあらかじめ決められたルールに沿ってコードが記述されているかをチェックするツール
> linter / formatterには4つの選択肢があります
> [Vue CLIを使ってESLintとPrettierが何か完全に理解する](https://reffect.co.jp/vue/eslint#ESLint_Prettier)
> > ESLint wiht error prevention only -> 基本的なESLint
> > ESlint + Airbnb config -> airbnbではセミコロンがつく
> > ESLint + Standard config -> standardでは行の最後にセミコロンがつかない
> > ESLint + Prettier -> Prettierはフォーマッターでコードの整形のみを行ってくれるツールです。



[npmとyarnとpnpmの違い2021](https://zenn.dev/hibikine/articles/27621a7f95e761)