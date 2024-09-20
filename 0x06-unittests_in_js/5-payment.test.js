const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('sendPaymentRequestToApi', function() {
  let calculateNumberOriginal;
  let consoleLogOriginal;

  this.beforeEach(function() {
    calculateNumberOriginal = Utils.calculateNumber;
    consoleLogOriginal = console.log;
  })

  this.afterEach(function() {
    Utils.calculateNumber = calculateNumberOriginal;
    console.log = consoleLogOriginal;
  })

  it('validate called with 100 and 20', function () {
    Utils.calculateNumber = sinon.spy();
    console.log = sinon.spy();
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(console.log.calledOnce).to.be.true;
  })

  it('validate called with 10 and 10', function () {
    Utils.calculateNumber = sinon.spy();
    console.log = sinon.spy();
    sendPaymentRequestToApi(10, 10);
    expect(Utils.calculateNumber.calledOnceWithExactly('SUM', 10, 10)).to.be.true;
    expect(console.log.calledOnce).to.be.true;
  })
})
