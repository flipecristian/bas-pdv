FROM node:9.11.2-slim as node

WORKDIR /app

COPY package.json /app/

RUN npm i npm@latest -g

RUN npm install -g @angular/cli@6.0.7

COPY ./ /app/

COPY ./docker/docker-entrypoint.sh /

RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT ["sh", "/docker-entrypoint.sh"]