import React, { useEffect, useState } from "react";
import axios from "axios"
import "../styles/gestionServicios.css"

function GestionServicios() {

    const [dataServicio, setDataServicio] = useState([])

    useEffect(() => {
        axios.get('api/servicios').then(res => {
            console.log(res.data)
            setDataServicio(res.data)
        }).catch(err => { console.log(err.stack) })
    }, [])

    return (
        <main>
            <h2 className="titulo_reporte">Lista de Servicios</h2>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descripcion</th>
                        <th>Plan Asignado</th>
                        <th>Precio</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataServicio.map(servicio => (
                            <tr>
                                <td>{servicio.idServicio}</td>
                                <td><a href="#" className="btn btn-outline-light"><i className="bi bi-info-circle-fill"></i>Ver Descripcion</a></td>
                                <td>{servicio.planAsignado}</td>
                                <td>{servicio.costoServicio}</td>
                                <td>{servicio.disponibilidad}</td>
                                <td>
                                    <a href="#" className="btn btn-outline-light"><i className="bi bi-info-circle-fill"></i>Ver detalles</a>
                                    <a href="#" className="btn btn-outline-light"><i className="bi bi-pencil-fill"></i>Editar</a>
                                    <a href="#" className="btn btn-outline-light"><i className="bi bi-plus-circle-fill"></i>Agregar</a>
                                    <a href="#" className="btn btn-outline-light"><i class="bi bi-trash3-fill"></i>Eliminar</a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </main>
    )
}
export default GestionServicios