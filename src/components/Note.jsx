import Content from "./Content";

function Note({title, body, idNote}) {
  return (  
    <div className="mx-2 mb-3">
      <div className="card">
        <div className="ms-auto z-2">
          <button className="btn btn-sm btn-outline-danger d-flex align-items-center mt-2 me-3">
            <span className="pe-1">Borrar</span>
            <i className="bi bi-trash3 fs-6"></i>
          </button>
        </div>
        <div className="card-body">
          <h2>{title}</h2>
          <p>{body}</p>
          <a type="button" className="stretched-link" data-bs-toggle="modal" data-bs-target={"#note" + idNote}></a>
        </div>
      </div>
      <Content title={title} body={body} idNote={idNote} />
    </div>
  );
}

export default Note;