import './Carrusel.css'
import imagen4 from '../../Assets/image4.jpg'
import imagen5 from '../../Assets/image5.jpg'
import imagen6 from '../../Assets/image6.jpg'

          

import React from 'react'

const Carrusel = () => {
    
  return (
    <>
    <div id="parte-blanca" class="w-100 mx-auto">
      <div id='introCursosText' class="w-75 mx-auto text-center pt-5">
            <h1 class="p-4 fs-2 border-top border-3">DevHUB es un lugar donde puedes aprender de los 
                      mejores cursos de<span class="text-primary"> Desarrollo</span></h1>
                      <p class="fs-5 p-1 mx-auto text-center">Explora cursos que te ayudan con tu crecimiento en el area del Desarrollo de Software</p>
      </div>
    <div class="container-fluid pt-3 mt-3">
      <div class="row my-2 servicio-fila">
        {/*Primer carrusel : Los cursos mas vistos */}
        <div class="col col-lg-6 col-md-12 col-sm-12 bgstyle">
        <div class="infoCursosMasVistos">
            <h3>Los cursos más vistos....</h3>


          </div>
            <div id="carouselExampleIndicators" class="carousel slide w-auto h-auto">
              <div class="carousel-inner w-100">
                <div class="carousel-item active d-item">
                  <img src={imagen4} class="d-block w-100 d-img imghover" alt="..."/>
                    <div class="capa">
                        <h3> Curso Machine learning </h3>
                        <p>Aca podras aprender todo sobre el machine learning lore</p>
                    </div>
                </div>
                <div class="carousel-item">
                  <img src={imagen5} class="d-block w-100 d-img imghover" alt="..."/>
                  <div class="capa">
                        <h3>Curso de Pascal</h3>
                        <p>Aca podrás aprender a programar en el gran lenguaje de programación Pascal</p>
                    </div>
                </div>
                <div class="carousel-item">
                  <img src={imagen6} class="d-block w-100 d-img imghover" alt="..."/>
                  <div class="capa">
                        <h3>Curso de Python</h3>
                        <p>Aca podras aprender a programar en Pyton</p>
                    </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
          </div>
          </div>
          {/*segundo carrusel : Los cursos mas nuevos */}
          <div class="col col-lg-6 col-md-12 col-sm-12 bgstyle">
        <div class="infoCursosMasVistos">
            <h3>Los cursos más....</h3>


          </div>
            <div id="carouselExampleIndicators" class="carousel slide w-auto h-auto">
              <div class="carousel-inner w-100">
                <div class="carousel-item active d-item">
                  <img src={imagen4} class="d-block w-100 d-img imghover" alt="..."/>
                    <div class="capa">
                        <h3> Curso Machine learning </h3>
                        <p>Aca podras aprender todo sobre el machine learning lore</p>
                    </div>
                </div>
                <div class="carousel-item">
                  <img src={imagen5} class="d-block w-100 d-img imghover" alt="..."/>
                  <div class="capa">
                        <h3>Curso de Pascal</h3>
                        <p>Aca podrás aprender a programar en el gran lenguaje de programación Pascal</p>
                    </div>
                </div>
                <div class="carousel-item">
                  <img src={imagen6} class="d-block w-100 d-img imghover" alt="..."/>
                  <div class="capa">
                        <h3>Curso de Python</h3>
                        <p>Aca podras aprender a programar en Pyton</p>
                    </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
          </div>
          </div>
          {/*Aca termina el carrusel */}
      </div>
    </div>
</div>
    </>
  )
}


export default Carrusel