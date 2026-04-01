# Stage 1: Build
FROM node:20-slim AS builder

WORKDIR /app

# Copy package manifests for better caching
COPY package.json package-lock.json ./

# Install dependencies (frozen-lockfile equivalent for npm)
RUN npm ci

# Copy full source
COPY . .

# Build the production bundle
RUN npm run build

# Stage 2: Production Server
FROM nginx:alpine

# Copy custom nginx config to handle SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build artifacts to nginx public directory
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
