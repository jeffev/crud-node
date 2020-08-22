/**
 * Arquivo: src/controllers/product.controllers.js
 * Descrição: arquivo responsável pela lógica do crud da API 'Product'.
 * Data: 22/08/2020
 * Autor: Jefferson Valandro
 */

 const db = require('../config/database');

 // => método responsável por criar um novo product
 exports.createProduct = async(req, res) => {
     const { productName, quantity,  price} = req.body;
     const response = await db.query(
         'INSERT INTO products (productName, quantity,  price) VALUES ($1, $2, $3)',
         [productName, quantity,  price]
     );

     res.status(201).send({
         message: 'Produto added succesfully!',
         body: {
             product: {productName, quantity, price}
         },
     });
 };

 // ==> metodo responsavel por selecionar todos os Products
 exports.listAllProducts = async (req, res) => {
     const response = await db.query ('SELECT * FROM products ORDER BY productName');
     res.status(200).send(response.rows);
 };

  // ==> metodo responsavel por deletar o Product
  exports.deleteProduct = async (req, res) => {
    const { productId} = req.body;
    const response = await db.query ('DELETE FROM products WHERE productId = $1',
    [productId]);

    res.status(201).send({
        message: 'Produto deleted succesfully!',
        body: {
            product: {productId}
        },
    });
  };
 