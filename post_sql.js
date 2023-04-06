const products = [
 { category: 'electronics', price: 400, title: 'phone', id: 1},
 { category: 'electronics', price: 900, title: 'tv', id: 2},
 { category: 'electronics', price: 200, title: 'vacuum', id: 3},
];

const express = require('express');
const app = express();

app.post('/products', (request, response) => {
 const formData = request.body;
 connection.query(
  'INSERT INTO Product set ?',
  [formData],
  (error, results) => {
   if (error) {
    response.status(500).json(error);
   }
   
   const newProductId = results.insertId;

   connection.query(
    'SELECT * FROM Product WHERE id = ?',
    newProductId, 
    (error, results) => {
     if (error) {
      response.status(500).json(error);
     }
     const newProduct = results;
     response.status(200).send(newProduct);
  });
 });
});
