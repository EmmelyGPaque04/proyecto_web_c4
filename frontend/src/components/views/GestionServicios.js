import React from "react";
import "../styles/gestionServicios.css"

function GestionServicios() {
    return(
        <main>
        <h2 className="titulo_reporte">Lista de Servicios</h2>
        <table className="table table-dark">
            <thead>
                <tr>
                    <th>Descripcion</th>
                    <th>Plan al que pertenece</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><a href="#" className="btn btn-outline-light"><i className="bi bi-info-circle-fill"></i>Ver Descripcion</a></td>
                    <td>Americano</td>
                    <td>Disponible</td>
                    <td>
                        <a href="#" className="btn btn-outline-light"><i className="bi bi-info-circle-fill"></i>Ver detalles</a>
                        <a href="#" className="btn btn-outline-light"><i className="bi bi-pencil-fill"></i>Editar</a>
                        <a href="#" className="btn btn-outline-light"><i className="bi bi-plus-circle-fill"></i>Agregar</a>
                        <a href="#" className="btn btn-outline-light"><i class="bi bi-trash3-fill"></i>Eliminar</a>
                    </td>
                </tr>
                <tr>
                    <td><a href="#" className="btn btn-outline-light"><i className="bi bi-info-circle-fill"></i>Ver Descripcion</a></td>
                    <td>Continental</td>
                    <td>Disponible</td>
                    <td>
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
export default GestionServicios