#Dockerfile
# Development stage
FROM node:20-alpine as development
WORKDIR /app
COPY package.json yarn.lock* ./
RUN yarn install
COPY . .
EXPOSE 5173
CMD ["yarn", "dev", "--host"]

# Build stage
FROM node:20-alpine as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock* .
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

# Production stage
FROM nginx:1.25.3-alpine as production
EXPOSE 80
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]