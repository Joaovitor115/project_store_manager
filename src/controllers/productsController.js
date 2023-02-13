const productsService = require('../services/productsService');

const getAll = async (_req, res) => {
  const { message } = await productsService.getAll();
  return res.status(200).json(message);
};
const getById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getById(id);
  if (type) { return res.status(404).json({ message }); }
  return res.status(200).json(message);
};
const CreateProduct = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productsService.CreateProduct(name);
  if (type) { return res.status(404).json({ message }); }
  return res.status(201).json(message);
};
const updateProduct = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  console.log('id', id);
  const { type, message } = await productsService.updateProduct(name, Number(id));
  if (type) { return res.status(404).json({ message }); }
  return res.status(200).json(message);
};

module.exports = {
  getAll,
  getById,
  CreateProduct,
  updateProduct,
};