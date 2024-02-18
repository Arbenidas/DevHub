import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='nav'>
        <div className="nav-logo">DevHUB</div>
        <ul className="nav-menu">
            <li><Link to="/" class="text-decoration-none text-white">Inicio</Link></li>
            <li><Link to="/Cursos" class="text-decoration-none text-white">Explorar</Link></li>
            <li><Link to="/Conocenos" class="text-decoration-none text-white">Conocenos</Link></li>
            <li className='nav-contact'><Link to="/signin" class="text-decoration-none text-black">Iniciar Sesión</Link></li>

        </ul>

    </div>
  );
};

export default Navbar;
