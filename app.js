const express = require('express');
require('dotenv').config()
const configDb = require('./database/configDB')
const product = require('./routes/product');
const app = express();
// PORT
const port = process.env.PORT || 3200

// set
app.set('view engine', 'pug');
app.set('views','views')

// middlewares
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(express.json());
app.use('/product', product);

app.listen(port, ()=>{
    console.log(`Server in http://localhost:${port}`);
});




