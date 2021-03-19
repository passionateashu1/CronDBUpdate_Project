const mongoose = require('mongoose')

const paleSchema = mongoose.Schema({
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
    superficie_pala: {
        type: String,
    },
    forma_piatto: {
        type: String,
    },
    materiale_piatto: {
        type: String,
    },
    materiale_cuore: {
        type: String,
    },
    bilanciamento_pala: {
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
    short_description: {
        type: String,
    },

})

//const Pale = mongoose.model("Pale", paleSchema)

module.exports = paleSchema
