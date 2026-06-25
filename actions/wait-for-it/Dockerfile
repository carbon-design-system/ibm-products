FROM node:22.23.1-slim

WORKDIR /usr/src/action
COPY package.json ./
RUN corepack enable && yarn install --production
COPY src ./src
ENTRYPOINT ["node", "/usr/src/action/src/index.js"]

