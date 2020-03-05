const express = require('express');
const routes = require('./routes/userRoutes');
const app = express();

app.use('/api', routes);
module.exports = app;