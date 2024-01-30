export default function Navbar() {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg fixed-top navbar-light">
          <div class="container">
          <button>
              <a href="#" class="btn2">
                <span class="spn2">DevHub</span>
              </a>
            </button>
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
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto align-items-center">
                <li class="nav-item">
                  <button>
                    <a href="#" class="btn2">
                      <span class="spn2">Mis cursos</span>
                    </a>
                  </button>
                </li>
                <li class="nav-item">
                  <button>
                    <a href="#" class="btn2">
                      <span class="spn2">Notificaciones</span>
                    </a>
                  </button>
                </li>
                <li class="nav-item">
                  <button>
                    <a href="#" class="btn2">
                      <span class="spn2">Material</span>
                    </a>
                  </button>{" "}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
