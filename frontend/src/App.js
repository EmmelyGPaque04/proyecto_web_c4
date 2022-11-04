import logo from "./img/logo.png"
import imagen1 from "./img/imagen1.jpg"
import imagen2 from "./img/imagen2.jpg"
import imagen3 from "./img/imagen3.jpg"
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <header className="container">
          <div className="container__navbar">
            <a href="#"><img className="logo" src={logo} alt="logo_Hotel Transylvania" /></a>
            <nav className="container__navbar__body">
              <ul className="container__navbar__links">
                <li className="nav__item1">
                  <a className="nav__link1" href="#">Registrarse</a>
                </li>
                <li className="nav__item2">
                  <a className="nav__link2" href="#">Iniciar sesión</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main>
          <div className="container_slide">
            <div className="container_descripcion">
              <p className="descripcion_texto">
                El <strong> Hotel Transylvania</strong> es un destino moderno, elegante, ubicado en la ciudad de Bogotá, cerca al aeropuerto “El Dorado”. <br /> <br />
                Cuenta con una amplia gama de servcios de atención al cliente, y escenarios especiales y únicos que te harán vivir una experiencia inolvidable.
              </p>
            </div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={imagen1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={imagen2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={imagen3} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <hr />
          <div className="container_btn">
            <div className="btn__planes">
              <a className="planes_link" href="#">Conozca nuestros planes</a>
            </div>
          </div>
        </main>
      </body>
    </div>
  );
}

export default App;
