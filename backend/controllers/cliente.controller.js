const Cliente = require('../models/cliente.model');

// Crear un nuevo cliente
exports.crearCliente = async (req, res) => {
  try {
    const nuevoCliente = new Cliente(req.body);
    await nuevoCliente.save();
    res.status(201).json(nuevoCliente);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear cliente', error });
  }
};

// Eliminar cliente por cedula
exports.eliminarClientePorCedula = async (req, res) => {
  try {
    const cedula = req.params.cedula.trim();
    if (!cedula) {
      return res.status(400).json({ message: 'Cédula inválida' });
    }
    
    const clienteEliminado = await Cliente.findOneAndDelete({ cedula });
    
    if (!clienteEliminado) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    
    res.json({ message: 'Cliente eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar cliente:', error);
    res.status(500).json({ message: 'Error al eliminar cliente', error });
  }
};

// Actualizar cliente por cedula
exports.actualizarClientePorCedula = async (req, res) => {
  try {
    const clienteActualizado = await Cliente.findOneAndUpdate(
      { cedula: req.params.cedula }, // Usar la cédula proporcionada en la ruta
      req.body, // Datos a actualizar
      { new: true, runValidators: true } // Devuelve el documento actualizado y ejecuta validadores
    );
    
    if (!clienteActualizado) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json(clienteActualizado); // Devuelve el cliente actualizado
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar cliente', error });
  }
};

// Mostrar todos los clientes
exports.mostrarTodosLosClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find(); // Obtiene todos los clientes de la base de datos
    res.json(clientes); // Devuelve la lista de clientes
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los clientes', error });
  }
};

// Mostrar todos los productos del cliente
exports.listarProductosPorCliente = async (req, res) => {
  try {
    const cedula = req.params.cedula; // Obtiene la cédula del cliente de los parámetros de la ruta
    const cliente = await Cliente.findOne({ cedula }).populate('productosComprados'); // Usa populate para obtener los productos

    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }

    res.json(cliente.productosComprados); // Devuelve los productos comprados por el cliente
  } catch (error) {
    console.error('Error al listar productos por cliente:', error);
    res.status(500).json({ message: 'Error al listar productos', error });
  }
};
