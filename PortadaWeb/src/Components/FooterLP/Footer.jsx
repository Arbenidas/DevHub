import React from 'react'
import './Footer.css'
import iconoInstagram from '../../assets/iconoInsta.jpg'
import iconoFacebook from '../../assets/iconoFace.jpg'
import iconoWhatsapp from '../../assets/iconoWhats.jpg'

const Footer = () => {
  return (
    <div id="ParteFooter" class="border-top border-5">
      <div class="container-fluid w-100 h-100" id="containerconfig">
        <div className="row">
          <div className="col col-lg-6 col-md-12 col-sm-12 mt-5 colfig">
            <h3 class="h3footer fs-1">
              DevHub
            </h3>
            <p class="Pfooter fs-4">
              Logo
            </p>
          </div>
          <div className="col col-lg-6 col-md-12 col-sm-12 mt-5 colfig">
            <h3 class="h3footer fs-5">
              Acerca de Nosotros
            </h3>
            <p class="Pfooter">
              Somos una institución sin intencion de lucro,
              solo ayudamos a las personas puedan aprender
              lo que les gusta sin costo alguno.
            </p>
          </div>
          <div className="col col-lg-6 col-md-12 col-sm-12 mt-5 colfig">
            <h3 class="h3footer fs-5">
              Contactanos
            </h3>
            <p class="Pfooter">
              Correo: DevHUB@gmail.com <br/>
              Teléfono: +503 2255-5555
            </p>
            <img src={iconoInstagram} alt="" class="imgconfig"/>
            <img src={iconoFacebook} alt="" class="imgconfig"/>
            <img src={iconoWhatsapp} alt="" class="imgconfig"/>
          </div>
          <div className="col col-lg-6 col-md-12 col-sm-12 mt-5 colfig">
            <h3 class="h3footer fs-5">
              Derechos de Autor
            </h3>
            <p class="Pfooter">
              Derechos reservados 2024-2025
            </p>
          </div>

        </div>



      </div>




    </div>
  )
}

export default Footer