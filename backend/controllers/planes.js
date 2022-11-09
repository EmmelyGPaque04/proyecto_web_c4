const express = require("express");
const PlanesSchema = require("../models/planes");
const router = express.Router();


//---------------------Operaciones Crud Planes--------------------------//

router.get('/planes', (req, res) => {
    PlanesSchema.find(function (err, datos){
        if(err){
            console.error("Error");
        }else{
            res.send(datos)
        }
    });
})

router.get("/planes/:id", (req, res) => {
    const { id } = req.params;
    PlanesSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

router.post('/planes', (req, res) => {
    let PlanesSchema = new HabitacionesSchema({
        idReserva: req.body.id,
        codigoReserva: req.body.descripcion,
        fechaReserva: req.body.habitacion,
        fechaFin: req.body.caducidad,
        tipoHabitacion: req.body.disponibilidad,
        cantidadPersonas: req.body.costo,
        CantidadDias: req.body.dias
    })
    PlanesSchema.save(function (err, datos){
        if(err){
            console.log(err);
        }
        res.send("Todo se fue bien")
    });
})


router.delete("/planes/:id", (req, res) => {
const { id } = req.params;
PlanesSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


router.put("/planes/:id", (req, res) => {
const { id } = req.params;
const body = req.body;
PlanesSchema
    .findByIdAndUpdate({ _id: id }, { $set: body })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;