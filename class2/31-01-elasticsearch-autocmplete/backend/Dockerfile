FROM node:14

WORKDIR /classfolder/
COPY ./package.json /classfolder/
COPY ./yarn.lock /classfolder/
RUN yarn install

COPY . /classfolder/
CMD yarn start:dev