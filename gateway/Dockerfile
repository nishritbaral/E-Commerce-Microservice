FROM node:22.11

WORKDIR /gateway

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "start"]

