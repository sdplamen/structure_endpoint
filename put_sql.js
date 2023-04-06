const express = require('express');
const app = express();
const connection = require("../config");

app.put('/products/:id', (request, response) => {
 const productId = request.params.id;
 const formData = request.body;
 
 connection.query(
  'UPDATE Product SET ? WHERE id = ?',
  [formData, productId],
  (error, results) => {
   if (error) res.status(500).json(error);
   connection.query(
    'SELECT * FROM Product WHERE id = ?',
    productId,
    (error, results) => {
    if (error) res.status(500).json(error);
    
    const updatedProduct = results;
    
    response.status(200).json(updatedProduct);
   });
 });
});
