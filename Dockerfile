FROM node:20.8.0-alpine3.17 as build
ARG API_KEY
ENV VITE_API_KEY $API_KEY
WORKDIR /app
COPY package*.json /app/
RUN yarn install
COPY ./ /app
RUN npm run build

FROM nginx:1.25.2-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist /usr/share/nginx/html
