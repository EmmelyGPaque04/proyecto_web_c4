const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    idUser: Number,
    nombres: String,
    apellidos: String,
    telefono: Number,
    correo: String
});

module.exports = mongoose.model('user', UserSchema, 'users')
