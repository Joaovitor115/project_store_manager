const { expect } = require('chai');
const chai = require('chai')
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const productsService = require('../../../src/services/productsService');
const productsController = require('../../../src/controllers/productsController')
const { findAllReturn, findOneResult } = require('../models/model.mock');
const app = require('../../../src/app')

chai.use(sinonChai)
chai.use(chaiHttp)

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

    it('testa a func getById', async function () {
      req = {}
      const res = {}
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);

      sinon.stub(productsService, 'getById').resolves({ type: null, message: findOneResult })
      const response = await chai.request(app).get('/products/1')
      expect(response.status).to.be.equal(200)
      expect(response.body).to.be.deep.equal({ id: 1, name: 'Martelo de Thor' });
    });
  });

  describe('', function () {
    it('testa a função createProduct com erro', async function () {
      req = {}
      const res = {}
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);

      sinon.stub(productsService, 'CreateProduct').resolves({ type: 'error', message: 'Product not found' })
      const response = await chai.request(app).post('/products')
      expect(response.status).to.be.equal(400)
      expect(response.body).to.be.deep.equal({ message: '"name" is required' });
      sinon.restore();
    });
  });

  describe('testa a função createProduct', function () {
    it('', async function () {
      req = {}
      const res = {}
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);

      sinon.stub(productsService, 'CreateProduct').resolves({ type: null, message: findOneResult })
      const response = await chai.request(app).post('/products').send({name: 'paofo'})
      expect(response.status).to.be.equal(201)
      expect(response.body).to.be.deep.equal(findOneResult);
      sinon.restore();
      sinon.restore();
    });
  });
  describe('testa a função getByName', function () {
    it('', async function () {
      req = {
        body: {
          name: findOneResult.name
      }}
      const res = {}
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      const response = await productsController.getByName(req, res);
      sinon.restore();

    });
  });

  afterEach(function () {
    sinon.restore();
  });
});