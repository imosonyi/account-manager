FROM node:15-alpine3.13 AS build
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
