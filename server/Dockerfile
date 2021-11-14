FROM node:alpine
WORKDIR /app

# Install Deps
COPY package.json .
COPY yarn.lock .
RUN yarn

# Build TypeScript
COPY . .
RUN yarn build

CMD ["yarn", "start"]
