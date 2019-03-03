FROM node:10.15-alpine

RUN apk --no-cache add \
  autoconf \
  automake \
  g++ \
  libc6-compat \
  libjpeg-turbo-dev \
  libpng-dev \
  make \
  nasm \
  jq \
  curl \
  bash \
  python \
  py-pip \
  groff \
  less \
  mailcap \
  util-linux \
  && \
  pip install --upgrade awscli s3cmd python-magic && \
  apk -v --purge del py-pip && \
  npm install -g yarn
