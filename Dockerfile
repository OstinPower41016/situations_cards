FROM node:20 as builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install 
COPY . .

RUN yarn build
COPY . .

FROM node:20-alpine as app

COPY --from=builder /app/dist/ /usr/share/nginx/html/
RUN ls -la /usr/share/nginx/html/assets/


