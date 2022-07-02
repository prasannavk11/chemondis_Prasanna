FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install --silent

# Bundle app source
COPY . .

#Expose port and start application
EXPOSE 3000

CMD ["npm", "start"]
