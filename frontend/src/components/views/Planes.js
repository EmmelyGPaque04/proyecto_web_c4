import "../styles/planes.css";
import React from "react";

//importancion imagenes planes
import habitacion1 from "../../img/habitacion1.jpg";

function Planes() {
  return (
    <div className="container_3">
        <div className="card">
            <img src={habitacion1} alt="card_image"/>
            <h4 className="card__title">Americano</h4>
            <h5 className="card__subtitle">Pension Completa</h5>
            <p className="card__description">Hospedaje + Desayuno + Almuerzo + Cena</p>
            <a href="/reserva">Ver Disponibilidad</a>
        </div>
        <div className="card">
            <img className="card_image" src={habitacion1} alt="card_image"/>
            <h4 className="card__title">Americano Modificado</h4>
            <h5 className="card__subtitle">Variable</h5>
            <p className="card__description">Hospedaje + Desayuno + Almuerzo o Cena</p>
            <a href="/reserva">Ver Disponibilidad</a>
        </div>
        <div className="card">
            <img className="card_image" src={habitacion1} alt="card_image"/>
            <h4 className="card__title">Europeo</h4>
            <h5 className="card__subtitle">Only Estadia</h5>
            <p className="card__description">No Incluye Alimentos ni bebidas</p>
            <a href="/reserva">Ver Disponibilidad</a>
        </div>
        <div className="card">
            <img className="card_image" src={habitacion1} alt="card_image"/>
            <h4 className="card__title">Continental</h4>
            <h5 className="card__subtitle">Extra mini</h5>
            <p className="card__description">Hospedaje + Desayuno Mini *Cafe + Pan tostado + Mermelada y Mantequilla*</p>
            <a href="/reserva">Ver Disponibilidad</a>
        </div>
        <div className="card">
            <img className="card_image" src={habitacion1} alt="card_image"/>
            <h4 className="card__title">*All-IN*</h4>
            <h5 className="card__subtitle">Completo</h5>
            <p className="card__description">Hospedaje + Cena + Entretenimiento</p>
            <a href="/reserva">Ver Disponibilidad</a>
        </div>
    </div>
  );
}

export default Planes;
