FROM node:15-alpine3.13 AS build
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install --force
COPY . /app
RUN npm run build:single-spa:navbar

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/navbar /etc/nginx/html
