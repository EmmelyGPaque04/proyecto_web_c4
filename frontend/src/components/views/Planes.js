import "../styles/planes.css";
import React from "react";

//importancion imagenes planes
import habitacion1 from "../../img/habitacion1.jpg";
import planamericano from "../../img/planamericano.jpg";
import planamericanomo from "../../img/planamericanomo.jpg";
import planeuropeo from "../../img/planeuropeo.jpg";
import plancontinental from "../../img/plancontinental.jpg";
import planallin from "../../img/planallin.jpg";

function Planes() {
  return (
    <div className="container_3">
        <div className="card">
            <img src={planamericano} alt="card_image"/>
            <h4 className="card__title">Americano</h4>
            <h5 className="card__subtitle">Pension Completa</h5>
            <p className="card__description">Hospedaje + Desayuno + Almuerzo + Cena</p>
            <a href="/reserva_americano">Ver Disponibilidad</a>
        </div>
        <div className="card">
            <img className="card_image" src={planamericanomo} alt="card_image"/>
            <h4 className="card__title">Americano Modificado</h4>
            <h5 className="card__subtitle">Variable</h5>
            <p className="card__description">Hospedaje + Desayuno + Almuerzo o Cena</p>
            <a href="/reserva_americano_mo">Ver Disponibilidad</a>
        </div>
        <div className="card">
            <img className="card_image" src={planeuropeo} alt="card_image"/>
            <h4 className="card__title">Europeo</h4>
            <h5 className="card__subtitle">Only Estadia</h5>
            <p className="card__description">No Incluye Alimentos ni bebidas</p>
            <a href="/reserva_europeo">Ver Disponibilidad</a>
        </div>
        <div className="card">
            <img className="card_image" src={plancontinental} alt="card_image"/>
            <h4 className="card__title">Continental</h4>
            <h5 className="card__subtitle">Extra mini</h5>
            <p className="card__description">Hospedaje + Desayuno Mini *Cafe + Pan tostado + Mermelada y Mantequilla*</p>
            <a href="/reserva_continental">Ver Disponibilidad</a>
        </div>
        <div className="card">
            <img className="card_image" src={planallin} alt="card_image"/>
            <h4 className="card__title">*All-IN*</h4>
            <h5 className="card__subtitle">Completo</h5>
            <p className="card__description">Hospedaje + Cena + Entretenimiento</p>
            <a href="/reserva_allin">Ver Disponibilidad</a>
        </div>
    </div>
  );
}

export default Planes;
