const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    idUser: Number,
    nombres: String,
    apellidos: String,
    edad: Number,
});

module.exports = mongoose.model('user', UserSchema, 'users')
