const mongoose = require('mongoose');

let PlanesSchema = new mongoose.Schema({
    idPlan: Number,
    descripcion: Number,
    tipoHabitacion: String,
    costo: Number,
    fechaCaducidad: Date,
    disponibilidad: Boolean,
});

module.exports = mongoose.model('plan', PlanesSchema, 'planes')
