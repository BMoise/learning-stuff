console.log("Starting App.js..");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

const command = process.argv[2];
const argv = yargs.argv;
console.log("Yargs: ", argv);

if (command === "add") {
  var note = notes.addNote(argv.title, argv.body);
  if (!note) {
    console.log("ERROR");
  } else {
    console.log(`Note was created: ${note.title}`);
  }
} else if (command === "list") {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
} else if (command === "read") {
  var note = notes.getNote(argv.title);
  if (!note) {
    console.log("ERROR");
  } else {
    console.log(`Title: ${note.title}, Body: ${note.body}`);
  }
  notes.getNote(argv.title);
} else if (command === "remove") {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? "No has been removed!" : "Note was not removed";
  console.log(message);
}
