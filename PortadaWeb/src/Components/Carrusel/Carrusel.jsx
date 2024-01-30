import './Carrusel.css'
import imagen1 from '../../Assets/image1.jpg'
import imagen2 from '../../Assets/image2.jpg'
import imagen3 from '../../Assets/image3.jpg'

    const btnLeft = document.querySelector(".btn-left"),
          btnRight = document.querySelector(".btn-right"),
          slider = document.querySelector("#slider"),
          sliderSection = document.querySelectorAll(".slider-section");
          let operacion = 0;
          

const Carrusel = () => {
            // btnRight.addEventListener("click", e => moveToRight()); /* Aca esta el problema */
            // btnLeft.addEventListener("click", e => moveToLeft()); /* Aca esta el problema */
            
    
            

        function moveToRight(){
            operacion = operacion + 33.3
            slider.style.transform = `translate(-${operacion}%)`
        }

        function moveToLeft(){
    
        }
  return (
    <>
    <div className="parte-blanca">
    <div className='container-carrusel'>
        <div className="carruseles" id='slider'>
            <div className="slider-section">
                <img src={imagen1} alt="" />
            </div>
            <div className="slider-section">
                <img src={imagen2} alt="" />
            </div>
            <div className="slider-section">
                <img src={imagen3} alt="" />
            </div>
        </div>
        <div className="btn-left">a</div>
        <div className="btn-right">b</div>
        </div>
    </div>
    </>
  )
}

export default Carrusel