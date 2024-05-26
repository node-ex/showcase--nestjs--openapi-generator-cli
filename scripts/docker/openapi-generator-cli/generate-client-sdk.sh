#!/usr/bin/env sh

./scripts/docker/openapi-generator-cli/run.sh generate \
    --generator-name typescript-fetch \
    --config ./openapitools.json \
    --input-spec ./openapi/spec/openapi.json \
    --output ./openapi/client-sdk/src
