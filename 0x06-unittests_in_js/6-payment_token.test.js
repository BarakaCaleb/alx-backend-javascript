const expect = require('chai').expect;
const sinon = require('sinon');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('test getPaymentTokenFromAPI(true)', function(done) {
    getPaymentTokenFromAPI(true).then(res => {
      expect(res.data).to.equal('Successful response from the API');
      done();
    }).catch(err => {
      done(err);
    })
  })
})
