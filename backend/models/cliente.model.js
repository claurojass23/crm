const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
  cedula: { type: String, required: true, unique: true },
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  productosComprados: [{ type: Schema.Types.ObjectId, ref: 'Producto' }]
}, { timestamps: true }); // Agrega timestamps para fechas de creación y actualización

module.exports = mongoose.model('Cliente', clienteSchema);
