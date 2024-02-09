import ComponenteAside from "./ComponenteAside.jsx";
import ComponenteInfoVideo from "./componenteInfoVideos.jsx";
import Footer from "./FooterVC.jsx";
export default function ComponenteCompuesto(props) {
  console.log("Esta es una impresion")
  let lecciones  = Object.values(props.curso)
  lecciones.map((leccion)=>{
    console.log("leccion ------ "+leccion.titulo)
    console.log("contenido ------ "+leccion.contenido)
  })
  return (
    <>
      <div className="container-fluid" data-bs-theme="dark">
        <div className="row">
          <div className="col-3 no-padding-left">
            <div className="accordion accordion-flush" id="accordion1">
              <ComponenteAside
                data1="#flush-collapse1"
                data2="flush-collapse1"
                nombreModulo={props.nombreDelModulo1}
                DescripcionDelContenido={props.DescripcionDelContenido1}
              />
              <ComponenteAside
                data1="#flush-collapse2"
                data2="flush-collapse2"
                nombreModulo={props.nombreDelModulo2}
                DescripcionDelContenido={props.DescripcionDelContenido2}
              />
              <ComponenteAside
                data1="#flush-collapse3"
                data2="flush-collapse3"
                nombreModulo={props.nombreDelModulo3}
                DescripcionDelContenido={props.DescripcionDelContenido3}
              />
               <ComponenteAside
                data1="#flush-collapse4"
                data2="flush-collapse4"
                nombreModulo={props.nombreDelModulo4}
                DescripcionDelContenido={props.DescripcionDelContenido4}
              />
               <ComponenteAside
                data1="#flush-collapse5"
                data2="flush-collapse5"
                nombreModulo={props.nombreDelModulo5}
                DescripcionDelContenido={props.DescripcionDelContenido5}
              />

            </div>
          </div>
          <ComponenteInfoVideo descripcion = "" herramientas = "" comunidad = "" />
        </div>
      </div>
      <Footer/>
    </>
  );
}
