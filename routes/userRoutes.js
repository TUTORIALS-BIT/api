const express = require('express');
const api = express.Router();

api.get('/saludo', (req, res) => {
  console.log(" Mi primera ruta. ");
})

module.exports = api;