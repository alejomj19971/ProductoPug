const express = require('express');
const Product = require('../models/product')
const routproduct = express.Router();

let message = ""
let error = false

routproduct.get('/', async(req, res) => {
    const prods = await Product.find();
    res.render('product',{message: message,error:error,products:prods})
})

routproduct.post('/', async(req, res) => {
    await Product.findOne({prodcod: req.body.prodcod})
    .then((product) => {
        if (product == null){
            const prod = new Product(req.body);
            prod.save();
            message = "Producto agregado exitosamente..."
            error = false
        }
        else{
            message = "Codigo de producto EXISTENTE. Inténtelo con otro";
            error = true
        }
        res.redirect('/product')
    })
    .catch((err) => {
        console.log(err);
    })
    
});



routproduct.get('/edit/:id', async(req, res) => {
    const {id}=req.params
    //Buscar el producto por el ID
    const product = await Product.findById(id)
    res.render('editProduct',{product:product})
   
})



routproduct.post('/edit/:id', async(req, res) => {
    const {id}=req.params
    const productoEncontrado=await Product.findById(id)
    if(productoEncontrado.prodcod==req.body.prodcod)
    //Buscar el producto por el ID
   await Product.updateOne({_id:id},req.body)
   error=false
   message="Producto Actualizado Correctamente"
   res.redirect('/product')
   
})

routproduct.get('/delete/:id', async(req, res) => {
    await Product.deleteOne({_id:req.params.id})
    error=false
    message="Producto Eliminado Correctamente"
    res.redirect('/product')
    
})




module.exports = routproduct;