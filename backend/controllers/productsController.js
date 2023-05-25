const Products = require('../models/productModel');
const mongoose = require('mongoose');

// get all products
const getProducts = async (req, res) => {
  const products = await Products.find({});
  
  res.status(200).json(products);
}

// get shop products
const getShopProducts = async (req, res) => {
  const { shop } = req.params;

  if ( !["KFC", "McDonny", "BurgerKing"].includes(shop) ) {
    return res.status(404).json({error: 'No such shop'})
  }

  const shopProducts = await Products.find({shop: shop})

  if (!shopProducts) {
    return res.status(404).json({error: 'No such shop products'})
  }

  res.status(200).json(shopProducts)
}

module.exports = {
  getProducts,
  getShopProducts
}
