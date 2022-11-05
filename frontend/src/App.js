//importando recursos vusuales
import logo from "./img/logo.png"

//Importando los estilos de la pagina
import './App.css';

//importando los elementos y las rutas para la navegacion
import {BrowserRouter, Route, Routes} from 'react-router-dom';

//importando componentes
import Registrarse from "./components/views/Registrarse"
import Descripcion from "./components/views/Descricion"
import Planes from "./components/views/Planes";
import Login from "./components/views/Login";

function App() {
  return (
    <div className="App">
      <body id="seccion1">
        <header className="container">
          <div className="container__navbar">
            <a href="/"><img className="logo" src={logo} alt="logo_Hotel Transylvania" /></a>
            <nav className="container__navbar__body">
              <ul className="container__navbar__links">
              <li className="nav__item1">
                  <a className="nav__link1" href="/descripcion">Servicios</a>
                </li>
                <li className="nav__item1">
                  <a className="nav__link1" href="/registro">Registrarse</a>
                </li>
                <li className="nav__item2">
                  <a className="nav__link2" href="/login">Iniciar sesión</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </body>
      <BrowserRouter>
        <Routes>
           <Route path="/registro" element={<Registrarse/>}></Route> 
           <Route path="/descripcion" element={<Descripcion/>}></Route> 
           <Route path="/planes" element={<Planes/>}></Route> 
           <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
