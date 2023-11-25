FROM node:17-alpine

WORKDIR /app

COPY package.json .

RUN npm instal

COPY . .

CMD ["npm", "run", "dev"]