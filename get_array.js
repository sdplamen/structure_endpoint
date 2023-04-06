const products = [
 { category: 'electronics', price: 400, title: 'phone', id: 1},
 { category: 'electronics', price: 900, title: 'tv', id: 2},
 { category: 'electronics', price: 200, title: 'vacuum', id: 3},
];
const express = require('express');
const app = express();
app.get('/products/:id', (request, response) => {
 const params = request.params;
 const requestedProduct = products.find(product => 
  product.id === Number(params.id));
 if(!requestedProduct) {
  response.status(404).send({ message: `the product with the id ${params.id} does not exist`});
 } else {
  response.status(200).send(requestedProduct);
 }
});
