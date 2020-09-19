// import express from 'express';
// import bodyParser from 'body-parser';

const express = require('express')
const bodyParser = require('body-parser')
const productRoutes = require('./routes/products')

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/products', productRoutes)
app.get('/', (req, res) => {
    console.log("Hello world")
    res.send('Hello world')
})
app.listen(PORT, () => { console.log(`Server running on PORT: http://localhost:${PORT}`) })