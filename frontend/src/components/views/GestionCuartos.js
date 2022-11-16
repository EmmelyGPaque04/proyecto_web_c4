import React, { useEffect, useState } from "react";
import axios from "axios"
import "../styles/gestionCuartos.css"

function GestionCuartos() {

    const [dataHabitacion, setDataHabitaciones] = useState([])

    useEffect(() => {
        axios.get('api/habitaciones').then(res => {
            console.log(res.data)
            setDataHabitaciones(res.data)
        }).catch(err => { console.log(err.stack) })
    }, [])

    return (
        <main>
            <h2 className="titulo_reporte">Reporte de habitaciones</h2>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Numero</th>
                        <th>Tipo</th>
                        <th>Precio</th>
                        <th>Bloque</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataHabitacion.map(habitacion => (
                            <tr>
                                <td>{habitacion.idHabitacion}</td>
                                <td>{habitacion.numeroHabitacion}</td>
                                <td>{habitacion.tipoHabitacion}</td>
                                <td>{habitacion.costoHabitacion}</td>
                                <td>{habitacion.bloque}</td>
                                <td>{habitacion.disponibilidad}</td>
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
export default GestionCuartos