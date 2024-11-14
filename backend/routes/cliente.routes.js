const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente.controller');

// Crear un nuevo cliente
router.post('/', clienteController.crearCliente);

// Ruta para eliminar un cliente por cédula
router.delete('/:cedula', clienteController.eliminarClientePorCedula); // Cambiado de :id a :cedula

// Actualizar cliente por cédula
router.put('/:cedula', clienteController.actualizarClientePorCedula); // Cambiado de :id a :cedula

// Mostrar todos los clientes
router.get('/', clienteController.mostrarTodosLosClientes);

// Ruta para listar productos comprados por un cliente
router.get('/:cedula/productos', clienteController.listarProductosPorCliente); // Cambiado de :id a :cedula

module.exports = router;
