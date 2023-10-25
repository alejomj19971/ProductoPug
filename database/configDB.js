const mongoose = require('mongoose');
const db = 'dbfact'
mongoose.connect(`mongodb://127.0.0.1:27017/${db}`)
.then(dbase=>{
    console.log(`Conectado a la base de datos ${db}`);
})
.catch(error => console.log(error))
