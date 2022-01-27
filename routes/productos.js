const express = require('express');
const fs = require('fs');
const path = require('path');
const ProductoCotroller = require('../controller/fs/productoFs');

const router = express.Router();
let Productos = new ProductoCotroller();


router.get('/:id?', Productos.getProductos);

router.post('/', Productos.postProductos);

router.put('/:id', Productos.putProductos);

router.delete('/id', Productos.deleteProducto);


module.exports = router;