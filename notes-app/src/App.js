import { useState } from "react";
import moment from "moment";

function Note({ note }) {
  return (
    <div>
      <h1>{note.title}</h1>
      <h2>{note.date}</h2>
      <p>{note.text}</p>
    </div>
  );
}

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

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" />
        <br />
        <label htmlFor="text">Title</label>
        <textarea id="text"></textarea>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
