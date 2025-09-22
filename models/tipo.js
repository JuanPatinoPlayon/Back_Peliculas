const { Schema, model } = require('mongoose');

const TipoSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    fecha_creacion: {
        type: Date,
        default: Date.now
    },
    fecha_actualizacion: {
        type: Date,
        default: Date.now
    },
    descripcion: {
        type: String
    }
});

// Hook para actualizar fecha_actualizacion
TipoSchema.pre('save', function(next) {
    this.fecha_actualizacion = Date.now();
    next();
});

module.exports = model('Tipo', TipoSchema);