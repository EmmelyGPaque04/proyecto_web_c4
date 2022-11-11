const express = require("express");
const ServiciosSchema = require("../models/servicios");
const router = express.Router();


//-------------Operaciones Crud Servicios---------------//
router.get('/servicios', (req, res) => {
    ServiciosSchema.find(function (err, datos){
        if(err){
            console.error("Error");
        }else{
            res.send(datos)
        }
    });
})


router.get("/servicios/:id", (req, res) => {
    const { id } = req.params;
    ServiciosSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});


router.post('/servicios', (req, res) => {
    let NuevoServiciosSchema = new ServiciosSchema({
        idServicio: req.body.idServicio,
        numeroServicio: req.body.numeroServicio,
        tipoServicio: req.body.tipoServicio,
        costoServicio: req.body.costoServicio,
        disponibilidad: req.body.disponibilidad,
    })
    NuevoServiciosSchema.save(function (err, datos){
        if(err){
            console.log(err);
        }
        res.send("Todo se fue bien")
    });
})


router.delete("/servicios/:id", (req, res) => {
const { id } = req.params;
ServiciosSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


router.put("/servicios/:id", (req, res) => {
    const { id } = req.params;
    const body = req.body;
    ServiciosSchema
        .findByIdAndUpdate({ _id: id }, { $set: body })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;