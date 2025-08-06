# Bun + Hono API Template

Bunランタイムを使用したHonoベースのWebAPIテンプレートプロジェクトです。

## 技術スタック

- **ランタイム**: [Bun](https://bun.sh/) - 高速なJavaScriptランタイム
- **フレームワーク**: [Hono](https://hono.dev/) - 軽量で高速なWebフレームワーク
- **言語**: TypeScript
- **テスト**: Bun Test
- **リンター**: ESLint
- **フォーマッター**: Prettier
- **データベース**: PostgreSQL (Docker Compose)

## 必要な環境

- Bun v1.0以上
- Docker & Docker Compose (データベース使用時)

## セットアップ

### 1. 依存関係のインストール

```bash
cd api
bun install
```

### 2. データベースの起動 (オプション)

```bash
docker compose up -d
```

PostgreSQLがポート5432で起動します。
- ユーザー名: `app_user`
- パスワード: `secret`
- データベース名: `app_db`

## 開発

### 開発サーバーの起動

```bash
bun run dev
```

ホットリロード機能付きで開発サーバーが起動します。デフォルトで `http://localhost:3000` でアクセス可能です。

## APIエンドポイント

| メソッド | パス | 説明 |
|---------|------|------|
| GET | `/` | Hello Honoメッセージを返す |
| GET | `/books` | 書籍リストを取得 |
| POST | `/books` | 新しい書籍を追加 |
| POST | `/math/sum` | 数値の合計を計算 |

## スクリプト

```bash
# 開発サーバー起動（ホットリロード付き）
bun run dev

# リント実行
bun run lint

# リント自動修正
bun run lint:fix

# フォーマットチェック
bun run format

# フォーマット実行
bun run format:write
```

## テスト

```bash
bun test
```

## プロジェクト構造

```
bun-hono-template/
├── api/
│   ├── src/
│   │   ├── app.ts          # メインアプリケーション
│   │   └── module/
│   │       ├── auth/        # 認証モジュール
│   │       ├── books/       # 書籍管理モジュール
│   │       ├── hello/       # Helloモジュール
│   │       └── math/        # 数学計算モジュール
│   ├── tests/               # テストファイル
│   ├── package.json
│   ├── tsconfig.json
│   ├── eslint.config.mjs
│   ├── compose.yaml         # Docker Compose設定
│   └── Dockerfile
└── README.md
```

## ライセンス

このプロジェクトはテンプレートとして提供されています。
