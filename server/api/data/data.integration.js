'use strict';

var app = require('../..');
import request from 'supertest';

describe('Data API:', function() {

  describe('GET /api/datas', function() {
    var datas;

    beforeEach(function(done) {
      request(app)
        .get('/api/datas')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          datas = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      datas.should.be.instanceOf(Array);
    });

  });

});
