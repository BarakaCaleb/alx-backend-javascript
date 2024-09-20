const calculateNumber = require('./2-calcul_chai.js');
const expect = require('chai').expect;

describe('test calculateNumber', function() {
  it ('returns expected sum when adding positive numbers', function() {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });
  it ('returns expected sum when adding identical positive numbers', function() {
    expect(calculateNumber('SUM', 1.4, 1.4)).to.equal(2);
  });
  it ('returns expected sum when adding positive and smaller positive numbers', function() {
    expect(calculateNumber('SUM', 1.4, 1.2)).to.equal(2);
  });
  it ('returns expected sum when adding positive number and 0', function() {
    expect(calculateNumber('SUM', 1.4, 0)).to.equal(1);
  });
  it ('returns expected sum when adding 0 and positive number', function() {
    expect(calculateNumber('SUM', 0, 1.4)).to.equal(1);
  });
  it ('returns expected sum when subtracting positive numbers', function() {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
  it ('returns expected sum when subtracting identical positive numbers', function() {
    expect(calculateNumber('SUBTRACT', 1.4, 1.4)).to.equal(0);
  });
  it ('returns expected sum when subtracting positive and smaller positive numbers', function() {
    expect(calculateNumber('SUBTRACT', 1.4, 1.2)).to.equal(0);
  });
  it ('returns expected sum when subtracting positive number and 0', function() {
    expect(calculateNumber('SUBTRACT', 1.4, 0)).to.equal(1);
  });
  it ('returns expected sum when subtracting 0 and positive number', function() {
    expect(calculateNumber('SUBTRACT', 0, 1.4)).to.equal(-1);
  });
  it ('returns expected sum when subtracting positive and negative of the same magnitude', function() {
    expect(calculateNumber('SUBTRACT', 1.4, -1.4)).to.equal(2);
  });
  it ('returns expected sum when dividing positive numbers', function() {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it ('returns expected sum when dividing identical positive numbers', function() {
    expect(calculateNumber('DIVIDE', 1.4, 1.4)).to.equal(1);
  });
  it ('returns expected sum when dividing positive and smaller positive numbers', function() {
    expect(calculateNumber('DIVIDE', 1.4, 1.2)).to.equal(1);
  });
  it ('returns expected sum when dividing positive number and 0', function() {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
  it ('returns expected sum when dividing 0 and positive number', function() {
    expect(calculateNumber('DIVIDE', 0, 1.4)).to.equal(0);
  });
});
