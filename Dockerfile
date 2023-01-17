FROM node:latest AS build
COPY . /app
WORKDIR /app
RUN  npm install && npm run build

FROM nginx:latest
COPY --from=build /app/dist /usr/share/nginx/html