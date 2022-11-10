import React from "react";
import "../styles/gestionCuartos.css"

function GestionCuartos() {
    return (
        <main>
            <h2 className="titulo_reporte">Reporte de habitaciones</h2>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Numero</th>
                        <th>Tipo</th>
                        <th>Bloque</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>01</td>
                        <td>Personal</td>
                        <td>A</td>
                        <td>Disponible</td>
                        <td>
                            <a href="#" className="btn btn-outline-light"><i className="bi bi-info-circle-fill"></i>Ver detalles</a>
                            <a href="#" className="btn btn-outline-light"><i className="bi bi-pencil-fill"></i>Editar</a>
                            <a href="#" className="btn btn-outline-light"><i className="bi bi-plus-circle-fill"></i>Agregar</a>
                            <a href="#" className="btn btn-outline-light"><i class="bi bi-trash3-fill"></i>Eliminar</a>
                        </td>
                    </tr>
                    <tr>
                        <td>02</td>
                        <td>Familiar</td>
                        <td>C</td>
                        <td>No Disponible</td>
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
export default GestionCuartos