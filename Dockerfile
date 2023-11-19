FROM node:20.9.0-alpine AS dev

RUN apk add bash git

WORKDIR /application
