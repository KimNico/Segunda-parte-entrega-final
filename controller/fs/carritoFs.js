let fs = require("fs");
const ProductoController = require("../fs/productoFs");
let product = new ProductoController();

class CarritoController{
    constructor(url){
        this.url= url;
    }

    
    async createCarrito(req,res,next){
        try {
            let date = new Date(Date.now())
        let data =  await fs.promises.readFile(JSON.parse(`${this.url}`,'utf-8'));
        let carrito = JSON.parse(data)
        let carritoId  = carrito.length +1;
        let newCarrito = {
            id : carritoId,
            timestamp:`${date.toLocaleString()}`,
            producto:[]
        } 
        carrito.push(newCarrito);
        await fs.promises.writeFile(`${this.url}`,JSON.stringify(carrito, null,2))
        } catch (error) {
            console.log(error);
        }
    }

    async deleteCarrito(req,res,next){
       try {
        let {id} = req.params.id;
        let data = await fs.promises.readFile(`${this.url}`,'utf-8')
        let carrito = JSON.parse(data)
        if(carrito.id = Number(id)){
            await fs.promises.unlink(`${this.url}`)
        }
       } catch (error) {
           console.log(error);
       }

    }

    async getCarritoProductos(req,res,next){
        try {
            let {id} = req.para.id
           let data = await fs.promises.readFile(`${this.url}`,'utf-8');
            let carrito = JSON.parse(data)
           if(carrito.id == Number(id)){
                return carrito.producto
           }
        } catch (error) {
            console.log(error)
        }
    }
    async postCarritoProductos(req,res,next){
        try {
            let {id} = req.params.id;
        let data = await fs.promises.readFile(`${this.url}`,'utf-8');
        let carrito = JSON.parse(data)
        let prod = product.getProductos(id)
        if( carrito){
            carrito.producto.push(prod);
        }
        } catch (error) {
            console.log(error);
        }
    }

    async deleteCarritoProducto(req,res,next){
        let {id} = req.params.id;
        let data = await fs.promises.readFile(`${this.url}`,'utf-8');
        let carrito = JSON.parse(data)
    }
}

module.exports = CarritoController;
