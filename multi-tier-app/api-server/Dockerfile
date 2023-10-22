# Use the official Node.js 14 image as the base image
FROM node:14

# Create a working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install backend dependencies using npm
RUN npm install

# Copy the Node.js backend code to /app
COPY . .

# Expose port 8080
EXPOSE 8080

# Set environment variables for configuring the backend
ENV POSTGRES_HOST=postgres-db
ENV POSTGRES_PORT=5432
ENV POSTGRES_DB=mydb
ENV POSTGRES_USER=myuser
ENV POSTGRES_PASSWORD=mypassword

# Implement a health check endpoint
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 CMD curl -f http://localhost:8080/health || exit 1

# Start the Node.js backend application
#this is to teach -test 
CMD ["npm", "start"]

