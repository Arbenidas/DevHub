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
      <div class="row w-100 mx-auto my-2 servicio-fila">
        <div class="col col-lg-6 col-md-12 col-sm-12 d-flex">
            <div id="carouselExampleIndicators" class="carousel slide w-100">
              <div class="carousel-inner">
                <div class="carousel-item active d-item">
                  <img src={imagen4} class="d-block w-100 d-img" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src={imagen5} class="d-block w-100 d-img" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src={imagen6} class="d-block w-100 d-img" alt="..."/>
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
          <div class="col-lg-6 col-md-12 col-sm-6 d-flex">
                <div id='textForCarrusel' class="w-100 text-center mx-auto">
                  <h1 class="mt-3 fs-3">Curso de Machine Learning</h1>
                  <p class="mt-3 textInDiv">
                    En este curso, aprenderás los fundamentos del Machine Learning. Cubriremos los siguientes temas:<br/><br/>
                    - Los diferentes tipos de aprendizaje automático.<br/>
                    - Cómo evaluar el rendimiento de un modelo de aprendizaje automático.<br/>
                    - Cómo utilizar el aprendizaje automático para resolver problemas del mundo real.<br/>
                  </p>



                </div>
          </div>
      </div>
    </div>
</div>
    </>
  )
}


export default Carrusel