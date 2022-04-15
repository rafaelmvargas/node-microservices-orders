const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/orders', () => {
  console.log('Datebase connected - Orders');
});

app.listen(7777, () => {
  console.log('Up and running - Orders service');
});
