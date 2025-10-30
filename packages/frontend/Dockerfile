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
ARG VITE_API_URL=http://localhost:3000
ARG VITE_TEST_ENV=false
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_TEST_ENV=$VITE_TEST_ENV
RUN bun run build

# Production stage - Nginx
FROM nginx:alpine

# Copy built files
COPY --from=builder /app/packages/frontend/dist /usr/share/nginx/html

# Copy nginx configuration
COPY packages/frontend/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:80 || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

