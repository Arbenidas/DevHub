import { useState } from "react"
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Background from "../Background/Background";
import Carrusel from "../Carrusel/Carrusel";
import Footer from "../FooterLP/Footer";


function LandingPage() {
    let heroData = [
      {text1: "Aprende a Programar",text2:"y cambia tu futuro"},
      {text1: "Obtén habilidades",text2:"que abrirán puertas"},
      {text1: "Descrubre tus",text2:"pasiones digitales"},
    ]
    const [heroCount,setHeroCount] = useState(2);
    const [playStatus,setPlayStatus] = useState(false)
    return (
      <div>
          <Navbar/>
        <Hero
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          playStatus={playStatus}/>
          <Background playStatus={playStatus} heroCount={heroCount}/>
          <Carrusel/>
          <Footer/>
      </div>
    )
  }
  
  export default LandingPage