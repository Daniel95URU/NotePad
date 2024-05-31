function Content({title, body, idNote}) {
    return (  
      <div className="modal fade modal-xl" id={"note" + idNote} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={"note" + idNote + "Label"} aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable modal-fullscreen-xl-down">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={"note" + idNote + "Label"}>Contenido de la Nota</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div className="modal-body">
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                <span className="pe-2">Cerrar</span>
                <i className="bi bi-x-octagon-fill"></i>
              </button>
              <button type="button" className="btn btn-primary" data-bs-target="#editormodal" data-bs-toggle="modal">
                <span className="pe-2">Editar</span>
                <i className="bi bi-pencil-square"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Content;