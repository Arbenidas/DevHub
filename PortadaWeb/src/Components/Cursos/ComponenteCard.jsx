import "./Cursos.css";

export default function ComponenteCard(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 mt-3">
            <div class="card">
              <img src="{logoJava}" class="card-img-top" alt="..." />
              <p class="card-title">Product Name</p>
              <p class="small-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quaerat veritatis nobis saepe itaque rerum nostrum aliquid
                obcaecati odio officia deleniti. Expedita iste et illum, quaerat
                pariatur consequatur eum nihil itaque!
              </p>
              <div class="go-corner">
                <div class="go-arrow">→</div>
              </div>
            </div>
          </div>
          <div className="col-3 mt-3">
          <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <p class="card-title">Product Name</p>
              <p class="small-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quaerat veritatis nobis saepe itaque rerum nostrum aliquid
                obcaecati odio officia deleniti. Expedita iste et illum, quaerat
                pariatur consequatur eum nihil itaque!
              </p>
              <div class="go-corner">
                <div class="go-arrow">→</div>
              </div>
            </div>
          </div>
          <div className="col-3 mt-3">
          <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <p class="card-title">Product Name</p>
              <p class="small-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quaerat veritatis nobis saepe itaque rerum nostrum aliquid
                obcaecati odio officia deleniti. Expedita iste et illum, quaerat
                pariatur consequatur eum nihil itaque!
              </p>
              <div class="go-corner">
                <div class="go-arrow">→</div>
              </div>
            </div>
          </div>
          <div class="card">
              <img src="PortadaWeb\src\assets\img_javaCurso.jpg" class="card-img-top" alt="..." />
              <p class="card-title">Product Name</p>
              <p class="small-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quaerat veritatis nobis saepe itaque rerum nostrum aliquid
                obcaecati odio officia deleniti. Expedita iste et illum, quaerat
                pariatur consequatur eum nihil itaque!
              </p>
              <div class="go-corner">
                <div class="go-arrow">→</div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}
