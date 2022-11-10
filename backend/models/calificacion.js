const mongoose = require('mongoose');

let CalificacionSchema = new mongoose.Schema({
    idCalificacion: Number,
    calificacion: Number,
    fechaCalificacion: Date,
    horaCalificacion: Date,
    
});

module.exports = mongoose.model('calificacion', ComentariosSchema, 'calificaciones')
