import {} from "../../App";
import "../visualizador/StyleVisualizador.css";
export default function NavbarCV(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {/* brand */}
          <button className="button">
            <a href="/">DevHub</a>
          </button>
          
          {/* toggle buttons */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Collapse wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/*Left links*/}
            <ul className="navbar-nav me-3">
              
            </ul>
            <form className="d-flex align-items-center w-100 form-search">
              <div className="input-group">
                <button
                  className="btn btn-light dropdown-toggle shadow-0 botonsin"
                  type="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  All
                </button>
                <ul className="dropdown-menu dropdown-menu-dark fa-ul">
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="fa-li pe-2">
                        <i className="fas fa-search"></i>
                      </span>
                      All
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="fa-li pe-2">
                        <i className="fas fa-film"></i>
                      </span>
                      Titles
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="fa-li pe-2">
                        <i className="fas fa-tv"></i>
                      </span>
                      TV Episodes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="fa-li pe-2">
                        <i className="fas fa-user-friends"></i>
                      </span>
                      Celebs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="fa-li pe-2">
                        <i className="fas fa-building"></i>
                      </span>
                      Companies
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="fa-li pe-2">
                        <i className="fas fa-key"></i>
                      </span>
                      Keywords
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="fa-li pe-2">
                        <i className="fas fa-search-plus"></i>
                      </span>
                      Advanced search<i className="fas fa-chevron-right ps-2"></i>
                    </a>
                  </li>
                </ul>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              <a href="#!" className="text-white">
                <i className="fas fa-search ps-3"></i>
              </a>
            </form>
            <ul className="navbar-nav ms-3">
              <li className="nav-item me-3">
                <a className="nav-link d-flex align-items-center" href="#!">
                  MyCursos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex align-items-center me-3" href="#!">
                  <i className="fas fa-bookmark pe-2"></i> Explorar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex align-items-center" href="#!">
                  Perfil
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
