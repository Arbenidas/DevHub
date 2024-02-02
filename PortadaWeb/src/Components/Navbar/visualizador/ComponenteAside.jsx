import "./StyleVisualizador.css";
export default function ComponenteAside(props) {
  return (
    <>
      <div class="accordion-item ">
        <h2 class="accordion-header">
          <button
            class="accordion-button modulos collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={props.data1}
            aria-expanded="false"
            aria-controls={props.data2}
          >
            {props.nombreModulo}
          </button>
        </h2>
        <div
          id={props.data2}
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
           {props.DescripcionDelContenido}
          </div>
        </div>
      </div>
      
      
    </>
  );
}
