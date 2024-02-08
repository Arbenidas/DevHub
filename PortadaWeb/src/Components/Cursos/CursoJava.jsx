import ComponenteCompuesto from "../visualizador/ComponenteCompuesto";
import NavbarCV from "../visualizador/Navbar";
import axios from "axios";

function regresarCurso(response) {
  alert('hola')
 
}
export function CursoDefault() {
  axios
    .post("http://localhost/ccCursos.php")
    .then((response) => {
      if (response.data.success) {
        
        // Si el inicio de sesión es exitoso, redirige a la página deseada
        console.log(response.data);
      } else {
        return(regresarCurso(response.data))
        alert(response.data);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("No actualizo el curso.");
    });
     return (
    <>
      <NavbarCV />
      <ComponenteCompuesto/>
    </>
  );
 
}
