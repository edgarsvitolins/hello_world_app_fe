FROM node:17-alpine
WORKDIR /app
COPY my-react-app .
RUN npm install
CMD npm start
