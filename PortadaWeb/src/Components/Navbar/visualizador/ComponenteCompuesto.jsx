import ComponenteAside from "./ComponenteAside.jsx";
import ComponenteInfoVideo from "./componenteInfoVideos.jsx";

export default function ComponenteCompuesto() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col">
            <ComponenteAside />
            <ComponenteAside />
          </div>
          <ComponenteInfoVideo />
        </div>
      </div>
    </>
  );
}
