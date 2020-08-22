/**
 * Arquivo: server.js
 * Descrição: arquivo responsável por toda a configuração e execução da aplicação.
 * Data: 22/08/2020
 * Autor: Jefferson Valandro
 */

 const app = require('./src/app');
 const port = process.env.port || 3000;

 app.listen(port, () => {
     console.log('Aplicação executando na porta', port);
 });
