function ComponenteInfoVideo(props) {  
  return (
    <>
      {/*Video del curso*/}
      <div className="col mt-5 Cuerpodiv margin-right">
        <article className=" videoCard  align-items-center">
          <div className="mt-4 asidecompo1">
            <div className="ratio ratio-16x9">
              <p class = "h1">{props.titulo}</p>
              <iframe
              id="iframe"
                width="560"
                height="315"
                src='{props.videoUrls}'
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            {/* Botones para avanzar en el curso */}

            <div className=" clearfix ">
              <button type="button" className="btn btn-secondary float-start">
                Regresar
              </button>
              <button type="button" className="btn btn-secondary float-end">
                Siguiente
              </button>
            </div>
          </div>

          {/* Descripsion e informacion para el modulo */}
          <div className="  mt-4">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  className="nav-link active"
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
                  className="nav-link"
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
                  className="nav-link"
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
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
                tabIndex="0"
              >{props.descripcion}
              </div>
              {/*Apartado de comunidad*/}
              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
                tabIndex="0"
              >
                {props.comunidad}
              </div>
              {/* Apartado de herramientas */}
              <div
                className="tab-pane fade"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
                tabIndex="0"
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
