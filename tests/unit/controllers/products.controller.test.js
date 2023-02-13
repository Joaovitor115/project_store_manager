const { expect } = require('chai');
const chai = require('chai')
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const productsService = require('../../../src/services/productsService');
const productsController = require('../../../src/controllers/productsController')
const { findAllReturn } = require('../models/model.mock');


chai.use(sinonChai)

describe('Verificando service products', function () {

  describe('ver se a função getAll controller funciona', function () {
    it('testando o retorno de getAll', async function () {
      req = {}
      const res = {}
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      sinon.stub(productsService, 'getAll').resolves({ type: null, message: findAllReturn })

      const result = await productsController.getAll(req, res)

      // Validamos se o status code da resposta é igual a 200
      expect(res.status).to.have.been.calledWith(200);

      expect(res.json).to.have.been.calledWith(findAllReturn);
     
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