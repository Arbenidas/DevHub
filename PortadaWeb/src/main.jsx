import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NavbarCV, {} from './Components/VisualizadorCV/NavbarCV.jsx'
import ComponenteCompuestoCV from './Components/VisualizadorCV/ComponenteCompuestoCV.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<NavbarCV/>
<ComponenteCompuestoCV/>
  {/* <App /> */}
  </React.StrictMode>,
)
