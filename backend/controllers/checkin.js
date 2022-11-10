const express = require("express");
const CheckinSchema = require("../models/checkin");
const router = express.Router();



//---------------Operacion Crud Check - In-------------------//
router.get('/check', (req, res) => {
    CheckinSchema.find(function (err, datos){
        if(err){
            console.error("Error");
        }else{
            res.send(datos)
        }
    });
})


router.post('/check', (req, res) => {
    let CheckinSchema = new HabitacionesSchema({
        idCheckin: req.body.id,
        tipoHabitacion: req.body.habitacion,
        fechaCaducidad: req.body.caducidad,
        estado: req.body.estado,
    })
    CheckinSchema.save(function (err, datos){
        if(err){
            console.log(err);
        }
        res.send("Todo se fue bien")
    });
})


router.get("/check/:id", (req, res) => {
    const { id } = req.params;
    CheckinSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });


router.delete("/check/:id", (req, res) => {
const { id } = req.params;
CheckinSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


router.put("/check/:id", (req, res) => {
const { id } = req.params;
const body = req.body;
CheckinSchema
    .findByIdAndUpdate({ _id: id }, { $set: body })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


module.exports = router;