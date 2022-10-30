# build
# docker build -t marstom/worktimesheet:0.1 .
# docker run -d -p 8081:3000 marstom/worktimesheet:0.1
# 
# 
FROM node:19

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build
expose 8081


CMD ["yarn", "start"]
