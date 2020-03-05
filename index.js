const mongoose = require('mongoose'); //Requerimos mongoose.
const app = require('./app');

/**
 * Usamos el método connect para condigurar los parametros de conexión.
 */
mongoose.connect('mongodb://localhost:27017/bictiaMusic', { useNewUrlParser: true, useUnifiedTopology: true}, (error, res) => {
  if (error){
    console.log("Error al conectarnos con la DB.")
  }else{
    console.log("Nos conectamos correctamente.")
    app.listen(3000, () => {
      console.log("Estamos conectados en el puerto 3000");
    })
  }
})