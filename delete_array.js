let products = [
 { category: 'electronics', price: 400, title: 'phone', id: 1},
 { category: 'electronics', price: 900, title: 'tv', id: 2},
 { category: 'electronics', price: 200, title: 'vacuum', id: 3},
];
const express = require('express');
const app = express();

app.delete('/products/:id', (request, response) => {
 const id = request.params.id;
 try {
  products = products.filter(product => product.id !== Number(id));
  response.status(200).send(products);
 } catch (e) {
  response.status(404).send({ message: `the product with the id ${params.id} does not exist`});
 }
});
