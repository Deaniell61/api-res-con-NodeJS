'use strict'

const express = require('express')
const ProductCtrl = require('../controllers/products')
const auth = require('../moddlewares/auth')
const api = express.Router()

api.get('/product', ProductCtrl.getProducts)
api.get('/product/:productid', ProductCtrl.getProduct)
api.post('/product', ProductCtrl.saveProduct)
api.put('/product/:productid', ProductCtrl.updateProduct)
api.delete('/product/:productid', ProductCtrl.deleteProduct)
api.get('/private', auth.isAuth, (req, res) => {
    res.status(200).send({ message: "Tienes Acceso" })
})

module.exports = api