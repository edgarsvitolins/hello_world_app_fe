FROM node:17-alpine
RUN npm install -g serve
WORKDIR /app
COPY my-react-app .
COPY .env .
CMD npm start
