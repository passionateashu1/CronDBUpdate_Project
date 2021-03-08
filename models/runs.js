const mongoose = require("mongoose")

const runSchema = mongoose.Schema({
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
  appoggio: {
      type: String,
  },
  categ_running: {
      type: String,
  },
  tipo_runner: {
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
  }
})

//const Run = mongoose.model("Run", runSchema)

module.exports = runSchema
