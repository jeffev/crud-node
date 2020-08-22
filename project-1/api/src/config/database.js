/**
 * Arquivo: src/config/database.js
 * Descrição: arquivo responsável pelas 'connectionStrings' da aplição: PostgreSql.
 * Data: 22/08/2020
 * Autor: Jefferson Valandro
 */

 const {Pool} = require('pg');
 const dotenv = require('dotenv');

 dotenv.config();

 // ==> Conexão com a Base de Dados (PostgreSql).
 const pool = new Pool ({
    connectionString: process.env.DATABASE_URL
 });

 pool.on('connect',  () => {
    console.log('Base de dados conectado com sucesso!');
 });

 module.exports = {
     query: (text, params) => pool.query(text, params)
 };