FROM --platform=linux/amd64 node:18.17.0-alpine3.18 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM --platform=linux/amd64 node:18.17.0-alpine3.18

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 8081

CMD ["node", "--require", "./dist/instrumentation.js", "./dist/app.js"]