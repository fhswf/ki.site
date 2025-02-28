FROM node:19-alpine AS build
COPY . /app
WORKDIR /app
RUN  npm ci && npm run build

FROM nginx:stable
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
