# PRODUCTION ENV
FROM node:alpine

WORKDIR /app
COPY . /app
COPY package.json .
RUN npm install
RUN npm run build
COPY . .

CMD ["npm", "run", "start"]

# DEV ENV
# FROM node:alpine

# WORKDIR /app
# COPY package.json .
# RUN npm install
# COPY . .

# CMD ["npm", "run", "dev"]