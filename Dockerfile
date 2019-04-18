FROM node:10
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app/server
RUN npm install
EXPOSE 3000
CMD ["npm","start"]