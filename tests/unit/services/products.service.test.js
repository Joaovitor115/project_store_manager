const { expect } = require('chai');
const sinon = require('sinon');
const productsService = require('../../../src/services/productsService');
const productModel = require('../../../src/models/productsModel')
const { findAllReturn } = require('../models/model.mock');

describe('Verificando service products', function () {

  describe('ver se a função getAll services funciona', function () {
    it('testando o retorno de getAll', async function () {
      sinon.stub(productModel, 'getAll').resolves(  findAllReturn )
const result = await productsService.getAll()
      expect(result.type).to.equal(null)
      expect(result.message).to.be.deep.equal(findAllReturn)
      expect(result).to.be.deep.equal({ type: null, message: findAllReturn })
    });

    it('', async function () {
      
    });
  });

  describe('', function () {
    it('', async function () {
     
      sinon.restore();
    });
  });

  describe('', function () {
    it('', async function () {
     
      sinon.restore();
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});