# Golang-NextJs-FullStack
The Go/Next.js Full Stack with stripe and full auth


![image](https://github.com/NikoMalik/golang-nextjs-fullstack/assets/123812634/c36a7df3-1baf-4533-a888-280afdb0d480)


## Features

- 🛠️ Complete Stripe payment and Authorization with Go and Nextjs
- 💻 Beautiful Landing Page & Pricing Page Included
- 💳 Free & Pro Plan &  Business Plan Using Stripe
- 🔄 Streaming API Responses in Real-Time
- 🎨 Clean, Modern UI Using 'shadcn-ui'
- 🚀 Optimistic UI Updates for a Great UX
- ♒ Intuitive Design
- ✨ Instant Loading States
- 🔧 Modern Data Fetching Using Golang with fiber
- 📊 gorm as our ORM
- 🎁 ...much more

## DemoVideo


https://github.com/NikoMalik/golang-nextjs-fullstack/assets/123812634/fe9a030b-bf76-4b96-8df5-93d4db80ad8c


## Requirements

- Go 1.22.2  
- NextJs
- Docker
- Smtp (i use free resend btw)
- Stripe Cli (i use stripe cli in docker btw)
- Stripe api

**Note:** While the `embed` package was added in Go 1.16, the `all:` prefix of
the `embed` directive was added in 1.18



**The tech stack**

- Typescript
- React (Next.js)
- TailwindCSS
- Go (Fiber)
- Docker
- Postgres

---

## Usage



```sh
$ docker compose -f "nextjs-golang\docker-compose.yaml" up -d --build 
$ cd frontend
$ npm install
$ npm run dev
$ npm run lint
$ cd backend
$ go mod download
$ make air / make run  .
```





## License

[MIT](https://choosealicense.com/licenses/mit/)









## Project Structure

### Frontend Structure
```
frontend/
├── public/                 # そのまま配信される静的ファイル
│   └── images/
│
├── src/                    # 以降は全部 src にまとめる派が主流
│   ├── app/                # App Router 直下。page.tsx / layout.tsx など
│   │   ├── (marketing)/    # ルートグループ例
│   │   ├── dashboard/      # /dashboard 以下の UI
│   │   │   ├── page.tsx
│   │   │   └── layout.tsx
│   │   └── api/            # Route Handlers (Server Actions) など
│   │
│   ├── components/         # 純粋 UI コンポーネント。再利用可能
│   │   ├── ui/             # Button / Card など Atomic な部品
│   │   └── common/         # ユースケース横断の共通 UI
│   │
│   ├── features/           # ドメインごと (Redux Toolkit / zustand などと相性良)
│   │   └── user/           # 例: ユーザー機能
│   │       ├── api/        # 機能特化 api
│   │       ├── components/ # 機能特化 UI
│   │       ├── hooks.ts/   # 機能特化 カスタムフック
│   │       └── types.ts    # 機能特化 型定義
│   │
│   ├── hooks/              # 共通カスタムフック（useFetch 等）
│   ├── services/           # API 呼び出しや SDK ラッパー
│   ├── lib/                # util / 日付フォーマット / fetch ラッパ

│   ├── constants/          # 定数や Enum
│   ├── styles/             # global.css, tailwind.scss など
│   ├── types/              # 型定義（※ `@types` では賄えないドメイン型）
│   ├── utils/              # アプリ全体で共通して使用する共通関数
│   └── tests/              # Jest / RTL / Vitest など
│
├── .env.example            # フロントエンドでも env 分離推奨
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── openapi.yaml            # API仕様書（フロントエンド用参照・型生成）
└── Dockerfile
```

### Backend Structure
```
backend/
├── api/                    # APIハンドラー
├── config/                 # 設定ファイル
├── database/               # データベース関連
├── middleware/             # ミドルウェア
├── models/                 # データモデル
├── repositories/           # データアクセス層
├── services/               # ビジネスロジック
├── utils/                  # ユーティリティ関数
├── main.go                 # エントリーポイント
├── openapi.yaml            # API仕様書（OpenAPI/Swagger形式）
└── Dockerfile
```







