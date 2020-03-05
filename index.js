const mongoose = require('mongoose'); //Requerimos mongoose.

/**
 * Usamos el método connect para condigurar los parametros de conexión.
 */
mongoose.connect('mongodb://localhost:27017/bictiaMusic', { useNewUrlParser: true, useUnifiedTopology}, (error, res) => {
  if (error){
    console.log("Error al conectarnos con la DB.")
  }else{
    console.log("Nos conectamos correctamente.")
  }
})