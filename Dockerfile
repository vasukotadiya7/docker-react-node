FROM node:20.5-alpine as builder

WORKDIR /app

COPY ./reactweb/package.json .

RUN npm i

COPY ./reactweb .

RUN npm run build

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/build ./build

COPY ./node/package.json .

RUN npm i

COPY ./node .

CMD [ "npm","start" ]



