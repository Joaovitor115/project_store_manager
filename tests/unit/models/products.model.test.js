const { expect } = require('chai');
const sinon = require('sinon');
const productModel = require('../../../src/models/productsModel')
const modelMock = require('../../../tests/unit/models/model.mock')
const connection = require('../../../src/models/connection');
const { findAllReturn, findOneResult } = require('./model.mock');
const { execute } = require('../../../src/models/connection');

describe('Testes de unidade do model de products', function () {
  it('Recuperando a lista de todos os products', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([findAllReturn]);
    // Act
    const result = await productModel.getAll();
    // Assert
    expect(result).to.be.deep.equal(findAllReturn);
  });

  it('testa se acha apenas um produto', async function () {
    sinon.stub(connection, "execute").resolves([[modelMock.findOneResult]])
    const result = await productModel.getById(1)
    expect(result).to.be.deep.equal(modelMock.findOneResult);

  });

  it('test get by name', async function () {
   sinon.stub(connection, "execute").resolves([[modelMock.findOneResult]])
   const result = await productModel.getById(modelMock.findOneResult.name)
    expect(result).to.be.deep.equal(modelMock.findOneResult);
  });
   it('testa create', async function () {
   sinon.stub(connection, "execute").resolves([[modelMock.findOneResult]])
   const result = await productModel.CreateProduct(modelMock.findOneResult.name)
    expect(result).to.be.deep.equal(modelMock.findOneResult);
  });
   it('', async function () {
   
  });
   it('', async function () {
   
  });

  afterEach(function () {
    sinon.restore();
  });
});