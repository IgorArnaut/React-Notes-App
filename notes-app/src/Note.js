export default function Note({ note }) {
  return (
    <div>
      <h1>{note.title}</h1>
      <h2>{note.date}</h2>
      <p>{note.text}</p>
    </div>
  );
}
