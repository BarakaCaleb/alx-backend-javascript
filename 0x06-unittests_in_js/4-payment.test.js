const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('sendPaymentRequestToApi', function() {
  it('validate the usage of the Utils function', function () {
    const calculateNumberOriginal = Utils.calculateNumber;
    const consoleLogOriginal = console.log;
    Utils.calculateNumber = sinon.stub(Utils, 'calculateNumber').returns(10);
    console.log = sinon.spy();
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(console.log.calledOnceWithExactly('The total is: 10')).to.be.true;
    Utils.calculateNumber = calculateNumberOriginal;
    console.log = consoleLogOriginal;
  })
})
