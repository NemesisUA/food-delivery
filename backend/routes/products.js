const express = require('express');
const {
    getProducts,
    getShopProducts
} = require('../controllers/productsController')

const router = express.Router();

router.get('/', getProducts);

router.get('/:shop', getShopProducts);

router.post('/', (req, res) => {
  res.json({mssg: 'POST a new products'})
})

router.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE a product'})
})

router.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a product'})
})

module.exports = router