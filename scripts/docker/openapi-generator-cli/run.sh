#!/usr/bin/env sh

docker container run \
    --rm \
    --tty \
    --interactive \
    --mount type=bind,source="${PWD}/openapi",target=/local/openapi \
    --mount type=bind,source="${PWD}/tsconfig.json",target=/local/tsconfig.json \
    --mount type=bind,source="${PWD}/openapitools.json",target=/local/openapitools.json \
    openapi-generator-cli:latest \
    "$@"
