const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciar a app
const app = express();
app.use(express.json());
app.use(cors());

//Iniciar BD
mongoose.connect('mongodb://localhost:27017/nodeapi', 
{ 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);