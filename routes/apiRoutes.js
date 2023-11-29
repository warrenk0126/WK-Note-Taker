const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

router.get('/notes', (req, res) => {
  let notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8'));
  res.json(notes);
});

router.post('/notes', (req, res) => {
  let notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8'));
  let newNote = req.body;
  newNote.id = uuidv4();
  notes.push(newNote);
  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes));
  res.json(newNote);
});

router.delete('/notes/:id', (req, res) => {
  let notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8'));
  let noteId = req.params.id;
  notes = notes.filter(note => note.id !== noteId);
  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes));
  res.json(notes);
});

module.exports = router;