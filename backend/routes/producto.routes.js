const express = require('express');
const router = express.Router();
const productoController = require('../controllers/producto.controller');

// Ruta para crear un nuevo producto
router.post('/', productoController.crearProducto);

module.exports = router;
