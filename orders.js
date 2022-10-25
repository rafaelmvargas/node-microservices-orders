const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/orders', () => {
  console.log('Datebase connected - Orders');
});

// Model is loaded
require('./Order');
const Order = mongoose.model('Order');

// Will create a new order
app.post('/order', (req, res) => {
  var newOrder = new {
    CustomerID: req.body.CustomerID,
    BookID: req.body.BookID,
    intialDate: req.body.intialDate,
    deliveryDate: req.body.deliveryDate,
  }();

  var order = new Order(newOrder);
});

app.listen(7777, () => {
  console.log('Up and running - Orders service');
});
