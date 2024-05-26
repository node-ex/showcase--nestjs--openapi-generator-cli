#!/usr/bin/env sh

docker image build \
    --file "${PWD}/docker/openapi-generator-cli/Dockerfile" \
    --tag openapi-generator-cli:latest \
    .
