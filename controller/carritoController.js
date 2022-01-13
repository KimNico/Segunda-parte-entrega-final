const Product = require('../models/productosModel');
const Carrito = require('../models/carritoModel');
const MyJson = require('../resource/carrito.json');
const carrito = require('../models/carritoModel');


const createCarrito = (req,res,next)=>{
    let carrito = new Carrito()
     let carrito_id = carrito.length +1

     let nuevo_carrito = {
         "id":carrito_id,
         ...Product
     }
     carrito.push(nuevo_carrito);
     let json = JSON.stringify(carrito);
    fs.writeFile('productos.json',json);
    console.log(carrito);
}
 const deleteCarrito = (req,res,next)=>{
     let id = req.params.id
     const borrar_carrito = carrito.findIndex(p => p.id == id);
     carrito.splice(borrar_carrito, 1);
     let json = JSON.stringify(carrito);
     fs.writeFile('productos.json',json);
     console.log(carrito);
 }

const postProductos = (req,res,next)=>{
    let carrito = new Carrito(req.params.id)
    const addedProduct = Product.findById(req.body)[0];
    carrito.save(addedProduct);
    let json = JSON.stringify(carrito);
    fs.writeFile('productos.json',json);
     console.log(carrito);
}
const deleteProducto = (req,res,next)=>{
    let id = req.params.id;
    carrito.findIndex(p => p.id == id);
    if(id = Carrito.id){
    carrito.delete(req.body.id_prod);
    }
    let json = JSON.stringify(carrito);
    fs.writeFile('productos.json',json);
    console.log(carrito);
}


module.exports={
    createCarrito,
    deleteCarrito,
    postProductos,
    deleteProducto
}