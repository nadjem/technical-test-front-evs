# Dockerfile
FROM node:18 as build

WORKDIR /app
RUN npm install -g @angular/cli
COPY package*.json ./
RUN npm install

COPY .. .
RUN ng build
FROM nginx:alpine
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
