// Generar el esquema de la colección de product
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    prodcod:String,
    prodname:String,
    prodprice:Number,
    prodstock:Number,
    created:{
        type:Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('products', ProductSchema);

