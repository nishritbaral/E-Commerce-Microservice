FROM node:22.11

WORKDIR /userService

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8001

CMD [ "npm", "start" ]