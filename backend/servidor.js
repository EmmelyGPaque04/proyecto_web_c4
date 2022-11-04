
// Configuracion principal
const express= require('express');
const mongoose = require('mongoose');
const HabitacionesSchema = require('./models/habitaciones.js')

const app= express();
const router = express.Router();
app.use(express.urlencoded({extend: true}));
app.use(express.json());

// Conexion a base de datos
mongoose.connect('mongodb+srv://duvan:nQwZqpN55PN26n7R@cluster0.9p2zoff.mongodb.net/Hotel?retryWrites=true&w=majority')


//Operaciones Crud
router.get('/habitaciones', (req, res) => {
    HabitacionesSchema.find(function (err, datos){
        if(err){
            console.error("Paila");
        }else{
            res.send(datos)
        }
    });
})

router.post('/habitaciones', (req, res) => {
    let NuevaHabitacion = new HabitacionesSchema({
        idHabitacion: req.body.id,
        numeroHabitacion: req.body.numero,
        tipoHabitacion: req.body.tipo,
        costoHabitacion: req.body.costo,
        dispoibilidad:  req.body.disponible
    })
    NuevaHabitacion.save(function (err, datos){
        if(err){
            console.log(err);
        }
        res.send("Todo se fue bien")
    });
})


router.put("/habitaciones/:id", (req, res) => {
    let ActualizarHabitacion = new HabitacionesSchema({
        idHabitacion: req.body.id,
        numeroHabitacion: req.body.numero,
        tipoHabitacion: req.body.tipo,
        costoHabitacion: req.body.costo,
        dispoibilidad:  req.body.disponible
    })
    ActualizarHabitacion.update(function (err, datos){
        if(err){
            console.log(err);
        }
        res.send("Todo se fue bien")
    });
});


// Servidor Local
app.use(router)
app.listen(3000, () => {
    console.log("hola pues 3000");
})