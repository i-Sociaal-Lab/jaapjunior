# Build stage
FROM oven/bun:1.2.22-alpine AS builder

WORKDIR /app

# Install build dependencies voor native modules (better-sqlite3)
RUN apk add --no-cache python3 make g++

# Stap 1: Kopieer workspace files
COPY package.json bun.lock ./
COPY packages/api ./packages/api

# Stap 2: Install (werkt nu native op Azure AMD64)
RUN bun install --no-optional || bun install

# Stap 3: Build API
WORKDIR /app/packages/api
RUN bun run build

# Production stage  
FROM oven/bun:1.2.22-alpine

WORKDIR /app

# Kopieer built artifacts + runtime files + node_modules
COPY --from=builder /app/packages/api/dist ./dist
COPY --from=builder /app/packages/api/jw ./jw
COPY --from=builder /app/packages/api/wmo ./wmo
COPY --from=builder /app/packages/api/cs-wmo ./cs-wmo
COPY --from=builder /app/node_modules ./node_modules

# Runtime setup
RUN apk add --no-cache curl
RUN mkdir -p /app/data

# Set environment
ENV NODE_ENV=production
ENV PORT=3000

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
  CMD curl -f http://localhost:3000/api/v1 || exit 1

# Start application
CMD ["bun", "run", "dist/index.js"]

