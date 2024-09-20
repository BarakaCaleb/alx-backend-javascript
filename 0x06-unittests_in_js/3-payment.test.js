const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('sendPaymentRequestToApi', function() {
  it('validate the usage of the Utils function', function () {
    let calculateNumberOriginal = Utils.calculateNumber;
    Utils.calculateNumber = sinon.spy();
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.calledOnce).to.be.true;
    expect(Utils.calculateNumber.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    Utils.calculateNumber = calculateNumberOriginal;
  })
})
