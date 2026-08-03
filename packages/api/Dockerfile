# Build stage
FROM oven/bun:1.2.22-alpine AS builder
WORKDIR /app
RUN apk add --no-cache python3 make g++
COPY package.json bun.lock ./
COPY packages/api ./packages/api
RUN bun install --no-optional || bun install
WORKDIR /app/packages/api
RUN bun run build

# Production stage
FROM oven/bun:1.2.22-alpine
WORKDIR /app
RUN apk add --no-cache curl wget
RUN wget -q https://github.com/qdrant/qdrant/releases/download/v1.17.1/qdrant-x86_64-unknown-linux-musl.tar.gz \
    && tar -xzf qdrant-x86_64-unknown-linux-musl.tar.gz \
    && mv qdrant /usr/local/bin/qdrant \
    && rm qdrant-x86_64-unknown-linux-musl.tar.gz
COPY --from=builder /app/packages/api/dist ./dist
COPY --from=builder /app/packages/api/jw ./jw
COPY --from=builder /app/packages/api/wmo ./wmo
COPY --from=builder /app/packages/api/cs-wmo ./cs-wmo
COPY --from=builder /app/node_modules ./node_modules
RUN mkdir -p /app/data /qdrant/storage
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000
COPY packages/api/start.sh /start.sh
RUN sed -i "s/\r//" /start.sh
RUN chmod +x /start.sh
CMD ["/start.sh"]
