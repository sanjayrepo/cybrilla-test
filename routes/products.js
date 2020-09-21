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

router.get('/discountedProduct', (req, res) => {
    console.log(products)
    let totalCount = 0;

    for (let i = 0; i < products.length; i++) {
        let price = Object.values(products[i])[0]
        totalCount += price
    }
    console.log(totalCount)
    res.send(products)
})

module.exports = router;