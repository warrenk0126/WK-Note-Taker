// Import required modules
const express = require('express');
const path = require('path');
const fs = require('fs');

// Create an instance of express
const app = express();
// Set the port for the server
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Middleware for serving static files
app.use(express.static('public'));

// Import API routes from the routes directory
const apiRoutes = require('./routes/apiRoutes');
// Use the API routes with the /api prefix
app.use('/api', apiRoutes);

// Import HTML routes from the routes directory
const htmlRoutes = require('./routes/htmlRoutes');
// Use the HTML routes with the / prefix
app.use('/', htmlRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
