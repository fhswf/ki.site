FROM node:19-alpine AS build
COPY . /app
WORKDIR /app
RUN  npm install && npm run build

FROM nginx:stable
COPY --from=build /app/dist /usr/share/nginx/html