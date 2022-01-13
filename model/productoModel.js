const products = [];

class Product {

    constructor(id, title, price, imageURL, descripcion,code,stock) {
        this.id = id;
        this.title = title;
        this.price = new Number(price);
        this.imageURL = imageURL;
        this.descripcion = descripcion;
        this.code=code;
        this.stock=stock
    }

    save() {
        this.id = Math.floor(Math.random() * 100000);
        products.push(this);
        
    }

    static findAll() {
        return products;
    }

    static findById(prodId) {
        return products.filter(p => p.id == prodId);
    }

    update() {
        const editProduct = products.findIndex(p => p.id == this.id);
        products[editProduct] = this;
    }

    static deleteById(id_prod) {
        const deleteProduct = products.findIndex(p => p.id == id_prod);
        products.splice(deleteProduct, 1);
    }

}

module.exports = Product;