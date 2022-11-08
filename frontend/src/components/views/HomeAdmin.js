import React from "react";
import "../styles/homeAdmin.css"
import Ico_Usuarios from "../../img/Iconos_IconoGestionUsuarios.svg"
import Ico_habiaciones from "../../img/Iconos_IonoGestionHanitaciones.svg"
import Ico_Servicios from "../../img/Iconos_IconoGestionServicios.svg"

function HomeAdmin() {
    return (
        <main>
            <body>
                <div className="container_cards">
                    <div className="body_cards">
                        <a className="content_cards" href="#">
                            <img className="iconos_cards" src={Ico_Usuarios} alt="" />
                            <p className="titulo_cards">Gestion de Usuarios</p>
                        </a>
                    </div>
                    <div className="body_cards">
                        <a className="content_cards" href="#">
                            <img className="iconos_cards" src={Ico_habiaciones} alt="" />
                            <p className="titulo_cards">Gestion de habitaciones</p>
                        </a>
                    </div>
                    <div className="body_cards">
                        <a className="content_cards" href="#">
                            <img className="iconos_cards" src={Ico_Servicios} alt="" />
                            <p className="titulo_cards">Gestion de Servicios</p>
                        </a>
                    </div>
                </div>
            </body>
        </main>
    )
}
export default HomeAdmin