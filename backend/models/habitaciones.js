const mongoose = require('mongoose');

let HabitacionesSchema = new mongoose.Schema({
    idHabitacion: Number,
    numeroHabitacion: Number,
    tipoHabitacion: String,
    costoHabitacion: Number,
    disponibilidad: Boolean,

});

module.exports = mongoose.model('habitacion', HabitacionesSchema, 'habitaciones')