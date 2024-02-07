function ComponenteInfoVideo(props) {  
  return (
    <>
      {/*Video del curso*/}
      <div class="col mt-5 Cuerpodiv margin-right">
        <article class=" videoCard  align-items-center">
          <div class="mt-4 asidecompo1">
            <div class="ratio ratio-16x9">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/SXjIYRih13I?si=a8j8rQjFzQLt7OS4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            {/* Botones para avanzar en el curso */}

            <div class=" clearfix ">
              <button type="button" class="btn btn-secondary float-start">
                Regresar
              </button>
              <button type="button" class="btn btn-secondary float-end">
                Siguiente
              </button>
            </div>
          </div>

          {/* Descripsion e informacion para el modulo */}
          <div class="  mt-4">
            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  class="nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Descripción
                </button>
                <button
                  class="nav-link"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Comunidad
                </button>
                <button
                  class="nav-link"
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-contact"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  Herramientas de estudio
                </button>
              </div>
            </nav>
            {/* Apartado de descripcion */}
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
                tabindex="0"
              >{props.descripcion}
              </div>
              {/*Apartado de comunidad*/}
              <div
                class="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
                tabindex="0"
              >
                {props.comunidad}
              </div>
              {/* Apartado de herramientas */}
              <div
                class="tab-pane fade"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
                tabindex="0"
              >
              {props.herramientas}
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default ComponenteInfoVideo;
