// Importa el framework Express
const express = require('express');
const { mongoConn } = require('./database/configuration');

// Conectar a Mongo
mongoConn();

// Crear instancia de Express
const app = express();

// Middleware para que Express procese JSON
app.use(express.json());

// --- DEFINICIÓN DE ENDPOINTS ---
const generos=require('./routes/generoRoute');
const directores=require('./routes/directorRoute');


app.use('/generos',generos)
app.use('/directores',directores)


app.get('/', (req, res) => {
  res.json({
    mensaje: '¡OK!',
    version: '1.0.0'
  });
});

// Exportar la app configurada
module.exports = app;