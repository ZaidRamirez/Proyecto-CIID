# Etapa 1: Construir la aplicación React
FROM node:14 as build
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Configurar Nginx y servir la aplicación construida
FROM nginx:alpine
# Eliminar la configuración predeterminada de Nginx
RUN rm -rf /usr/share/nginx/html/*
# Copiar los archivos construidos de la etapa de construcción a la ubicación de Nginx
COPY --from=build /app/dist /usr/share/nginx/html
# Copiar la configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Exponer el puerto 80
EXPOSE 80
# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
