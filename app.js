// Importa el framework Express
const express = require('express');
const cors = require('cors'); // <-- Agrega esta línea
const { mongoConn } = require('./database/configuration');

// Conectar a Mongo
mongoConn();

// Crear instancia de Express
const app = express();

app.use(cors()); // <-- Agrega esta línea
// Middleware para que Express procese JSON
app.use(express.json());

// --- DEFINICIÓN DE ENDPOINTS ---
const generos=require('./routes/generoRoute');
const directores=require('./routes/directorRoute');
const productoras = require('./routes/productoraRoute');
const tipos = require('./routes/tipoRoute');
const medias = require('./routes/mediaRoute');

app.use('/generos',generos)
app.use('/directores',directores)
app.use('/productoras', productoras);
app.use('/tipos', tipos);
app.use('/medias', medias);



app.get('/', (req, res) => {
  res.json({
    mensaje: '¡OK!',
    version: '1.0.0'
  });
});

// Exportar la app configurada
module.exports = app;