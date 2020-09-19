const express = require('express')

const router = express.Router();

const products = []

router.get('/', (req, res) => {
    res.send(products)
});


router.post('/', (req, res) => {
    const product = req.body
    products.push(product)
    res.send('Product added to Mock db')
})

module.exports = router;