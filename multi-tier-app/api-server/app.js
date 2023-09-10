const express = require('express');
const app = express();
const port = 8080;

// Define a health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// Define a default route
app.get('/', (req, res) => {
  res.send('Hello, Node.js Backend!');
});

// Start the server
app.listen(port, () => {
  console.log(`Node.js backend is running on port ${port}`);
});

