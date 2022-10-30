# build
# docker build -t marstom/worktimesheet:0.1 .
# docker run -d -p 8081:3000 marstom/worktimesheet:0.1 .
# 
# 
FROM node:19

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
RUN yarn build
COPY .env.prod ./
expose 8081


CMD ["yarn", "start"]
