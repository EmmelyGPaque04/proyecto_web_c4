
// Configuracion principal
const express= require('express');
const mongoose = require('mongoose');
const router = express.Router();


// Modelos
const HabitacionesSchema = require('./models/habitaciones.js')
const CheckinSchema = require('./models/checkin.js')
const PlanesSchema = require('./models/planes.js')
const ReservaSchema = require('./models/reserva.js')
const ServiciosSchema = require('./models/servicios.js')
const UserSchema = require('./models/users.js')

const app= express();
app.use(express.urlencoded({extend: true}));
app.use(express.json());

// Conexion a base de datos
mongoose.connect('mongodb+srv://duvan:nQwZqpN55PN26n7R@cluster0.9p2zoff.mongodb.net/Hotel?retryWrites=true&w=majority')

//Operacion Crud Check - In
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


//Operaciones Crud HABITACIONES
router.get('/habitaciones', (req, res) => {
    HabitacionesSchema.find(function (err, datos){
        if(err){
            console.error("Error");
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

router.get("/habitaciones/:id", (req, res) => {
    const { id } = req.params;
    HabitacionesSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });


router.delete("/habitaciones/:id", (req, res) => {
    const { id } = req.params;
    HabitacionesSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

router.put("/habitaciones/:id", (req, res) => {
    const { id } = req.params;
    const { numeroHabitacion, tipoHabitacion,  costoHabitacion, disponibilidad} = req.body;
    HabitacionesSchema
      .updateOne({ _id: id }, { $set: {numeroHabitacion, tipoHabitacion,  costoHabitacion, disponibilidad} })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });


//Operaciones Crud Planes
router.get('/planes', (req, res) => {
    PlanesSchema.find(function (err, datos){
        if(err){
            console.error("Error");
        }else{
            res.send(datos)
        }
    });
})

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

router.get("/planes/:id", (req, res) => {
    const { id } = req.params;
    PlanesSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  router.delete("/planes/:id", (req, res) => {
    const { id } = req.params;
    PlanesSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

//Operaciones Crud Reserva
router.get('/reserva', (req, res) => {
    ReservaSchema.find(function (err, datos){
        if(err){
            console.error("Error");
        }else{
            res.send(datos)
        }
    });
})

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

router.get("/reserva/:id", (req, res) => {
    const { id } = req.params;
    ReservaSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  router.delete("/reserva/:id", (req, res) => {
    const { id } = req.params;
    ReservaSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

//Operaciones Crud Servicios
router.get('/servicios', (req, res) => {
    ServiciosSchema.find(function (err, datos){
        if(err){
            console.error("Error");
        }else{
            res.send(datos)
        }
    });
})

router.post('/servicios', (req, res) => {
    let ServiciosSchema = new HabitacionesSchema({
        idServicio: req.body.id,
        numeroServicio: req.body.numero,
        tipoServicio: req.body.servicio,
        costoServicio: req.body.costo,
        disponibilidad: req.body.disponibilidad,
    })
    ServiciosSchema.save(function (err, datos){
        if(err){
            console.log(err);
        }
        res.send("Todo se fue bien")
    });
})


router.get("/servicios/:id", (req, res) => {
    const { id } = req.params;
    ServiciosSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  router.delete("/servicios/:id", (req, res) => {
    const { id } = req.params;
    ServiciosSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

//Operaciones Crud Users
router.get('/register', (req, res) => {
    UserSchema.find(function (err, datos){
        if(err){
            console.error("Error");
        }else{
            res.send(datos)
        }
    });
})

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

router.get("/register/:id", (req, res) => {
    const { id } = req.params;
    UserSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  router.delete("/register/:id", (req, res) => {
    const { id } = req.params;
    UserSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

// Servidor Local
app.use(router)
app.listen(3000, () => {
    console.log("Corriendo en puerto: 3000");
})