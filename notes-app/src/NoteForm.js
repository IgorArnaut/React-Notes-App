import "bootstrap/dist/css/bootstrap.min.css";

export default function NoteForm({ handleSubmit }) {
  return (
    <>
      <h1 className="fw-bold">Create a Note</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <br />
        <input type="text" id="title" className="form-control" />
        <br />
        <label htmlFor="text" className="form-label">
          Text
        </label>
        <br />
        <textarea id="text" className="form-control"></textarea>
        <br />
        <input type="submit" value="Save" className="btn btn-primary" />
      </form>
    </>
  );
}
