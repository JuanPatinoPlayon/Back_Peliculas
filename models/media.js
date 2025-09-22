const { Schema, model } = require('mongoose');

const MediaSchema = new Schema({
    serial: {
        type: String,
        required: [true, 'El serial es obligatorio'],
        unique: true
    },
    titulo: {
        type: String,
        required: [true, 'El título es obligatorio']
    },
    sinopsis: {
        type: String
    },
    url: {
        type: String,
        required: [true, 'La URL es obligatoria'],
        unique: true
    },
    imagen: {
        type: String
    },
    fecha_creacion: {
        type: Date,
        default: Date.now
    },
    fecha_actualizacion: {
        type: Date,
        default: Date.now
    },
    fecha_estreno: {
        type: Date
    },
    generos_id: [{
        type: Schema.Types.ObjectId,
        ref: 'Genero'
    }],
    directores_id: [{
        type: Schema.Types.ObjectId,
        ref: 'Director'
    }],
    productoras_id: [{
        type: Schema.Types.ObjectId,
        ref: 'Productora'
    }],
    tipos_id: {
        type: Schema.Types.ObjectId,
        ref: 'Tipo'
    }
});

// Hook para actualizar fecha_actualizacion
MediaSchema.pre('save', function(next) {
    this.fecha_actualizacion = Date.now();
    next();
});

module.exports = model('Media', MediaSchema);