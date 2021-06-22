FROM node:14.16.0-alpine

WORKDIR /var/www/app

# コマンド実行
# linux 最新化、gitインストール、npm最新化、vue-cliインストール
RUN apk update && \
 apk add git curl && \
 npm install -g npm && \
 npm install -g vue-cli && \
 npm install vue@next

EXPOSE 9000