'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err, res) => {

    if (err) {
        return console.log(`error al conectar: ${err}`)
    }
    console.log('Conexion establecida')

    app.listen(config.port, () => {
        console.log('api res corriendo en httplocalhost ' + config.port)
    })
})