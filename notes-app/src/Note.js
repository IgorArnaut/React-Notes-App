import "bootstrap/dist/css/bootstrap.min.css";

export default function Note({ note }) {
  return (
    <div className="card card-body bg-warning-subtle">
      <h1 className="fw-bold">{note.title}</h1>
      <hr />
      <p className="fs-5">{note.date}</p>
      <p className="fs-6">{note.text}</p>
    </div>
  );
}
