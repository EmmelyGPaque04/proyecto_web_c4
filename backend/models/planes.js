const mongoose = require('mongoose');

let PlanesSchema = new mongoose.Schema({
    idPlan: Number,
    descripcion: String,
    tipoHabitacion: String,
    costo: Number,
    fechaCaducidad: Date,
    disponibilidad: Boolean,
});

module.exports = mongoose.model('plan', PlanesSchema, 'planes')
