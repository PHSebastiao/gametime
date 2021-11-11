const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes')
const routesJogos = require('./routesJogos')

app.use('/assets', express.static('assets'));
app.use('/images', express.static('images'));
app.use('/audio', express.static('audio'));

app.use('/', routes)
app.use('/jogos', routesJogos)

app.get('*', function(req, res) {
    console.error("Erro ao acessar - ", req.path, req.statusCode, req.statusMessage)
    res.status(404).sendFile('./error.html', { root: __dirname })
});

app.listen(process.env.PORT || port,
    () => console.log("Server is running..."));