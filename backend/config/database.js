const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jonathanduqee:Jonathan5896@sena.mgq9h.mongodb.net/?retryWrites=true&w=majority&appName=SENA')
  .then(() => console.log('Conectado a MongoDB'))
  .catch(error => console.error('Error al conectar a MongoDB:', error));

module.exports = mongoose;
