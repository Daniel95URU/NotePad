import Editor from "./components/Editor"
import Note from "./components/Note"
import Masonry from "react-masonry-css"

function App() {
  const Notas = [ 
    {title: 'PRUEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', body: 'croooooooooooooooooooooooooooooooooooop ', id: 1}, 
    {title: 'efg', body: 'Bloc_¨*@@1!"#||', id: 2}, 
    {title: 'hij', body: 'Tiki taka ', id: 3}, 
    {title: 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk', body: 'Lolutptium. ', id: 4}, 
    {title: 'pad', body: 'Pad', id: 5}, 
    {title: 'daniel', body: '', id: 6}, 
  ] 

  return (
    <>
      <Editor />
      <div className="container text-center mt-5">
        <Masonry breakpointCols={{ default: 3, 1200: 2, 768: 1 }} className="my-masonry-grid d-flex" columnClassName="my-masonry-grid_column"> {/* 3 columnas >= 1200px * 2 columnas >= 768px y 1 columna de soporte para res < 768px */}
          {Notas.map((note) => { 
            return <Note title={note.title} body={note.body} idNote={note.id} key={note.id}/> 
          })} 
        </Masonry>
      </div>
      <div className="position-fixed bottom-0 end-0 m-4 z-2">
        <button className="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#editormodal"> {/* Agregar el pop-up del modal */}
          <span className="pe-2">
            Nueva Nota
          </span>
          <i className="bi bi-journal-plus fs-2"></i>
        </button>
      </div>
    </>
  )
}

export default App