let express = require('express');
let app = express()
let path =require('path')
const PORT = 3000;

let productoController = require('./controller/fs/productoFs')
let carritoController = require('./controller/fs/carritoFs')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(productoController);
app.use(carritoController);

app.listen(PORT,()=>{
    console.log(`Server on: http://localhost:${PORT}`)
})