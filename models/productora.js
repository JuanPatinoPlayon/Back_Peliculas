const { Schema, model } = require('mongoose');

const ProductoraSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true
    },
    fecha_creacion: {
        type: Date,
        default: Date.now
    },
    fecha_actualizacion: {
        type: Date,
        default: Date.now
    },
    slogan: {
        type: String
    },
    descripcion: {
        type: String
    }
});

// Hook para actualizar fecha_actualizacion
ProductoraSchema.pre('save', function(next) {
    this.fecha_actualizacion = Date.now();
    next();
});

module.exports = model('Productora', ProductoraSchema);