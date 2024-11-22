FROM node:20-alpine as base
WORKDIR /usr/src/app
COPY package*.json ./

FROM base as development
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "npm", "run", "start" ]
