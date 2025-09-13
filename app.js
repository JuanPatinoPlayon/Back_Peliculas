const { version } = require('mongoose');

// importa el framework express
const express = require('express')

//crea una instancia de aplicacion  express
const app = express()

//Middleware para que Expres pueda entender JSON en las peticiones POST
app.use(express.json())

//Asignación del puerto 
app.set('port', process.env.PORT || 3000)

//Definición de endpoints
app.get('/', (req, res) => {
    //Respuesta en formato JSON
    res.json({ message: 'OK',version :'1.0.0' })

});

//Iniciar el servidor para que escuche las peticiones en el puerto asignado
app.listen(app.get('port'), () => console.log(`Arranco el puerto ${app.get('port')}`))

//texto cambio 
