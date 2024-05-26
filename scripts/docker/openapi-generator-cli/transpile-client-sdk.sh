#!/usr/bin/env sh

rm -rf openapi/client-sdk/dist
pnpm tsc --project tsconfig.openapi.json
pnpm cpy 'openapi/client-sdk/src/**/!(*.ts)' 'openapi/client-sdk/dist' --parents

