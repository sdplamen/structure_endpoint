const products = [
 { category: 'electronics', price: 400, title: 'phone', id: 1},
 { category: 'electronics', price: 900, title: 'tv', id: 2},
 { category: 'electronics', price: 200, title: 'vacuum', id: 3},
];

const express = require('express');
const app = express();

app.get('/products/:id', (request, response) => {
 const params = request.params;
 let productID = params.id;
 connection.query('SELECT * FROM Product WHERE id = ?', productID, 
  (error, results) => {
   if (error) response.status(500).json(error);
   const newProduct = results;
   response.status(200).(newProduct);
 });

});
