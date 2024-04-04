FROM node:20.12-alpine as development

USER node

WORKDIR /home/node/app

COPY  --chown=node:node package*.json ./

RUN npm install

COPY --chown=node:node . .

CMD npm run dev