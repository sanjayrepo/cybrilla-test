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
    let totalPrice = 0;
    let totalAfterDiscount = 0;
    let discount = 0
    let finalObj = {}

    for (let i = 0; i < products.length; i++) {
        let produetName = Object.keys(products[i])[0]
        let price = Object.values(products[i])[0]
        switch (produetName) {
            case "A":
                finalObj.A = price
                if (price > 90) {
                    discount = price - 15
                    finalObj.discount = discount
                }
                break;
            case "B":
                finalObj.B = price
                if (price > 40) {
                    discount = price - 5
                    finalObj.discount = discount
                }
                break;
            case "C":
                finalObj.C = price
                break;
            case "D":
                finalObj.D = price
                break;
            default:
                break;
        }

        totalPrice += price
    }
    if (totalPrice > 150) {
        totalAfterDiscount = totalPrice - 20
    }
    finalObj.totalPrice = totalPrice
    finalObj.totalAfterDiscount = totalAfterDiscount
    res.send(finalObj)
})

module.exports = router;