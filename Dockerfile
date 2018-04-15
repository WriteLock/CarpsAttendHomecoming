FROM node:9.11-alpine

ENV NODE_ENV=production
ENV DEBUG=false
ENV DATABASE_URL=mongo

ENV PORT=80

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /usr/app/cah && cp -a /tmp/node_modules /usr/app/cah

COPY . /usr/app/cah/
WORKDIR /usr/app/cah

RUN rm -f build
RUN mkdir build && chmod 777 /usr/app/cah/build
RUN npm run deploy

EXPOSE $PORT

CMD [ "npm", "run", "serve" ]