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
  return (
    <>
      {noteList.map((note) => (
        <Note note={note} />
      ))}
    </>
  );
}
