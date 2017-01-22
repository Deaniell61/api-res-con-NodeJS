'use strict'
const Product = require('../models/products')

function getProduct(req, res) {
    let productid = req.params.productid

    Product.findById(productid, (err, product) => {
        if (err) return res.status(500).send({ message: 'errro en la peticion' + err })
        if (!product) return res.status(404).send({ message: 'el producto no existe' })

        res.status(200).send({ product })
    })

}

function getProducts(req, res) {
    Product.find({}, (err, product) => {
        if (err) return res.status(500).send({ message: 'errro en la peticion' + err })
        if (!product) return res.status(404).send({ message: 'el producto no existe' })

        res.status(200).send({ product })
    })
}

function saveProduct(req, res) {
    console.log('POST /api/product')
    console.log(req.body)
    let product = new Product()
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description

    product.save((err, productStored) => {
        if (err) res.status(500).send({ message: 'error al salvar en al base de datos' })

        res.status(200).send({ product: productStored })
    })
}

function updateProduct(req, res) {
    let productid = req.params.productid
    let update = req.body;

    Product.findByIdAndUpdate(productid, update, (err, product) => {
        if (err) return res.status(500).send({ message: 'errro en la peticion' + err })
        if (!product) return res.status(404).send({ message: 'el producto no existe' })

        res.status(200).send({ message: "el mensaje ha sido actualizado" + product })


    })
}

function deleteProduct(req, res) {
    let productid = req.params.productid

    Product.findById(productid, (err, product) => {
        if (err) return res.status(500).send({ message: 'errro en la peticion' + err })
        if (!product) return res.status(404).send({ message: 'el producto no existe' })

        product.remove(err => {
            if (err) return res.status(500).send({ message: 'errro en la peticion' + err })
            res.status(200).send({ message: 'el mensaje ha sido eliminado' })
        })

    })
}

module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct
}