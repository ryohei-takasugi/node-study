FROM node:22.15.0-bullseye

# 静的コンテンツを配信するシンプルな http サーバをインストールする
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    git \
    && rm -rf /var/lib/apt/lists/*

# カレントワーキングディレクトリとして 'app' フォルダを指定する
WORKDIR /app

# プロジェクトの依存ライブラリをインストールする
#RUN npm install
