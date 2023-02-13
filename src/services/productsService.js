const productsModel = require('../models/productsModel');

const getAll = async () => {
  const result = await productsModel.getAll();
  return { type: null, message: result };
};
const getById = async (id) => {
  const result = await productsModel.getById(id);
  if (!result) {
    return { type: 'error', message: 'Product not found' };
  }
  return { type: null, message: result };
};
module.exports = {
  getAll,
  getById,
};