import {} from "../../App";
import "../visualizador/StyleVisualizador.css";
export default function NavbarCV(props) {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {/* brand */}
          <button class="button">
            <a href="/">DevHub</a>
          </button>
          
          {/* toggle buttons */}
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          {/* Collapse wrapper */}
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            {/*Left links*/}
            <ul class="navbar-nav me-3">
              
            </ul>
            <form class="d-flex align-items-center w-100 form-search">
              <div class="input-group">
                <button
                  class="btn btn-light dropdown-toggle shadow-0 botonsin"
                  type="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  All
                </button>
                <ul class="dropdown-menu dropdown-menu-dark fa-ul">
                  <li>
                    <a class="dropdown-item" href="#">
                      <span class="fa-li pe-2">
                        <i class="fas fa-search"></i>
                      </span>
                      All
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <span class="fa-li pe-2">
                        <i class="fas fa-film"></i>
                      </span>
                      Titles
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <span class="fa-li pe-2">
                        <i class="fas fa-tv"></i>
                      </span>
                      TV Episodes
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <span class="fa-li pe-2">
                        <i class="fas fa-user-friends"></i>
                      </span>
                      Celebs
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <span class="fa-li pe-2">
                        <i class="fas fa-building"></i>
                      </span>
                      Companies
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <span class="fa-li pe-2">
                        <i class="fas fa-key"></i>
                      </span>
                      Keywords
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <span class="fa-li pe-2">
                        <i class="fas fa-search-plus"></i>
                      </span>
                      Advanced search<i class="fas fa-chevron-right ps-2"></i>
                    </a>
                  </li>
                </ul>
                <input
                  type="search"
                  class="form-control"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              <a href="#!" class="text-white">
                <i class="fas fa-search ps-3"></i>
              </a>
            </form>
            <ul class="navbar-nav ms-3">
              <li class="nav-item me-3">
                <a class="nav-link d-flex align-items-center" href="#!">
                  MyCursos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link d-flex align-items-center me-3" href="#!">
                  <i class="fas fa-bookmark pe-2"></i> Explorar
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link d-flex align-items-center" href="#!">
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
