FROM node:20-alpine
WORKDIR /app

# Copia os arquivos de dependência primeiro para aproveitar o cache
COPY package*.json ./
RUN npm install

# Copia o resto do código do frontend
COPY . .

# Expõe a porta padrão do Vite
EXPOSE 5173

# Roda o servidor de desenvolvimento
CMD ["npm", "run", "dev"]
