/**
 * Arquivo: src/routes/index.js
 * Descrição: arquivo responsável pela chamada da(s) APIs da aplicão.
 * Data: 22/08/2020
 * Autor: Jefferson Valandro
 */

const express = require('express');
const router = express.Router();

router.get('/api', (req, res) =>{
    res.status(200).send({
        success: 'true',
        message: 'Seja bem-vindo a API Node.js + PostgreSQL + Azure!',
        version: '1.0.0'
    })
});

module.exports = router;