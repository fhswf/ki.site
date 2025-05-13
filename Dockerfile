FROM node:22-alpine AS build

ARG VERSION
ARG BUILD_SHA

ENV PUBLIC_VERSION=$VERSION
ENV PUBLIC_BUILD_SHA=$BUILD_SHA

COPY . /app
WORKDIR /app
RUN  npm ci && npm run build

FROM nginx:stable
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
