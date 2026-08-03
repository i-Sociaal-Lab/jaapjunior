#!/bin/sh
qdrant &
sleep 3
bun run /app/dist/index.js
