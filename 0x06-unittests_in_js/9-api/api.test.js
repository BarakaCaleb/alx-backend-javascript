const { expect } = require('chai');
const request = require('request');

let URL;

describe('api.js', function() {
  it('tests the response of api for /', function(done) {
    URL = 'http://localhost:7865/';
    request(URL, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    })
  });

  it('tests the response of api for /cart/:id(integer)', function(done) {
    URL = 'http://localhost:7865/cart/12';
    request(URL, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    })
  });

  it('tests the response of api for /cart/:id(non-integer)', function(done) {
    URL = 'http://localhost:7865/cart/hi';
    request(URL, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    })
  });
})
