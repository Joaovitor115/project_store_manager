const express = require('express');
const productsController = require('../controllers/productsController');
const validateName = require('../middlewares/validateName');

const productrouter = express.Router();

productrouter.get('/', productsController.getAll);
productrouter.get('/:id', productsController.getById);
productrouter.post('/', validateName, productsController.CreateProduct);
productrouter.put('/:id', validateName, productsController.updateProduct);
productrouter.delete('/:id', productsController.deleteProduct);

module.exports = {
  productrouter,
};