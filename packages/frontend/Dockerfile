# Build stage
FROM oven/bun:1.2.22-alpine AS builder

WORKDIR /app

# Stap 1: Kopieer workspace
COPY package.json bun.lock ./
COPY packages/frontend ./packages/frontend  
COPY packages/api/package.json ./packages/api/package.json

# Stap 2: Install (werkt nu native op Azure AMD64)
RUN bun install --no-optional || bun install

# Stap 3: Build frontend
WORKDIR /app/packages/frontend
ARG VITE_TEST_ENV=false
ARG VITE_ENABLE_MODEL_CONTROLS=false
ARG VITE_ENABLED_AGENTS=cs-wmo
ARG VITE_ENABLE_FEEDBACK=true
ENV VITE_TEST_ENV=$VITE_TEST_ENV
ENV VITE_ENABLE_MODEL_CONTROLS=$VITE_ENABLE_MODEL_CONTROLS
ENV VITE_ENABLED_AGENTS=$VITE_ENABLED_AGENTS
ENV VITE_ENABLE_FEEDBACK=$VITE_ENABLE_FEEDBACK
RUN bun run build

# Production stage - Nginx
FROM nginx:alpine

# Installeer bash voor entrypoint script
RUN apk add --no-cache bash

# Copy built files
COPY --from=builder /app/packages/frontend/dist /usr/share/nginx/html

# Copy nginx template (NIET naar conf.d! Wordt runtime gegenereerd)
COPY packages/frontend/nginx.conf.template /etc/nginx/templates/nginx.conf.template

# Copy entrypoint script
COPY packages/frontend/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:80/health || exit 1

# Gebruik custom entrypoint dat nginx.conf genereert en nginx start
ENTRYPOINT ["/entrypoint.sh"]

