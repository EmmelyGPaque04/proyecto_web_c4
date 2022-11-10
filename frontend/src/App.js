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
import Contacto from "./components/views/Contacto";
import HomeAdmin from "./components/views/HomeAdmin"
//Importando planes de reserva
import Reserva from "./components/views/Reserva";
import P_americano from "./components/views/P_americano";
import P_americano_MO from "./components/views/P_americano_MO";
import P_europeo from "./components/views/P_europeo";
import P_continental from "./components/views/P_continental";
import P_allin from "./components/views/P_allin";

//importando menu de administrador
import GestionUsu from "./components/views/GestionUsuarios";
import GestionCuartos from "./components/views/GestionCuartos"
import GestionServicios from "./components/views/GestionServicios";

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
                  <a className="nav__link1" href="/contacto">Contactanos</a>
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
           <Route path="/registro" element={<Registrarse/>} exact></Route> 
           <Route path="/" element={<Descripcion/>} exact></Route> 
           <Route path="/planes" element={<Planes/>} exact></Route> 
           <Route path="/login" element={<Login/>} exact></Route>
           <Route path="/contacto" element={<Contacto/>} exact></Route>
           <Route path="/homeAdmin" element={<HomeAdmin/>} exact></Route>
           <Route path="/reserva" element={<Reserva/>} exact></Route>
           <Route path="/reserva_americano" element={<P_americano/>} exact></Route>
           <Route path="/reserva_americano_mo" element={<P_americano_MO/>} exact></Route>
           <Route path="/reserva_europeo" element={<P_europeo/>} exact></Route>
           <Route path="/reserva_continental" element={<P_continental/>} exact></Route>
           <Route path="/reserva_allin" element={<P_allin/>} exact></Route>
           <Route path="/gestionUsuarios" element={<GestionUsu/>} exact></Route>
           <Route path="/gestionCuartos" element={<GestionCuartos/>} exact></Route>
           <Route path="/gestionServicios" element={<GestionServicios/>} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
