const { expect } = require('chai');
const request = require('request');

const URL = 'http://localhost:7865/';

describe('api.js', function() {
  it('Tests the response of API', function(done) {
    request(URL, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    })
  })
})
