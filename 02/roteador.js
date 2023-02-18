const express = require('express');

const { jogador_vez, consultar, remover, adicionar} = require('./rodadas');

const rotas = express();

rotas.get("/", jogador_vez);
rotas.get("/consultar", consultar);
rotas.get("/remover", remover );
rotas.get("/adicionar", adicionar);

module.exports = rotas