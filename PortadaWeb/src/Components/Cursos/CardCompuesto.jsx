import ComponenteCard from "./ComponenteCard";

export default function CardCompuesto(props) {

  console.log("AAAAAAAAAAAAAAAAAAAAAAAAA");
  console.log(props.cursos)
  let listaCursos = props.cursos;
  let componentes = []
   for (let i = 0; i < listaCursos.length; i++) {
     componentes.push(
       <ComponenteCard id={listaCursos[i].id_curso} nombre={listaCursos[i].nombre} descripcion ={listaCursos[i].descripcion}/>
      
       )
    
 }

  // console.log("componenes")
  // console.log(componentes)

  return (
    <>
    
    <div className="container-fluid">
      <div className="row">
        {componentes}
      </div>
    </div>
    </>
  );
}
