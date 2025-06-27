# Base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Build TypeScript code
RUN npm run build

# Expose the app port
EXPOSE 5000

# Run the compiled app
CMD ["npm", "start"]