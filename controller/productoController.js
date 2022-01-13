const fs = require('fs');
const Producto = require('../models/productosModel');
const MyJson = require('../resource/productos.json');


let getProductos=(req,res,next)=>{
    let json = JSON.stringify(nuevo_producto);
    fs.readFile('productos.json',json);
    res.json(json);
}

let postProductos=(req,res,next)=>{
    const title = req.body.title;
    const imageUrl = req.body.imageURL;
    const price = req.body.price;
    const descripcion = req.body.descripcion;
    const code= req.body.code;
    const stock =req.body.stock;
    let nuevo_producto = new Producto(null, title, price, imageUrl, descripcion, code, stock);
    nuevo_producto.save()
    let json = JSON.stringify(nuevo_producto);
    fs.writeFile('productos.json',json);
    console.log(nuevo_producto);
}

let putProductos=(req,res,next)=>{
    const title = req.body.title;
    const imageUrl = req.body.imageURL;
    const price = req.body.price;
    const descripcion = req.body.descripcion;
    const code= req.body.code;
    const stock =req.body.stock;

    const productoEditado = new Product(req.body.id, req.body.title, req.body.price, req.body.imageURL, req.body.descripcion, req.body.code, req.body.stock);
    productoEditado.update()

    let json = JSON.stringify(productoEditado);
    fs.writeFile('productos.json',json);
    console.log(productoEditado);
}

let deleteProducto=(req,res,next)=>{
    let producto_borrado = new Producto.deleteById(req.body.id);

    let json = JSON.stringify(producto_borrado);
    fs.writeFile('productos.json',json);
}


module.exports= {
    getProductos,
    postProductos,
    putProductos,
    deleteProducto
}