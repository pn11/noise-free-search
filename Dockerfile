# コードを実行するコンテナイメージ
FROM ubuntu:latest

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sourc es.list.d/yarn.list

RUN sudo apt-get -y update && sudo apt-get -y install yarn

