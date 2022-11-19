import React, {useState} from "react";
import axios from "axios";

import Swal from 'sweetalert2';
import "../../styles/registrarse+login.css"

export default function AgregarHabitacion() {

    let id = 5
    const [idHabitacion, setIdHabitacion] = useState(0)
    const [numeroHabitacion , setNumeroHabitacion] = useState(0)
    const [tipoHabitacion, setTipoHabitacion] = useState("Personal")
    const [costoHabitacion, setCostoHbitacion] = useState(0)
    const [bloque, setBloque] = useState("A")
    const [disponibilidad, setDisponibilidad] = useState("Disponible")

    function CrearHabitacion() {
        var habitacion = {
            numeroHabitacion: parseInt(numeroHabitacion),
            tipoHabitacion: tipoHabitacion,
            costoHabitacion: parseInt(costoHabitacion),
            bloque: bloque,
            disponibilidad: disponibilidad,
            idHabitacion: parseInt(idHabitacion.toString()) + id
        }

        axios.post("api/habitaciones", habitacion)
        .then(res => {
            console.log(res.data)
        })
        .then((err => {console.log(err)}))

        Swal.fire({
            title: "Operacion exitosa",
            icon: "success",
            text: "Dato agregado correctamente",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "black"
          })
    }

    return(
    <main className="_body">
        <div className="container_2">
          <h1 className="titulo">Crear nueva habitacion</h1>
          <form className="container__form" action="/gestionCuartos">
          <label for="idHabitacion" className="labels" hidden>ID</label>
            <input type="number" className="inputs" id="idHabitacion" value={idHabitacion} onChange={(e)=>{setIdHabitacion(e.target.value)}} required hidden/>
            <label for="numHabitacion" className="labels">Numero de habitacion</label>
            <input type="number" className="inputs" id="numHbitacion" value={numeroHabitacion} onChange={(e)=>{setNumeroHabitacion(e.target.value)}} required/>
            <div className="combobox_TipoDocu">
              <label className="labels">Tipo de habitacion</label>
              <select className="options__tipoDocu" required value={tipoHabitacion} onChange={(e)=>{setTipoHabitacion(e.target.value)}}>
                <option className="options" selected>Personal</option>
                <option className="options">Semi Personal</option>
                <option className="options">Familiar</option>
              </select>
            </div>
            <label for="precio" className="labels">Costo de habitacion</label>
            <input type="number" className="inputs" id="precio" required value={costoHabitacion} onChange={(e)=>{setCostoHbitacion(e.target.value)}}/>
            <div className="combobox_TipoDocu">
              <label className="labels">Bloque</label>
              <select className="options__tipoDocu" required value={bloque} onChange={(e)=>{setBloque(e.target.value)}}>
                <option className="options" selected>A</option>
                <option className="options">B</option>
                <option className="options">C</option>
              </select>
            </div>
            <div className="combobox_TipoDocu">
              <label className="labels">Estado</label>
              <select className="options__tipoDocu" required value={disponibilidad} onChange={(e)=>{setDisponibilidad(e.target.value)}}>
                <option className="options" selected>Disponible</option>
                <option className="options">No Disponible</option>
              </select>
            </div>
            <input type="submit" value="Agregar" className="enviar" onClick={CrearHabitacion}></input>
          </form>
        </div>
      </main>
    )
}
