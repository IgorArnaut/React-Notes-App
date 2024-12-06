export default function NoteForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" />
      <br />
      <label htmlFor="text">Title</label>
      <textarea id="text"></textarea>
      <br />
      <input type="submit" value="Save" />
    </form>
  );
}
