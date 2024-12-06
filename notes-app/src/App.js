import { useState } from "react";
import moment from "moment";

import Note from "./Note";
import NoteForm from "./NoteForm";

export default function App() {
  const noteList = [];
  const [notes, setNotes] = useState(noteList);

  const createNewNote = (e) => {
    const newNote = {
      title: e.target.title.value,
      date: moment().format("MM/DD/yyyy hh:mm"),
      text: e.target.text.value,
    };
    setNotes([...notes, newNote]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.title.value === "") return;
    if (e.target.text.value === "") return;
    createNewNote(e);
  };

  return (
    <>
      {notes.map((note, i) => (
        <Note key={i} note={note} />
      ))}
      <NoteForm handleSubmit={handleSubmit} />
    </>
  );
}
