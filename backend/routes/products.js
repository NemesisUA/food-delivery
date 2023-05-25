const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({mssg: 'GET all products'})
})

router.get('/:id', (req, res) => {
  res.json({mssg: 'GET a single product'})
})

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