import { useState } from "react";
import moment from "moment";

import Note from "./Note";
import NoteForm from "./NoteForm";

export default function App() {
  const noteList = [];
  const [notes, setNotes] = useState(noteList);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.title.value === "") return;
    if (e.target.text.value === "") return;
    const newNote = {
      title: e.target.title.value,
      date: moment().format("MM/DD/yyyy hh:mm"),
      text: e.target.text.value,
    };
    console.log(newNote);
    setNotes([...notes, newNote]);
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
