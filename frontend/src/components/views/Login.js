import React from "react"
import "../styles/registrarse+login.css"
import { useState } from "react"
import Swal from 'sweetalert2'

function Login() {
  const [TipoUsu, setTipoUsu] = useState("SELECCIONE")

  function ValidarTipoUsu(usuarioElegido) {
    setTipoUsu(usuarioElegido.target.value)
  }

  function Alerta(){
    Swal.fire({
      title: "Advertencia!!",
      icon: "warning",
      text: "Debe seleccionar un tipo de usuario",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "black"
    })
  }

  if (TipoUsu == "Administrador") {
    return (
      <body>
        <main>
          <div className="container_2">
            <h1 className="titulo">Iniciar sesión</h1>
            <form className="container__form" action="/homeAdmin">
              <label for="nombre" className="labels">Correo o nombre de Usuario</label>
              <input type="text" className="inputs" id="nombre" required placeholder="Correo o Nombre de usuario" />
              <div className="combobox_TipoDocu">
                <label className="labels">Tipo de Usuario</label>
                <select className="options__tipoDocu" required value={TipoUsu} onChange={ValidarTipoUsu}>
                  <option className="options" selected>SELECCIONE</option>
                  <option className="options">Administrador</option>
                  <option className="options">Cliente comun</option>
                </select>
              </div>
              <label for="nombre" className="labels">Codigo de Administrador</label>
              <input type="text" className="inputs" id="nombre" />
              <label for="confirm__password" className="labels">Contraseña</label>
              <input type="password" className="inputs" id="confirm__password" required />
              <div className="buttons__container">
                <a className="recuperar_contrasenha" href="/recuperarContrasena">Recuperar contraseña</a>
                <input type="submit" value="Iniciar sesion" className="enviar"></input>
              </div>
            </form>
          </div>
        </main>
      </body>
    )
  }
  else if (TipoUsu == "Cliente comun"){
    return (
      <body>
        <main>
          <div className="container_2">
            <h1 className="titulo">Iniciar sesión</h1>
            <form className="container__form" action="/">
              <label for="nombre" className="labels">Correo o nombre de Usuario</label>
              <input type="text" className="inputs" id="nombre" required placeholder="Correo o Nombre de usuario" />
              <div className="combobox_TipoDocu">
                <label className="labels">Tipo de Usuario</label>
                <select className="options__tipoDocu" required value={TipoUsu} onChange={ValidarTipoUsu}>
                  <option className="options" selected>SELECCIONE</option>
                  <option className="options">Administrador</option>
                  <option className="options">Cliente comun</option>
                </select>
              </div>
              <label for="confirm__password" className="labels">Contraseña</label>
              <input type="password" className="inputs" id="confirm__password" required />
              <div className="buttons__container">
                <a className="recuperar_contrasenha" href="/recuperarContrasena">Recuperar contraseña</a>
                <input type="submit" value="Iniciar sesion" className="enviar"></input>
              </div>
            </form>
          </div>
        </main>
      </body>
    )
  }

  else if(TipoUsu == "SELECCIONE"){
    return (
      <body>
        <main>
          <div className="container_2">
            <h1 className="titulo">Iniciar sesión</h1>
            <form className="container__form" action="#">
              <label for="nombre" className="labels">Correo o nombre de Usuario</label>
              <input type="text" className="inputs" id="nombre" required placeholder="Correo o Nombre de usuario" />
              <div className="combobox_TipoDocu">
                <label className="labels">Tipo de Usuario</label>
                <select className="options__tipoDocu" required value={TipoUsu} onChange={ValidarTipoUsu}>
                  <option className="options" selected>SELECCIONE</option>
                  <option className="options">Administrador</option>
                  <option className="options">Cliente comun</option>
                </select>
              </div>
              <label for="confirm__password" className="labels">Contraseña</label>
              <input type="password" className="inputs" id="confirm__password" required />
              <div className="buttons__container">
                <a className="recuperar_contrasenha" href="/recuperarContrasena">Recuperar contraseña</a>
                <input type="submit" value="Iniciar sesion" className="enviar" onClick={Alerta}></input>
              </div>
            </form>
          </div>
        </main>
      </body>
    )
  }

}

export default Login 