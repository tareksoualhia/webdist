FROM node:16.17.0
RUN mkdir -p /opt/client

COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4200
CMD [ "npm", "start" ] 


