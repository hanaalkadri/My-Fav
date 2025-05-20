# 1. Gebruik een officiële Node.js base image
FROM node:18

# 2. Stel de werkdirectory in
WORKDIR /app

# 3. Kopieer package.json en package-lock.json
COPY package*.json ./

# 4. Installeer dependencies
RUN npm install

# 5. Kopieer alle projectbestanden
COPY . .

# 6. Build de app (voor productie)
RUN npm run build

# 7. Gebruik een eenvoudige server om de app te draaien
RUN npm install -g serve

# 8. Stel de poort in waarop de container luistert
EXPOSE 64072

# 9. Start de server
CMD ["serve", "-s", "dist", "-l", "64072"]
