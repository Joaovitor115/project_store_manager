const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result;
};

const getById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?;',
    [id],
  );
  return result;
};
const getByName = async (name) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE name = ?;',
    [name],
  );
  return result;
};
const CreateProduct = async (name) => {
  await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?);', [name],
  );
  const result = await getByName(name);
  return result;
};
const updateProduct = async (name, id) => {
  await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?;', [name, id],
  );
};
const deleteProduct = async (id) => {
  await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?;', [id],
  );
};
const getAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT s.sale_id AS saleId, sa.date, s.product_id AS productId, s.quantity
     FROM StoreManager.sales_products AS s
     INNER JOIN StoreManager.sales AS sa ON s.sale_id = sa.id
     ORDER BY saleId, productId `,
  );
  return result;
};
const getSaleById = async (id) => {
  const [result] = await connection.execute(
    `SELECT sa.date, s.product_id as productId, s.quantity
     FROM StoreManager.sales_products AS s 
     INNER JOIN StoreManager.sales AS sa 
     ON s.sale_id = sa.id WHERE sa.id = ?
     ORDER BY sale_id, productId `, [id],
  );
  return result;
};

module.exports = {
  getAll,
  getById,
  CreateProduct,
  getByName,
  updateProduct,
  deleteProduct,
  getAllSales,
  getSaleById,
};