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
    { title: "Lorem ipsum", date: "2024-12-06", text: "Lorem ipsum dolor sit amet" },
    { title: "Consectetur", date: "2024-12-06", text: "Consectetur adipiscing elit" },
    { title: "Sed do eiusmod", date: "2024-12-06", text: "Sed do eiusmod tempor incididunt" },
  ];

  const [notes, setNotes] = useState(noteList);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.title.value);
    console.log(e.target.text.value);
  };

  return (
    <>
      {noteList.map((note, i) => (
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
