import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className="nav-logo">DevHUB</div>
        <ul className="nav-menu">
            <li>Inicio</li>
            <li>Explorar</li>
            <li>Conocenos</li>
            <li className='nav-contact'>Iniciar Sesión</li>

        </ul>

    </div>
  )
}

export default Navbar