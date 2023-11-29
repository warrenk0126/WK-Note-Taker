// Import required modules
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

// Route to get all notes
router.get('/notes', (req, res) => {
  // Read the db.json file and return all saved notes as JSON
  let notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8'));
  res.json(notes);
});

// Route to create a new note
router.post('/notes', (req, res) => {
  // Read the db.json file
  let notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8'));
  // Create a new note with a unique id using the uuid package
  let newNote = req.body;
  newNote.id = uuidv4();
  // Add the new note to the array of notes
  notes.push(newNote);
  // Write the updated notes back to the db.json file
  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes));
  // Return the new note to the client
  res.json(newNote);
});

// Route to delete a note
router.delete('/notes/:id', (req, res) => {
  // Read the db.json file
  let notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8'));
  // Get the id of the note to delete
  let noteId = req.params.id;
  // Filter out the note with the given id
  notes = notes.filter(note => note.id !== noteId);
  // Write the filtered notes back to the db.json file
  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes));
  // Return the remaining notes to the client
  res.json(notes);
});

// Export the router
module.exports = router;
