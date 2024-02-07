import ComponenteAside from "./ComponenteAside.jsx";
import ComponenteInfoVideo from "./componenteInfoVideos.jsx";
import Footer from "./FooterVC.jsx";
export default function ComponenteCompuesto(props) {
  return (
    <>
      <div class="container-fluid" data-bs-theme="dark">
        <div class="row">
          <div class="col-3 no-padding-left">
            <div class="accordion accordion-flush" id="accordion1">
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
               <ComponenteAside
                data1="#flush-collapse6"
                data2="flush-collapse6"
                nombreModulo={props.nombreDelModulo6}
                DescripcionDelContenido={props.DescripcionDelContenido6}
              />
               <ComponenteAside
                data1="#flush-collapse7"
                data2="flush-collapse7"
                nombreModulo={props.nombreDelModulo7}
                DescripcionDelContenido={props.DescripcionDelContenido7}
              />
               <ComponenteAside
                data1="#flush-collapse8"
                data2="flush-collapse8"
                nombreModulo={props.nombreDelModulo8}
                DescripcionDelContenido={props.DescripcionDelContenido8}
              />
               <ComponenteAside
                data1="#flush-collapse9"
                data2="flush-collapse9"
                nombreModulo={props.nombreDelModulo9}
                DescripcionDelContenido={props.DescripcionDelContenido9}
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
