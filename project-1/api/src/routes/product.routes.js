/**
 * Arquivo: src/routes/product.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Product'.
 * Data: 22/08/2020
 * Autor: Jefferson Valandro
 */

 const router = require('express-promise-router')();
 const productController = require('../controllers/product.controllers');

 //==> Definindo as rotas do CRUD - 'Product'

 //==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/products
 router.post('/products', productController.createProduct);

 //==> Rota responsável por selecionar todos os 'Products': (POST): localhost:3000/products
 router.get('/products', productController.listAllProducts);

 router.delete('/products', productController.deleteProduct);

 module.exports = router;