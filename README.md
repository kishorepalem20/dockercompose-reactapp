# dockercompose-reactapp
creating docker frontend,backend and database to build application to run on localhost

Scenario: You are a DevOps engineer working on a project to containerize a multi-tier application. The application consists of a frontend written in React, a backend API using Node.js, and a PostgreSQL database. Your task is to create Dockerfiles for each component, configure them to communicate with each other, and use Docker Compose to manage the entire application stack.

Problem: Create Dockerfiles for the React frontend, Node.js backend, and PostgreSQL database based on the following requirements:

React Frontend (web-client):

Use an official Node.js 14 image as the base image.
Create a working directory in the container (e.g., /app) and set it as the working directory.
Copy the package.json and package-lock.json files from your local directory to the /app directory in the container.
Run npm install to install the frontend dependencies.
Copy the React frontend code (all files except node_modules, package.json, and package-lock.json) to the /app directory in the container.
Expose port 3000 for the React application.
Implement a health check endpoint at /health that responds with a 200 OK status when the frontend is healthy.
Use a custom Docker image name for the React frontend.
Node.js Backend (api-server):

Use an official Node.js 14 image as the base image.
Create a working directory in the container (e.g., /app) and set it as the working directory.
Copy the package.json and package-lock.json files from your local directory to the /app directory in the container.
Run npm install to install the backend API dependencies.
Copy the Node.js backend code (all files except node_modules, package.json, and package-lock.json) to the /app directory in the container.
Expose port 8080 for the Node.js backend.
Set environment variables as needed for configuring the backend, including the connection to the PostgreSQL database.
Implement a health check endpoint at /health that responds with a 200 OK status when the backend is healthy.
Use a custom Docker image name for the Node.js backend.
PostgreSQL Database (postgres-db):

Use an official PostgreSQL 13 image as the base image.
Set environment variables to configure the PostgreSQL database (e.g., POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD).
Expose the default PostgreSQL port (5432) for communication.
Ensure that the PostgreSQL data is persisted outside the container using a Docker volume.
Use a custom Docker image name for the PostgreSQL database.
Docker Compose:

Create a Docker Compose file (docker-compose.yml) that defines three services: web-client, api-server, and postgres-db.
Configure a custom Docker network for the services.
Set up the PostgreSQL database to accept connections from the Node.js backend.
Map port 3000 on the host to port 3000 on the web-client container.
Map port 8080 on the host to port 8080 on the api-server container.
Ensure that the web-client and api-server components can communicate with the postgres-db component.
Scale the web-client and api-server services to run two instances each.

