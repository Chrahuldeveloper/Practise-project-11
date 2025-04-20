# Use an official Node.js image
FROM node:20

# Set working directory
WORKDIR /src

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app files
COPY . .

# Expose the port your app runs on (e.g., 3000)
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
