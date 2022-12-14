import React from "react"
import "../styles/registrarse+login.css"

function Registrarse() {
  return (
    <body>
      <main>
        <div className="container_2">
          <h1 className="titulo">Crear nuevo Usuario</h1>
          <form className="container__form" action="/login">
            <label for="nombre" className="labels">Nombres</label>
            <input type="text" className="inputs" id="nombre" required placeholder="Nombres" />
            <label for="apellidos" className="labels">Apellidos</label>
            <input type="text" className="inputs" id="apellidos" required placeholder="Apellidos" />
            <label for="correo" className="labels">Correo Electronico</label>
            <input type="email" className="inputs" id="correo" required placeholder="email@dominio.com" />
            <label for="docu" className="labels">Numero de documento</label>
            <input type="number" className="inputs" id="docu" required />
            <div className="combobox_TipoDocu">
              <label className="labels">Tipo de documento</label>
              <select className="options__tipoDocu" required>
                <option className="options" selected value="0">SELECCIONE</option>
                <option className="options" value="1">Cedula de ciudadania (C.C)</option>
                <option className="options" value="2">Tarjeta de identidad (TI)</option>
                <option className="options" value="3">Pasaporte</option>
              </select>
            </div>
            <label for="telefono" className="labels">Telefono</label>
            <input type="number" id="telefono" className="inputs" required placeholder="(XX) XXXX XXXX" />
            <label for="new__password" className="labels">Nueva contraseña</label>
            <input type="password" className="inputs" id="new__password" required />
            <label for="confirm__password" className="labels">Confirmar contraseña</label>
            <input type="password" className="inputs" id="confirm__password" required />
            <input type="submit" value="Registrarse" className="enviar"></input>
          </form>
        </div>
      </main>
    </body>
  )
}
export default Registrarse;