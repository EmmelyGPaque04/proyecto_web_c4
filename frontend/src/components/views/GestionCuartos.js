import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

    function EliminarUsuario(idHabitacion) {
        axios.post('api/habitaciones', { _id: idHabitacion }).then(res => {
            console.log(res.data)
          }).catch(err =>{
            console.log(err)
          })
    }

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
                                    <Link to={`/editarhabitacion/${habitacion._id}`}><li className="btn btn-outline-light"><i className="bi bi-pencil-fill"></i>Editar</li></Link>
                                    <Link to={"/newhabitacion"}className="btn btn-outline-light"><i className="bi bi-plus-circle-fill"></i>Agregar</Link>
                                    <button className="btn btn-outline-light" onClick={()=>{EliminarUsuario(habitacion._id)}}><i class="bi bi-trash3-fill"></i>Eliminar</button>
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