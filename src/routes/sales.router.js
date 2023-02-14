const express = require('express');
const productsController = require('../controllers/productsController');

const salesRouter = express.Router();

salesRouter.get('/', productsController.getAllSales);
salesRouter.get('/:id', productsController.getSaleById);

module.exports = {
  salesRouter,
};