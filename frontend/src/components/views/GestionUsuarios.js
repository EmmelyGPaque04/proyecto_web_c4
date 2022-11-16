import React, { useEffect, useState } from "react"
import axios from "axios"
import "../styles/gestionUsuarios.css"


function GestionUsu() {

    const [dataUsers1, setDataUsers1] = useState([])

    useEffect(() => {
        axios.get('api/register').then(res => {
            console.log(res.data)
            setDataUsers1(res.data)
        }).catch(err => { console.log(err.stack) })
    }, [])

    return (
        <main>
            <h2 className="titulo_reporte">Reporte de usuarios</h2>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Numero de documento</th>
                        <th>Correo</th>
                        <th>Telefone</th>
                        <th>Tipo de documento</th>
                        <th>Contraseña</th>
                        <th>Historial de recervas</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataUsers1.map(users1 => (
                            <tr>
                                <td>{users1.idUser}</td>
                                <td>{users1.nombres}</td>
                                <td>{users1.apellidos}</td>
                                <td>{users1.NumeroDoc}</td>
                                <td>{users1.correo}</td>
                                <td>{users1.telefono}</td>
                                <td>{users1.TipoDoc}</td>
                                <td>{users1.Contrasenha}</td>
                                <td><a href="#" className="btn btn-outline-light"> <i className="bi bi-clock-history"></i>Ver Historial</a></td>
                                <td>
                                    <a href="#" className="btn btn-outline-light"><i className="bi bi-info-circle-fill"></i>Ver detalles</a>
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
export default GestionUsu