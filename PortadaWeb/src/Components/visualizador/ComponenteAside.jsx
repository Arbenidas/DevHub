import "./StyleVisualizador.css";
import RegresarObjeto from "../Objetos/RegresarObjeto";
export default function ComponenteAside(props, RegresarObjeto) {
  return (
    <>
      <div class="accordion-item rounded  no-border">
        <h2 class="accordion-header rounded  h2-color">
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
          <div class="accordion-body color-body">{props.de}</div>
        </div>
      </div>
    </>
  );
}
