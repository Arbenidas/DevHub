import React from 'react'
import './Conocenos.css'
import imagenConocenos from '../../Assets/imageConocenos.jpg'
import Navbar from '../Navbar/Navbar'

const Conocenos = () => {
  return (
    <>
    <div id="backConocenos">
        <Navbar/>
        <div id="containerText" class="mx-auto text-center">
            <h2 class="pt-5 text-white">DevHUB</h2>
            <p class="pt-4 pTextConocenos w-75"> Somos una institución sin fines de lucro
            que ayudamos a las personas a encontrar su pasion y mejorar sus habilidades a travez de nuestra
            plataforma de cursos en linea completamente gratis.<br/><br/>Esta plataforma esta contruida
            por un grupo de cuatro desarroladores que ponen en práctica lo aprendido y siguen aprendiendo
            para mejorar sus conocimientos en el ambito del desarrollo</p>

        </div>

        <img src={imagenConocenos} id="imgConocenos" width="100%" alt=""/>



    </div>
    </>
  )
}

export default Conocenos