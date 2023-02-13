const express = require('express');
const productsController = require('../controllers/productsController');

const productrouter = express.Router();

productrouter.get('/', productsController.getAll);
productrouter.get('/:id', productsController.getById);
productrouter.post('/', productsController.CreateProduct);

module.exports = {
  productrouter,
};