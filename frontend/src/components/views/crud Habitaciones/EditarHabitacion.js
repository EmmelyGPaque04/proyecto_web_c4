import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from 'sweetalert2';
import "../../styles/registrarse+login.css"

export default function EditarHabitacion() {

  const params = useParams()

  const [idHabitacion, setIdHabitacion] = useState(0)
  const [numeroHabitacion, setNumeroHabitacion] = useState(0)
  const [tipoHabitacion, setTipoHabitacion] = useState("Personal")
  const [costoHabitacion, setCostoHbitacion] = useState(0)
  const [bloque, setBloque] = useState("A")
  const [disponibilidad, setDisponibilidad] = useState("Disponible")

  useEffect(() => {
    axios.post('api/habitaciones', { _id: params._id }).then(res => {
      console.log(res.data[0])
      const dataHabitacion = res.data[0]
      setNumeroHabitacion(dataHabitacion.numeroHabitacion)
      setTipoHabitacion(dataHabitacion.tipoHabitacion)
      setCostoHbitacion(dataHabitacion.costoHabitacion)
      setBloque(dataHabitacion.bloque)
      setDisponibilidad(dataHabitacion.disponibilidad)
    })
  }, [])

  function ActualizarHabitacion() {
    const updateHabitacion = {
      _id: params._id,
      numeroHabitacion: numeroHabitacion,
      tipoHabitacion: tipoHabitacion,
      costoHabitacion: costoHabitacion,
      bloque: bloque,
      disponibilidad: disponibilidad,
    }

    axios.post("api/habitaciones", updateHabitacion)
    .then(res => {
        console.log(res.data)
    })
    .then((err => {console.log(err)}))
  }

    return (
      <main className="_body">
        <div className="container_2">
          <h1 className="titulo">Editar habitacion</h1>
          <form className="container__form" action="/gestionCuartos">
            <label for="_id" className="labels" hidden>ID</label>
            <input type="number" className="inputs" id="_id" value={idHabitacion} onChange={(e) => { setIdHabitacion(e.target.value) }} required hidden />
            <label for="numHabitacion" className="labels">Numero de habitacion</label>
            <input type="number" className="inputs" id="numHbitacion" value={numeroHabitacion} onChange={(e) => { setNumeroHabitacion(e.target.value) }} required />
            <div className="combobox_TipoDocu">
              <label className="labels">Tipo de habitacion</label>
              <select className="options__tipoDocu" required value={tipoHabitacion} onChange={(e) => { setTipoHabitacion(e.target.value) }}>
                <option className="options" selected>Personal</option>
                <option className="options">Semi Personal</option>
                <option className="options">Familiar</option>
              </select>
            </div>
            <label for="precio" className="labels">Costo de habitacion</label>
            <input type="number" className="inputs" id="precio" required value={costoHabitacion} onChange={(e) => { setCostoHbitacion(e.target.value) }} />
            <div className="combobox_TipoDocu">
              <label className="labels">Bloque</label>
              <select className="options__tipoDocu" required value={bloque} onChange={(e) => { setBloque(e.target.value) }}>
                <option className="options" selected>A</option>
                <option className="options">B</option>
                <option className="options">C</option>
              </select>
            </div>
            <div className="combobox_TipoDocu">
              <label className="labels">Estado</label>
              <select className="options__tipoDocu" required value={disponibilidad} onChange={(e) => { setDisponibilidad(e.target.value) }}>
                <option className="options" selected>Disponible</option>
                <option className="options">No Disponible</option>
              </select>
            </div>
            <input type="submit" value="Editar" className="enviar" onClick={ActualizarHabitacion}></input>
          </form>
        </div>
      </main>
    )
}