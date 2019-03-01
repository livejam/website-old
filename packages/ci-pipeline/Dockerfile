FROM node:10.15-alpine

RUN apk --no-cache add \
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
