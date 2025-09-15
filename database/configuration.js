const mongoose = require('mongoose');

const mongoConn = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: 'pelis', // nombre de la BD
    });
    console.log('✅ Conectado a Mongo');
  } catch (error) {
    console.error('❌ Error al conectar a Mongo:', error.message);
    throw new Error('No se pudo conectar a Mongo');
  }
};

module.exports = { mongoConn };