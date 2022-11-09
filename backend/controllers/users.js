const express = require("express");
const UserSchema = require("../models/users");
const router = express.Router();



//---------------Operaciones Crud Users-----------------//
router.get('/register', (req, res) => {
    UserSchema.find(function (err, datos){
        if(err){
            console.error("Error");
        }else{
            res.send(datos)
        }
    });
})


router.get("/register/:id", (req, res) => {
    const { id } = req.params;
    UserSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});


router.post('/register', (req, res) => {
    let UserSchema = new HabitacionesSchema({
        idUser: req.body.id,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        edad: req.body.edad,
    })
    UserSchema.save(function (err, datos){
        if(err){
            console.log(err);
        }
        res.send("Todo se fue bien")
    });
})


router.delete("/register/:id", (req, res) => {
const { id } = req.params;
UserSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


router.put("/register/:id", (req, res) => {
    const { id } = req.params;
    const body = req.body;
    UserSchema
        .findByIdAndUpdate({ _id: id }, { $set: body })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


module.exports = router;