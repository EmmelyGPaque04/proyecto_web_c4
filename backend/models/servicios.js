const mongoose = require('mongoose');

let ServiciosSchema = new mongoose.Schema({
    idServicio: Number,
    numeroServicio: Number,
    tipoServicio: String,
    costoServicio: Number,
    disponibilidad: Boolean,
});

module.exports = mongoose.model('servicio', ServiciosSchema, 'servicios')
