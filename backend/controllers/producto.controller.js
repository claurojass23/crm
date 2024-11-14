const Producto = require('../models/producto.model');
const Cliente = require('../models/cliente.model');

exports.crearProducto = async (req, res) => {
  try {
    // Busca al cliente por cédula
    const cliente = await Cliente.findOne({ cedula: req.body.cedulaCliente });
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }

    const nuevoProducto = new Producto({
      nombre: req.body.nombre,
      precio: req.body.precio,
      cedulaCliente: req.body.cedulaCliente // Cambia de clienteId a cedulaCliente
    });

    await nuevoProducto.save();

    // Agregar el nuevo producto al cliente
    await Cliente.findOneAndUpdate(
      { cedula: req.body.cedulaCliente },
      { $push: { productosComprados: nuevoProducto._id } }
    );

    res.status(201).json(nuevoProducto);
  } catch (error) {
    console.error('Error al crear producto:', error);
    res.status(500).json({ message: 'Error al crear producto', error });
  }
};
