const express = require('express');
const app = express();
const connection = require("../config");

router.delete('/products/:id', (request, response) => {
 const productId = request.params.id;
 connection.query(
  'DELETE FROM Product WHERE id = ?',
  productId,
  (error, results) => {
   if (error) response.status(500).json(error);
    connection.query(
    'SELECT * FROM Product',
    productId,
    (error, results) => {
    if (error) res.status(500).json(error);
    
    const updatedDB = results;
    
    response.status(200).json(updatedDB);
   });
  });
});
