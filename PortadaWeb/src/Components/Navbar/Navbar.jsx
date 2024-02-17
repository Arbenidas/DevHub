import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        <Link to="/">DevHUB</Link>
      </div>
      <ul className="nav-menu">
        <li>Inicio</li>
        <li>Explorar</li>
        <li>Conocenos</li>
        <li className="nav-contact">
          <Link to="/signin">Iniciar Sesión</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
