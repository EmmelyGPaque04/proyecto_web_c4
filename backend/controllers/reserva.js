const express = require("express");
const ReservaSchema = require("../models/reserva");
const router = express.Router();


//-----------------Operaciones Crud Reserva---------------------//
router.get('/reserva', (req, res) => {
    ReservaSchema.find(function (err, datos){
        if(err){
            console.error("Error");
        }else{
            res.send(datos)
        }
    });
})


router.get("/reserva/:id", (req, res) => {
    const { id } = req.params;
    ReservaSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});


router.post('/reserva', (req, res) => {
    let ReservaSchema = new HabitacionesSchema({
        idReserva: req.body.id,
        codigoReserva: req.body.codigo,
        fechaReserva: req.body.fechainicio,
        fechaFin: req.body.fechafin,
        tipoHabitacion: req.body.habitacion,
        cantidadPersonas: req.body.personas,
        CantidadDias: req.body.dias
    })
    ReservaSchema.save(function (err, datos){
        if(err){
            console.log(err);
        }
        res.send("Todo se fue bien")
    });
})


router.delete("/reserva/:id", (req, res) => {
const { id } = req.params;
ReservaSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


router.put("/reserva/:id", (req, res) => {
    const { id } = req.params;
    const body = req.body;
    ReservaSchema
        .findByIdAndUpdate({ _id: id }, { $set: body })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;