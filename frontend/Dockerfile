FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

ARG VITE_API_URL

RUN npm ci

COPY . .

RUN npm run build


FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80