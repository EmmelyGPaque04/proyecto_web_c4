const mongoose = require('mongoose');

let ReservaSchema = new mongoose.Schema({
    idReserva: Number,
    codigoReserva: Number,
    fechaReserva: Date,
    fechaFin: Date,
    tipoHabitacion: Boolean,
    cantidadPersonas: Number,
    CantidadDias: Date,

});

module.exports = mongoose.model('reserva', ReservaSchema, 'reservas')
