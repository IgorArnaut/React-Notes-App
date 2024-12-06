import { useState } from "react";

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
  const noteList = [
    { title: "Lorem ipsum", date: "12/6/2024", text: "Lorem ipsum dolor sit amet" },
    { title: "Consectetur", date: "12/6/2024", text: "Consectetur adipiscing elit" },
    { title: "Sed do eiusmod", date: "12/6/2024", text: "Sed do eiusmod tempor incididunt" },
  ];

  const [notes, setNotes] = useState(noteList);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.title.value === "") return;
    if (e.target.text.value === "") return;
    const newNote = {
      title: e.target.title.value,
      date: new Date().toLocaleDateString("en-US"),
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
