const { expect } = require('chai');
const sinon = require('sinon');
const productsService = require('../../../src/services/productsService');
const productModel = require('../../../src/models/productsModel')
const { findAllReturn, findOneResult } = require('../models/model.mock');

describe('Verificando service products', function () {

  describe('ver se a função getAll services funciona', function () {
    it('testando o retorno de getAll', async function () {
      sinon.stub(productModel, 'getAll').resolves(  findAllReturn )
const result = await productsService.getAll()
      expect(result.type).to.equal(null)
      expect(result.message).to.be.deep.equal(findAllReturn)
      expect(result).to.be.deep.equal({ type: null, message: findAllReturn })
    });

    it('testa o retorno de getById', async function () {
      sinon.stub(productModel, 'getById').resolves(findOneResult)
      const result = await productsService.getById()
      expect(result.type).to.equal(null)
      expect(result.message).to.be.deep.equal(findOneResult)
      expect(result).to.be.deep.equal({ type: null, message: findOneResult })

    });
  });

  describe('', function () {
    it('', async function () {
      sinon.stub(productModel, 'CreateProduct').resolves(findOneResult)
      const result = await productsService.CreateProduct(findOneResult.name)
      expect(result.type).to.equal(null)
      expect(result.message).to.be.deep.equal(findOneResult)
      expect(result).to.be.deep.equal({ type: null, message: findOneResult })
      sinon.restore();
    });
  });

  describe('', function () {
    it('testa falha de getbyid', async function () {
      sinon.stub(productModel, 'getById').resolves({ type: 'error', message: 'Product not found' })
      const { message } = await productsService.getById(666)

      expect(message).to.be.deep.equal({ type: 'error', message: 'Product not found' })
      expect(message.type).to.be.deep.equal('error');
      expect(message.message).to.be.deep.equal('Product not found');
    });
  });
  describe('', function () {
    it('testa falha de create', async function () {
      sinon.stub(productModel, 'CreateProduct').resolves({ type: 'error', message: 'Product not found' })
      const { message } = await productsService.CreateProduct(555)
      expect(message.type).to.be.deep.equal('error');
      expect(message.message).to.be.deep.equal('Product not found');
    });
  });
  describe('', function () {
    it('', async function () {
     
    });
  }); describe('', function () {
    it('', async function () {
      
    });
  });
  afterEach(function () {
    sinon.restore();
  });
});