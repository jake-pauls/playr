FROM node:lts-alpine
WORKDIR /client

# Install Deps
COPY package.json .
COPY yarn.lock .
RUN yarn

COPY . .

CMD ["yarn", "start"]
