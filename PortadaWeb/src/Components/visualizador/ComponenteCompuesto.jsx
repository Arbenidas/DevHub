import ComponenteAside from "./ComponenteAside.jsx";
import { useState } from "react";
import ComponenteInfoVideo from "./componenteInfoVideos.jsx";
import Footer from "./FooterVC.jsx";
export default function ComponenteCompuesto(props) {
  let lecciones  = Object.values(props.curso)
  let componentesAside = [];
  for (let i = 0; i < lecciones.length; i++) {
    const leccion = lecciones[i];
    componentesAside.push(
      <ComponenteAside
        key={i}
        data1={`#flush-collapse${i + 1}`}
        data2={`flush-collapse${i + 1}`}
        nombreModulo={leccion.titulo}
        DescripcionDelContenido={leccion.contenido}
        videoUrl = {leccion.url_columna}
      />
    );
  }

  return (
    <>
      <div className="container-fluid" data-bs-theme="dark">
        <div className="row">
          <div className="col-3 no-padding-left">
            <div className="accordion accordion-flush" id="accordion1">
            {componentesAside}
            </div>
          </div>
          <ComponenteInfoVideo   descripcion = "" herramientas = "" comunidad = "" />
        </div>
      </div>
      <Footer/>
    </>
  );
}
