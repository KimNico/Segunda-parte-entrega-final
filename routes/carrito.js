const express = require('express');
const path = require('path');
const CarritoController = require('../controller/fs/carritoFs');

const router = express.Router();
const Carrito = new CarritoController

router.post('/', Carrito.createCarrito);

router.delete('/:id' , Carrito.deleteCarrito)

router.get('/:id', Carrito.getCarritoProductos);

router.post('/:id/productos', Carrito.postCarritoProductos);

router.delete('/:id/productos/:id_prod', Carrito.deleteCarritoProducto);


module.exports = router;