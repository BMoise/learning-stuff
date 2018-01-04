console.log("Starting notes.js...");

const fs = require("fs");
const _ = require("lodash");

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync("notes-data.json");
    return (notes = JSON.parse(notesString));
  } catch (e) {}
};

var saveNotes = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

var addNote = (title, body) => {
  console.log("Adding note, ", title, body);

  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  return fetchNotes();
  console.log("getting all notes");
};

var getNote = title => {
  notes = fetchNotes();
  myNote = notes.filter(note => note.title === title);
  return myNote[0];
  console.log("getting note ", title);
};

var removeNote = title => {
  var notes = fetchNotes();
  filteredNotes = notes.filter(note => note.title !== title);
  saveNotes(filteredNotes);
  console.log("removing note ", title);

  return notes.length !== filteredNotes.length;
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
