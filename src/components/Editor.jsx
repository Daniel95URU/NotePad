import { useContext, useEffect, useRef } from "react";
import { Edit } from "./Edit";

function Editor() {
    const {initEditor, editRef} = useContext(Edit)
    const editorRef = useRef(null)

    const handleClick = async () => {
    const data = await editRef.current.save()
    console.log(data);
  }

    useEffect(() => {
    if (!editorRef.current) {
      initEditor()
      editorRef.current = true
        }
    },[])

    return (  
      <div className="modal fade modal-lg" id="editormodal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="editormodalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-lg-down">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editormodalLabel">Editor</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div className="modal-body">
                <div id="editorjs"></div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleClick}>Guardar nota</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
   //Modal de Bootstrap para guardar y crear notas (agregar botón de editar)
  export default Editor;