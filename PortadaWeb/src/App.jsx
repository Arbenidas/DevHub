import { useState } from "react"
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Carrusel from "./Components/Carrusel/Carrusel";


function App() {
  let heroData = [
    {text1: "Aprende a Programar",text2:"y cambia tu futuro"},
    {text1: "Obtén habilidades",text2:"que abrirán puertas"},
    {text1: "Descrubre tus",text2:"pasiones digitales"},
  ]
  const [heroCount,setHeroCount] = useState(2);
  const [playStatus,setPlayStatus] = useState(false)
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
      <Carrusel/>
    </div>
  )
}

export default App