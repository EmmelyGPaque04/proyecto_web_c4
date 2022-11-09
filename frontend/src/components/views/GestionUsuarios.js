import React from "react"
import "../styles/gestionUsuarios.css"

function GestionUsu() {
    return(
        <main>
            <h2 className="titulo_reporte">Reporte de usuarios</h2>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Numero de documento</th>
                        <th>Correo</th>
                        <th>Telefone</th>
                        <th>Historial de recervas</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Carles</td>
                        <td>Puyol</td>
                        <td>001414</td>
                        <td>carlos@</td>
                        <td>123654</td>
                        <td><a href="#" className="btn btn-outline-light"> <i className="bi bi-clock-history"></i>Ver Historial</a></td>
                        <td>
                            <a href="#" className="btn btn-outline-light"><i className="bi bi-info-circle-fill"></i>Ver detalles</a>
                            <a href="#" className="btn btn-outline-light"><i className="bi bi-pencil-fill"></i>Editar</a>
                            <a href="#" className="btn btn-outline-light"><i className="bi bi-plus-circle-fill"></i>Agregar</a>
                            <a href="#" className="btn btn-outline-light"><i class="bi bi-trash3-fill"></i>Eliminar</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Santiago</td>
                        <td>Garcia</td>
                        <td>123456</td>
                        <td>santy@</td>
                        <td>456987</td>
                        <td><a href="#" className="btn btn-outline-light"> <i className="bi bi-clock-history"></i>Ver Historial</a></td>
                        <td>
                            <a href="#" className="btn btn-outline-light"><i className="bi bi-info-circle-fill"></i>Ver detalles</a>
                            <a href="#" className="btn btn-outline-light"><i className="bi bi-pencil-fill"></i>Editar</a>
                            <a href="#" className="btn btn-outline-light"><i className="bi bi-plus-circle-fill"></i>Agregar</a>
                            <a href="#" className="btn btn-outline-light"><i class="bi bi-trash3-fill"></i>Eliminar</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Pedro</td>
                        <td>Rodriguez</td>
                        <td>752525022</td>
                        <td>Pedro@</td>
                        <td>789321</td>
                        <td><a href="#" className="btn btn-outline-light"> <i className="bi bi-clock-history"></i>Ver Historial</a></td><td>
                            <a href="#" className="btn btn-outline-light"><i className="bi bi-info-circle-fill"></i>Ver detalles</a>
                            <a href="#" className="btn btn-outline-light"><i className="bi bi-pencil-fill"></i>Editar</a>
                            <a href="#" className="btn btn-outline-light"><i className="bi bi-plus-circle-fill"></i>Agregar</a>
                            <a href="#" className="btn btn-outline-light"><i class="bi bi-trash3-fill"></i>Eliminar</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </main>
    )
}
export default GestionUsu