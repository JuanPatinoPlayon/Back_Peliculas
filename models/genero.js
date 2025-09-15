const {Schema, model} = require('mongoose');


const GeneroSchema=Schema({
   nombre:{
        type : String,
        required: [true,'El nombre es obligatorio'],  
        unique: true
    },
   estaso:{
        type: Boolean,
        default: true,
        required: true,
   
   },
   fechaCreacion:{
        type: Date,
        defoult: new Date(),
   },
   fechaActualizacion:{
        type: Date, 
        defoult: new Date(),

   },
   descripcion:{
        type: String,
   }

})
module.exports=model('Genero', GeneroSchema);