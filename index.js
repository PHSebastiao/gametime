const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes')

app.use('/assets', express.static('assets'));
app.use('/images', express.static('images'));

app.use('/', routes)

app.listen(port, () => {
    console.log(`Site rodando em http://localhost:${port}`)
})