const express = require('express');
const fs = require('fs');
const path = require('path');

const productoCotroller = require('../controllers/productoController');

const router = express.Router();


router.get('/:id', productoCotroller.getProductos);

router.post('/', productoCotroller.postProductos);

router.put('/:id', productoCotroller.putProductos);

router.delete('/id', productoCotroller.deleteProducto);


module.exports = router;