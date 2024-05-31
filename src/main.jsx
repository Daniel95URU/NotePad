import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './scss/styles.scss'
//este import es para traer todo Bootstrap
import * as bootstrap from 'bootstrap'
// Para los estilos usé bootstrap y scss, revisa la documentacion que te pasé
import EditorContext from './components/Edit.jsx' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EditorContext>
      <App />
    </EditorContext>
  </React.StrictMode>,
)
