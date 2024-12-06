export default function NoteForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <br />
      <input type="text" id="title" />
      <br />
      <label htmlFor="text">Text</label>
      <br />
      <textarea id="text"></textarea>
      <br />
      <input type="submit" value="Save" />
    </form>
  );
}
