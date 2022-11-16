const mongoose = require('mongoose');

let HabitacionesSchema = new mongoose.Schema({
    idHabitacion: Number,
    numeroHabitacion: Number,
    tipoHabitacion: String,
    costoHabitacion: Number,
    disponibilidad: String,
    bloque: String
});

module.exports = mongoose.model('habitacion', HabitacionesSchema, 'habitaciones')