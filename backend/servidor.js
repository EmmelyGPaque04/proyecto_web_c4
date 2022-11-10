
// Configuracion principal
const express= require('express');
const mongoose = require('mongoose');
const router = express.Router();
const app= express();

// Middlewares
app.use(express.urlencoded({extend: true}));
app.use(express.json());

// Conexion a base de datos
mongoose.connect('mongodb+srv://duvan:nQwZqpN55PN26n7R@cluster0.9p2zoff.mongodb.net/Hotel?retryWrites=true&w=majority')

const checkinRoute = require("./controllers/checkin");
const habitacionesRoute = require("./controllers/habitaciones");
const planesRoute = require("./controllers/planes");
const reservaRoute = require("./controllers/reserva");
const serviciosRoute = require("./controllers/servicios");
const userRoute = require("./controllers/users");

// Routes Raiz
app.use("/api", checkinRoute, habitacionesRoute, planesRoute, reservaRoute, serviciosRoute, userRoute)


// Servidor Local
app.use(router)
app.listen(3000, () => {
    console.log("Corriendo en puerto: 3000");
})