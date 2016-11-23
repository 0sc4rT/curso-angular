'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var dataCtrlStub = {
  index: 'dataCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var dataIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './data.controller': dataCtrlStub
});

describe('Data API Router:', function() {

  it('should return an express router instance', function() {
    dataIndex.should.equal(routerStub);
  });

  describe('GET /api/datas', function() {

    it('should route to data.controller.index', function() {
      routerStub.get
        .withArgs('/', 'dataCtrl.index')
        .should.have.been.calledOnce;
    });

  });

});
