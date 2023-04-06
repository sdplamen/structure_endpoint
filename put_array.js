let products = [
 { category: 'electronics', price: 400, title: 'phone', id: 1},
 { category: 'electronics', price: 900, title: 'tv', id: 2},
 { category: 'electronics', price: 200, title: 'vacuum', id: 3},
];
const express = require('express');
const app = express();

app.put('/products/:id', (request, response) => {
 const params = request.params;
 const body = request.body;
 let index = products.findIndex((product) => product.id === Number(params.id));
 
 if (index >= 0) {
  products[index] = body;
  let confirmedEntry = products[index];
  response.status(200).send(confirmedEntry);
 } else {
  try {
   products.push(body);
   let confirmedEntry = products[products.length - 1];
   response.status(200).send(confirmedEntry); 
  } catch(e) {
   response.status(404).send({ message: `update failed`});
  }
 }
});
