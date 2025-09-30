// Importa el framework Express
const express = require('express');
const cors = require('cors'); 
const { mongoConn } = require('./database/configuration');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// Conectar a Mongo
mongoConn();

// Crear instancia de Express
const app = express();

app.use(cors({
origin:"*"
})); 

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

// --- CONFIGURACIÓN DE SWAGGER ---
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Películas y Series',
      version: '1.0.0',
      description: 'API para gestionar películas, series, géneros, directores, productoras y tipos',
      contact: {
        name: 'Juan C',
        email: 'tu_correo@ejemplo.com'
      }
    },
    components: {
      schemas: {
        Genero: {
          type: 'object',
          properties: {
            nombre: { type: 'string', example: 'Acción' }
          }
        },
        Director: {
          type: 'object',
          properties: {
            nombre: { type: 'string', example: 'Steven Spielberg' },
            estado: { type: 'boolean', example: true },
            fechaCreacion: { type: 'string', format: 'date-time' },
            fechaActualizacion: { type: 'string', format: 'date-time' }
          }
        },
        Productora: {
          type: 'object',
          properties: {
            nombre: { type: 'string', example: 'Warner Bros' },
            estado: { type: 'boolean', example: true },
            fecha_creacion: { type: 'string', format: 'date-time' },
            fecha_actualizacion: { type: 'string', format: 'date-time' },
            slogan: { type: 'string', example: 'El mejor cine' },
            descripcion: { type: 'string', example: 'Productora internacional' }
          }
        },
        Tipo: {
          type: 'object',
          properties: {
            nombre: { type: 'string', example: 'Película' },
            fecha_creacion: { type: 'string', format: 'date-time' },
            fecha_actualizacion: { type: 'string', format: 'date-time' },
            descripcion: { type: 'string', example: 'Contenido audiovisual' }
          }
        },
        Media: {
          type: 'object',
          properties: {
            serial: { type: 'string', example: 'SER001' },
            titulo: { type: 'string', example: 'La Gran Aventura' },
            sinopsis: { type: 'string', example: 'Una emocionante historia.' },
            url: { type: 'string', example: 'https://lagranaventura.com' },
            imagen: { type: 'string', example: 'https://lagranaventura.com/poster.jpg' },
            fecha_creacion: { type: 'string', format: 'date-time' },
            fecha_actualizacion: { type: 'string', format: 'date-time' },
            fecha_estreno: { type: 'string', format: 'date-time' },
            generos_id: { type: 'array', items: { type: 'string' } },
            directores_id: { type: 'array', items: { type: 'string' } },
            productoras_id: { type: 'array', items: { type: 'string' } },
            tipos_id: { type: 'string' }
          }
        }
        // Agrega aquí los demás esquemas que uses en tus $ref
      }
    }
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Exportar la app configurada
module.exports = app;