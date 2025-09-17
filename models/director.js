const { Schema, model } = require('mongoose');

const DirectorSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    fechaActualizacion: {
        type: Date,
        default: Date.now
    }
});

// Hook para actualizar fecha de modificación
DirectorSchema.pre('save', function(next) {
    this.fechaActualizacion = Date.now();
    next();
});

module.exports = model('Director', DirectorSchema);