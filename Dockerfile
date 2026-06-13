# syntax=docker/dockerfile:1

# ---------------------------------------------------------------------------
# Base: shared runtime and working directory
# ---------------------------------------------------------------------------
FROM node:20-alpine AS base
WORKDIR /app

# ---------------------------------------------------------------------------
# Dependencies: install packages
# Layer is cached until package.json or package-lock.json changes.
# ---------------------------------------------------------------------------
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# ---------------------------------------------------------------------------
# Build: compile the Next.js app
# ---------------------------------------------------------------------------
FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---------------------------------------------------------------------------
# Release: minimal runtime image
# ---------------------------------------------------------------------------
FROM base AS release

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY package.json ./

EXPOSE 3000

USER node

CMD ["npm", "start"]
