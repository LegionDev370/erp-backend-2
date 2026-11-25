FROM node:24-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci && npm install -g pm2

COPY . .

RUN npm run build

ENV NODE_ENV=production

EXPOSE 3000

CMD ["sh", "-c", "npm run db:init && npm run db:verify && exec pm2-runtime start dist/server.js -i max"]
