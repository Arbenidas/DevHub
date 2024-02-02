import ComponenteAside from "./ComponenteAside.jsx";
import ComponenteInfoVideo from "./componenteInfoVideos.jsx";

export default function ComponenteCompuesto() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="accordion " id="accordion1">
              <ComponenteAside
                data1="#flush-collapseOne"
                data2="flush-collapseOne"
                nombreModulo="Como meter props al coso"
                DescripcionDelContenido="Aqui podemos ver como se ponen id o text dentro de los elementos de html"
              />
              <ComponenteAside
                data1="#flush-collapseTwo"
                data2="flush-collapseTwo"
                nombreModulo="Funciones basicas"
              />
              <ComponenteAside
                data1="#flush-collapseThree"
                data2="flush-collapseThree"
                nombreModulo="React nativo"
              />
            </div>
          </div>
          <ComponenteInfoVideo Titulo="" DescripcionDelContenido="" />
        </div>
      </div>
    </>
  );
}
