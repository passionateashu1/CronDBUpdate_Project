const mongoose = require("mongoose")

const volleySchema = mongoose.Schema({
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
    type: Number
  },
  url: {
    type: String,
  },
  img: {
    type: String,
  },
  altezzascarpa: {
    type: String,
  },
  ruolo: {
    type: String,
  },
  caratteristicascarpa: {
    type: String,
  },
  larghezzapianta: {
    type: String,
  },
  allenamenti: {
    type: String,
  },
  pesogiocatore: {
    type: String,
  },
  relazioni: {
    type: String,
  },
  taglia: {
    type: String,
  }
})

//const Volley = mongoose.model("Volley", volleySchema)

module.exports = volleySchema
