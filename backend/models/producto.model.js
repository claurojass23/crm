const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  cedulaCliente: { type: String, required: true }
}, {
  timestamps: true // Agrega hora de creación y actualización
});

module.exports = mongoose.model('Producto', productoSchema);
