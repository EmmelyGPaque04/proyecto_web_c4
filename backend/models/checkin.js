const mongoose = require('mongoose');

let CheckinSchema = new mongoose.Schema({
    idCheckin: Number,
    tipoHabitacion: String,
    fechaCaducidad: Date,
    estado: Boolean
});

module.exports = mongoose.model('checkin', CheckinSchema, 'checkinis')
