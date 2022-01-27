const { db:firebaseDB } = require("../../config");
let date = new Date(Date.now())

let productos = [{
    id:1,
    timestamp: date.toDateString(),
    nombre:'lapiz',
    descripcion:'lapiz negro',
    codigo:123,
    foto:'URL',
    precio:'$12',
    stock:50
},
{
    id:2,
    timestamp: date.toDateString(),
    nombre:'cuaderno',
    descripcion:' cuaderno rayado',
    codigo:651,
    foto:'URL',
    precio:'$45',
    stock:63
},
{
    id:3,
    timestamp: date.toDateString(),
    nombre:'calculadora',
    descripcion:'calculadora cientifica',
    codigo:951,
    foto:'URL',
    precio:'$67',
    stock:26
}
]


class ProductosFb{
    constructor(collection, productos){
      this.table = collection;
      this.productos = productos;  
    }

    async create(){
       try {
        let productos = firebaseDB.collection(this.table)
        for (const prod of this.productos) {
            await productos.doc().set(prod)
        }
       } catch (error) {
           console.log(error);
       }
    }
    
    async getProductos(){
        try {
            let prods = await firebaseDB.collection(this.table).get()
            console.log(prods)
            return prods;
        } catch (error) {
            
        }
    }
    async getProductosById(id){
     try {
        let prods =  firebaseDB.collection(this.table).where('id','=', Number(id));
        await prods.get().then((querySnapshot)=>{
            if(querySnapshot.size){
                querySnapshot.docs.forEach(doc=>{
                    return doc.data();
                })
            }
        })
     } catch (error) {
         console.log(error);
     }
    }
    async postProductos(prod){
       try {
        let newProd = firebaseDB.collection(this.table).set(prod)
        return newProd;
       } catch (error) {
           console.log(error);
       }
    }
    async putProductos(id, prod){
      try {
        let prods =  firebaseDB.collection(this.table).where('id','=', Number(id));
        await prods.get().then((querySnapshot)=>{
            if(querySnapshot.size){
                querySnapshot.docs.forEach(doc=>{
                    return doc.ref.update(prod);
            })}
        }) 
      } catch (error) {
          console.log(error);
      }
}

    async deleteProducto(id){
        try {
            let prods =  firebaseDB.collection(this.table).where('id','=', Number(id));
            await prods.get().then((querySnapshot)=>{
                if(querySnapshot.size){
                    querySnapshot.docs.forEach(doc=>{
                        return doc.ref.delete();
                })}
            }) 
          } catch (error) {
              console.log(error);
          }

    }
}