const calculateNumber = require('./1-calcul.js');
const assert = require('assert');

describe('test calculateNumber', function() {
  it ('returns expected sum when adding positive numbers', function() {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it ('returns expected sum when adding identical positive numbers', function() {
    assert.equal(calculateNumber('SUM', 1.4, 1.4), 2);
  });
  it ('returns expected sum when adding positive and smaller positive numbers', function() {
    assert.equal(calculateNumber('SUM', 1.4, 1.2), 2);
  });
  it ('returns expected sum when adding positive number and 0', function() {
    assert.equal(calculateNumber('SUM', 1.4, 0), 1);
  });
  it ('returns expected sum when adding 0 and positive number', function() {
    assert.equal(calculateNumber('SUM', 0, 1.4), 1);
  });
  it ('returns expected sum when subtracting positive numbers', function() {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it ('returns expected sum when subtracting identical positive numbers', function() {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 1.4), 0);
  });
  it ('returns expected sum when subtracting positive and smaller positive numbers', function() {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 1.2), 0);
  });
  it ('returns expected sum when subtracting positive number and 0', function() {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 0), 1);
  });
  it ('returns expected sum when subtracting 0 and positive number', function() {
    assert.equal(calculateNumber('SUBTRACT', 0, 1.4), -1);
  });
  it ('returns expected sum when subtracting positive and negative of the same magnitude', function() {
    assert.equal(calculateNumber('SUBTRACT', 1.4, -1.4), 2);
  });
  it ('returns expected sum when dividing positive numbers', function() {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it ('returns expected sum when dividing identical positive numbers', function() {
    assert.equal(calculateNumber('DIVIDE', 1.4, 1.4), 1);
  });
  it ('returns expected sum when dividing positive and smaller positive numbers', function() {
    assert.equal(calculateNumber('DIVIDE', 1.4, 1.2), 1);
  });
  it ('returns expected sum when dividing positive number and 0', function() {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
  it ('returns expected sum when dividing 0 and positive number', function() {
    assert.equal(calculateNumber('DIVIDE', 0, 1.4), 0);
  });
});
