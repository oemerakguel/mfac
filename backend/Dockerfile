FROM node:22-alpine

RUN apk add --no-cache curl

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY src ./src

EXPOSE 3000

CMD [ "npm", "start"]