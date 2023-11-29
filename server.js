const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// API Routes
const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);

// HTML Routes
const htmlRoutes = require('./routes/htmlRoutes');
app.use('/', htmlRoutes);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));