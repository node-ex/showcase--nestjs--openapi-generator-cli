# Use the official base image for Node.js with Alpine Linux
FROM node:20.13.1-alpine3.18

RUN apk update \
    && apk add openjdk11 \
    && rm -rf /var/cache/apk/*
ENV JAVA_HOME=/usr/lib/jvm/java-11-openjdk
ENV PATH=$JAVA_HOME/bin:$PATH

RUN npm install --global pnpm

RUN node --version \
    && npm --version \
    && java -version \
    && javac -version

WORKDIR /local

COPY \
    package.json \
    pnpm-lock.yaml \
    ./
RUN pnpm install

ENTRYPOINT [ "pnpm", "openapi-generator-cli" ]
