// Import required modules
const path = require('path');
const router = require('express').Router();

// Route that sends the user to the notes page
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Default route that sends the user to the home page
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Export the router
module.exports = router;
