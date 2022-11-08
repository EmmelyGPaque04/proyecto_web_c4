import React from "react"
import "../styles/contacto.css"
import { useState } from "react"

function Contacto() {

    const [formaContacto, setForma] = useState("Correo Electronico");

    function ElegirFormaContacto(formaElegida) {
        setForma(formaElegida.target.value)
    }

    if (formaContacto == "Correo Electronico") {
        return (
            <body>
                <main>
                    <div className="container_4">
                        <div className="container__Contacto">
                            <h1 className="titulo_contaacto">Pongase en contacto con nosotros</h1>
                            <form className="form_contacto" action="#">
                                <div className="datos__contacto">
                                    <label className="labels_contacto" for="nombre">Ingrese su nombre</label>
                                    <input type="text" id="nombre" required />
                                </div>
                                <div className="checkbox">
                                    <h4 className="titulo_formas_contacto">¿Cómo le gustaría que lo contactemos?</h4>
                                    <select className="options__tipoDocu" value={formaContacto} onChange={ElegirFormaContacto}>
                                        <option className="options">Teléfono celular</option>
                                        <option className="options" selected>Correo Electronico</option>
                                    </select>

                                    <label className="labels_contacto" for="email">Correo Electronico</label>
                                    <input type="text" id="email" required placeholder="email@dominio.com" />

                                </div>
                                <label for="mensaje">Mensaje</label>
                                <textarea name="Mensaje" id="mensaje" cols="70" rows="10" className="txtarea" required></textarea>
                                <div className="button_mensaje">
                                    <input type="submit" value="Enviar mensaje" className="enviar"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </body>
        )
    }

    else if (formaContacto == "Teléfono celular") {
        return (
            <body>
                <main>
                    <div className="container_4">
                        <div className="container__Contacto">
                            <h1 className="titulo_contaacto">Pongase en contacto con nosotros</h1>
                            <form className="form_contacto" action="#">
                                <div className="datos__contacto">
                                    <label className="labels_contacto" for="nombre">Ingrese su nombre</label>
                                    <input type="text" id="nombre" required />
                                </div>
                                <div className="checkbox">
                                    <h4 className="titulo_formas_contacto">¿Cómo le gustaría que lo contactemos?</h4>
                                    <select className="options__tipoDocu" value={formaContacto} onChange={ElegirFormaContacto}>
                                        <option className="options">Teléfono celular</option>
                                        <option className="options">Correo Electronico</option>
                                    </select>
                                    <label for="telefono" className="labels_contacto">Telefono</label>
                                    <input type="text" id="telefono"  required placeholder="(XX) XXXX XXXX" />

                                </div>
                                <label for="mensaje">Mensaje</label>
                                <textarea name="Mensaje" id="mensaje" cols="70" rows="10" className="txtarea" required></textarea>
                                <div className="button_mensaje">
                                    <input type="submit" value="Enviar mensaje" className="enviar"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </body>
        )
    }

}
export default Contacto