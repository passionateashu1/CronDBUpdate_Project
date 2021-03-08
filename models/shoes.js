const mongoose = require('mongoose')

const shoeSchema = mongoose.Schema({
    sku: {
        type: String,
        required: true
    },
    Brand: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
   genere: {
       type: String,
       required: true
   },
   price: {
       type: Number,
   },
   url: {
       type: String,
   },
   img: {
       type: String,
   },
   appoggio: {
       type: String,
   },
   "categ-running": {
       type: String,
   },
   "tipo-runner": {
       type: String,
   },
   obiettivo_runner: {
       type: String,
   },
   peso_runner: {
       type: String,
   },
   larghezza_pianta: {
       type: String,
   },
   superficie_di_corsa: {
       type: String,
   },
   comfort_scarpa_running: {
       type: String,
   },
   relazioni: {
       type: String,
   },
   taglia: {
       type: String,
   },
})

//const Shoe = mongoose.model("Shoe", shoeSchema)

module.exports = shoeSchema
