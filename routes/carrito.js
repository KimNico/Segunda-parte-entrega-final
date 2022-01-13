const express = require('express');
const path = require('path');
const carritoController = require('../controllers/carritoController');

const router = express.Router();

router.post('/carrito', carritoController.createCarrito);

router.delete('/carrito/:id' , carritoController.deleteCarrito)

router.get('/carrito/:id', carritoController.deleteCarrito);

router.get('/carrito/:id/productos', carritoController.postProductos);

router.post('/carrito/:id/productos/:id_prod', carritoController.deleteProducto);


module.exports = router;