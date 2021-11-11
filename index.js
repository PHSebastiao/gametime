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

app.listen(port, () => {
    console.log(`Site rodando em http://localhost:${port}`)
})