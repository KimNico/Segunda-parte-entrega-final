let carrito = [];
class Carrito {
    constructor(id_carrito){
        this.id_carrito=id_carrito;
    }
    static save(product) {
        const existingProductIndex = carrito.products.findIndex(p => p.id == product.id);
        if (existingProductIndex >= 0) { 
            const exsitingProduct = carrito.products[existingProductIndex];
            exsitingProduct.stock += 1;
        } else { 
            product.qty = 1;
            carrito.products.push(product);
        }

        carrito.totalPrice += product.price;
    }

    static getcarrito() {
        return carrito;
    }

    static delete(productId) {
        const isExisting = carrito.products.findIndex(p => p.id == productId);
        if (isExisting >= 0) {
            carrito.products.splice(isExisting, 1);
        }
    }

}

module.exports = carrito;