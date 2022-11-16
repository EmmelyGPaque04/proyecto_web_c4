const mongoose = require('mongoose');

let ServiciosSchema = new mongoose.Schema({
    idServicio: Number,
    planAsignado: String,
    costoServicio: Number,
    disponibilidad: String,
});

module.exports = mongoose.model('servicio', ServiciosSchema, 'servicios')
