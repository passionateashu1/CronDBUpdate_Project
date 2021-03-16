const mongoose = require('mongoose')

const padelSchema = mongoose.Schema({
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
   livello_atleta: {
       type: String,
   },
   tipologia_pala: {
       type: String,
   },
   superficie_pala: {
       type: String,
   },
   forma_piatto: {
       type: String,
   },
   bilanciamento_pala: {
       type: String,
   },
   materiale_piatto: {
       type: String,
   },
   materiale_cuore: {
       type: String,
   },
   sweet_spot: {
       type: String,
   },
   spessore: {
       type: String,
   },
   sensazione_colpo: {
       type: String,
   },
   peso: {
       type: String,
   },
})

//const Padel = mongoose.model("Padel", padelSchema)

module.exports = padelSchema
