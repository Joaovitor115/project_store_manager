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

module.exports = {
  getAll,
  getById,
  CreateProduct,
  getByName,
  updateProduct,
};