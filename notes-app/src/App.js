import "bootstrap/dist/css/bootstrap.min.css";

import moment from "moment";
import { useState } from "react";

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
    if (e.target.text.value === "") return;
    createNewNote(e);
    e.target.title.value = "";
    e.target.text.value = "";
  };

  return (
    <>
      <div className="row">
        <div className="col-3">
          <NoteForm handleSubmit={handleSubmit} />
        </div>
        <div className="col-9 bg-secondary-subtle">
          <h1 className="fw-bold">Notes</h1>
          <div className="d-flex flex-wrap">
            {notes.map((note, i) => (
              <Note key={i} note={note} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
