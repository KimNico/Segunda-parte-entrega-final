let fs =require("fs")


class ProductoController{
    constructor(url){
        this.url= url;
    }

    async getAll(){
        try {
            return await fs.promises.readFile(`${this.url}`,'utf-8');
        } catch (error) {
            console.log(error);
        }
    }


    async getProductos(req,res,next){
        try{
        let {id} = req.params.id
        if(id){
            let prod = this.getAll()
                prod.forEach(element => {
                    if(element.id==id){ 
                     return element
                    }
                });
            
            }else{
                return await this.getAll()
            }
        
         }catch(error){
        console.log(error)
        }
    }
    async postProductos (req,res,next){
        try {
            let producto= req.body
            let date = new Date(Date.now());
            let prod =  await this.getAll()
            producto.id = prod.length + 1;
            producto.timestamp = date.toDateString();
            prod.push(producto);
            return await fs.promises.writeFile(`${this.url}`,JSON.stringify(prod, null,2))
        } catch (error) {
            console.log(error);
        }
    }
    async putProductos(req,res,next){
        try {
            let prod = this.getAll()
            let obj = req.body
            let {id} = req.params.id;
            prod.forEach(element => {
                if(element.id==id){
                    for (const prop in obj){
                        prod[element][prop] = obj[prop]
                    }
                }
            });
            return await fs.promises.writeFile(`${this.url}`,JSON.stringify(prod, null,2));
        } catch (error) {
            console.log(error);
        }
    }
    async deleteProducto(req,res,next){
        let {id} = req.params.id
        let prod= await  JSON.parse(this.getAll());
        
        prod.forEach(element=>{
            if(element.id == id){
                product.splice(element,1 )
            }
        })
        let contenido = JSON.stringify(prod, null,2);
        await fs.promises.writeFile(`${this.url}`,contenido)
        return res;
    }


}

module.exports = ProductoController;