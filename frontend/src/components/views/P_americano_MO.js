import React from "react"
import "../styles/reserva.css"


function Reserva_Americano_MO() {
    return (
      <body>
        <main>
          <div className="container_4">
            <h1 className="titulo">Hacer una reservación</h1>
            <h2 className="subtitle">*Plan Americano Modificado*</h2>
            <form className="container__form1" action="#">
              <label for="nombre" className="labels">Nombres y apellidos</label>
              <input type="text" className="inputs" id="nombre" required placeholder="Nombres y apellidos" />
              <label for="correo" className="labels">Correo Electronico</label>
              <input type="text" className="inputs" id="correo" required placeholder="email@dominio.com" />
              <label for="docu" className="labels">Numero de documento</label>
              <input type="text" className="inputs" id="docu" required />
              <div className="combobox_MetodoPago">
                <label className="labels">Metodo de pago</label>
                <select className="options__Metodopago" required>
                  <option className="options" selected value="0">SELECCIONE</option>
                  <option className="options" value="1">Efectivo</option>
                  <option className="options" value="2">Tarjeta</option>
                </select>
              </div>
              <label for="telefono" className="labels">Telefono</label>
              <input type="text" id="telefono" className="inputs" required placeholder="(XX) XXXX XXXX" />
              <label for="fecha__inicio" className="labels"></label>
              <input type="date" id="fecha__inicio"/>
              <label for="fecha__finalizacion"></label>
              <input type="date" id="fecha__finalizacion"/>
              <input type="submit" value="Hacer reserva" className="enviar"></input>
            </form>
          </div>
        </main>
      </body>
    )
  }
  export default Reserva_Americano_MO;