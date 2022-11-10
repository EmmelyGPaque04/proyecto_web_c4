const mongoose = require('mongoose');

let ComentariosSchema = new mongoose.Schema({
    idComentario: Number,
    numeroComentario: Number,
    comentario: String,
    fechaPublicacion: Date,
    horaPublicacion: Date,
});

module.exports = mongoose.model('comentario', ComentariosSchema, 'comentarios')
