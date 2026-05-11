FROM node:22.22.2-slim

WORKDIR /usr/src/action
COPY . .
RUN corepack enable && yarn install --production
ENTRYPOINT ["node", "/usr/src/action/src/index.js"]

