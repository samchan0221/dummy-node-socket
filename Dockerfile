FROM node:14.8.0-alpine3.12

WORKDIR /usr/src/app

# install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm ci

# compile
COPY . .
RUN npm run tsc

# expose ports
EXPOSE 3000 3001