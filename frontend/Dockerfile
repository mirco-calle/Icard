#Dockerfile
#ESTO ES UNICAMENTE PARA LAS DEPENDENCIAS DE DESARROLLO 
FROM node:19-alpine3.15 as dev-deps
WORKDIR /app
COPY package.json package.json
RUN yarn install --frozen-lockfile

#AQUI SE VA CREAR LA CARPETA DIST 
FROM node:19-alpine3.15 as builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
# RUN yarn test SI FUERA NECESARIO
RUN yarn build


FROM nginx:1.23.3 as prod
EXPOSE 80
COPY --from=builder /app/dist  /usr/share/nginx/html
COPY assets/ /usr/share/nginx/html/assets
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

CMD ["nginx","-g","daemon off;"]