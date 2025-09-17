const {Schema, model} = require('mongoose');


const GeneroSchema=Schema({
   nombre:{
        type : String,
        required: [true,'El nombre es obligatorio'],  
        unique: true
    },
   estado:{
        type: Boolean,
        default: true,
        required: true,
   
   },
   fechaCreacion:{
        type: Date,
        default: Date.now,
   },
   fechaActualizacion:{
        type: Date, 
        default: Date.now,

   },
   descripcion:{
        type: String,
   }

})

GeneroSchema.pre('save', function(next) {
    this.fechaActualizacion = Date.now();
    next();
});
module.exports=model('Genero', GeneroSchema);