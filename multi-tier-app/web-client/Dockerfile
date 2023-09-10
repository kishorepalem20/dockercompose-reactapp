# Use the official Node.js 14 image as the base image
FROM node:14

# Create a working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install frontend dependencies using npm
RUN npm install

# Copy the React frontend code to /app
COPY . .

# Expose port 3000
EXPOSE 3000

# Implement a health check endpoint
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 CMD curl -f http://localhost:3000/health || exit 1

# Start the React frontend application
CMD ["npm", "start"]

