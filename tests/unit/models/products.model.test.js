const { expect } = require('chai');
const sinon = require('sinon');
const productModel = require('../../../src/models/productsModel')

const connection = require('../../../src/models/connection');
const { findAllReturn } = require('./model.mock');

describe('Testes de unidade do model de products', function () {
  it('Recuperando a lista de products', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([findAllReturn]);
    // Act
    const result = await productModel.getAll();
    // Assert
    expect(result).to.be.deep.equal(findAllReturn);
  });

  it('', async function () {
   

  });

  it('', async function () {
   
  });

  afterEach(function () {
    sinon.restore();
  });
});