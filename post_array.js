const products = [
    { category: 'electronics', price: 400, title: 'phone', id: 1},
    { category: 'electronics', price: 900, title: 'tv', id: 2},
    { category: 'electronics', price: 200, title: 'vacuum', id: 3},
];
const express = require('express');
const app = express();
app.post('/products', (request, response) => {
  const newProduct = request.body;
  products.push(newProduct);
  const confirmedEntry = products.find(product => product === newProduct);
  if (confirmedEntry) {
   response.status(200).send(confirmedEntry);
  } else {
   response.status(400).send("Error Creating Product");
  }
});
