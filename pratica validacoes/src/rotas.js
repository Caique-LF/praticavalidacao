const express = require('express');
const { cadastrarUsuario, listarUsuarios } = require('./controladores/usuarios');
const validarCorporequisicao = require('./intermediarios/validarCorporequiscao');
const schemaUsuario = require('./validacoe/schemaUsuario');


const rotas = express();

rotas.post('/usuario', validarCorporequisicao(schemaUsuario), cadastrarUsuario)


rotas.get('/usuario', listarUsuarios)

module.exports = rotas;