const express = require('express');
const bodyParser = require('body-parser');

// Importar rutas
const clienteRoutes = require('./routes/cliente.routes');
const productoRoutes = require('./routes/producto.routes');

// Importar configuración de la base de datos
require('./config/database');

const app = express();
const PORT = 10000;

// Middleware
app.use(bodyParser.json());


// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack); // Log del error
  res.status(500).json({ message: 'Algo salió mal!', error: err.message });
});

// Usar rutas
app.use('/clientes', clienteRoutes);
app.use('/productos', productoRoutes);


// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
