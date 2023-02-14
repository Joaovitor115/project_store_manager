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
const getByName = async (name) => {
  const result = await productsModel.getByName(name);
  if (!result) {
    return { type: 'error', message: 'Product_not_found' };
  }
  return { type: null, message: result };
};
const CreateProduct = async (name) => {
  const result = await productsModel.CreateProduct(name);
  if (!result) {
    return { type: 'error', message: 'Product not found' };
  }
  return { type: null, message: result };
};
const updateProduct = async (name, id) => {
  const doesExist = await getById(Number(id));
  console.log(doesExist, 'does');
  if (doesExist.type) {
    return { type: 'not_found', message: 'Product not found' };
  }
  await productsModel.updateProduct(name, id);
  const result = await productsModel.getById(Number(id));
  console.log('serrvice', result);
  return { type: null, message: result };
};
const deleteProduct = async (id) => {
  const doesExist = await getById(Number(id));
  if (doesExist.type) {
    return { type: 'not_found', message: 'Product not found' };
  }
  await productsModel.deleteProduct(Number(id));
  return { type: null, message: '' };
};
const getSaleById = async (id) => {
  const result = await productsModel.getSaleById(id);
  if (result.length === 0) { return { type: 'sale_not_found', message: 'Sale not found' }; }
  return { type: null, message: result };
};
const getAllSales = async () => {
  const result = await productsModel.getAllSales();
  if (result.length === 0) { return { type: 'sale_not_found', message: 'Sale not found' }; }
  return { type: null, message: result };
};
module.exports = {
  getAll,
  getById,
  CreateProduct,
  updateProduct,
  deleteProduct,
  getByName,
  getAllSales,
  getSaleById,
};