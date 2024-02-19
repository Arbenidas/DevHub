import "./Cursos.css";
import { Link } from 'react-router-dom';
import imagen from '../../Assets/image6.jpg'



export default function ComponenteCard(props) {
  return (
    <>
          <div className="col-3 mt-3">
            <div class="card">
              <img src="https://revistaempresarial.com/wp-content/uploads/2020/06/tecnologia_teletrabajo.gif" class="card-img-top" alt="..." />
              <p className="card-title"><Link to={`/VistaCurso/${props.id}`}>{props.nombre}</Link></p>
              <p className="small-desc">
                {props.descripcion}
              </p>
              <div className="go-corner">
                <div className="go-arrow">→</div>
              </div>
            </div>
          </div>
        
    </>
  );
}
