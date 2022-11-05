import React from "react"
import "../styles/registrarse+login.css"

function Login() {
    return(
        <body>
        <main>
          <div className="container_2">
            <h1 className="titulo">Iniciar sesión</h1>
            <form className="container__form" action="#">
              <label for="nombre" className="labels">Correo o nombre de Usuario</label>
              <input type="text" className="inputs" id="nombre" required placeholder="Correo o Nombre de usuario" />
              <div className="combobox_TipoDocu">
                <label className="labels">Tipo de Usuario</label>
                <select className="options__tipoDocu" required onChange="ValidarTipoUsu()">
                  <option className="options" value="0" selected>SELECCIONE</option>
                  <option className="options" value="1">Administrador</option>
                  <option className="options" value="2">Cliente comun</option>
                </select>
              </div>
              <label for="nombre" className="labels">Codigo de Administrador</label>
              <input type="text" className="inputs" id="nombre"/>
              <label for="confirm__password" className="labels">Contraseña</label>
              <input type="password" className="inputs" id="confirm__password" required />
              <input type="submit" value="Iniciar sesion" className="enviar"></input>
            </form>
          </div>
        </main>
      </body>
    )
}

export default Login 