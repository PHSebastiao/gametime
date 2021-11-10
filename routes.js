var express = require('express');
var router = express.Router();

var handler = { root: __dirname };

// Rota Pagina inicial
router.get('/', function(req, res) {
    res.sendFile('./index.html', handler);
});

// Rota Mundo E-Sports
router.get('/esports', function(req, res) {
    res.sendFile('./mundoE-sports.html', handler);
});

// Rota Sobre nos
router.get('/sobrenos', function(req, res) {
    res.sendFile('./sobrenos.html', handler);
});

// Rota Jogos Retro
router.get('/retro', function(req, res) {
    res.sendFile('./jogosretro.html', handler);
});

// Rota Jogos Terror
router.get('/terror', function(req, res) {
    res.sendFile('./jogosterror.html', handler);
});

// Rota Jogos Mobile
router.get('/mobile', function(req, res) {
    res.sendFile('./jogosmobile.html', handler);
});

// Rota Jogos Ação
router.get('/acao', function(req, res) {
    res.sendFile('./acao.html', handler);
});

// Rota Jogos fps
router.get('/fps', function(req, res) {
    res.sendFile('./fps.html', handler);
});

module.exports = router;