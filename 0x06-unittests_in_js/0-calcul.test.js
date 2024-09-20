const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('test calculateNumber', function() {
  it('returns expected sum when adding positive numbers', function() {
    assert.equal(calculateNumber(1.4, 1.5), 3);
  });
  it('returns expected sum when adding identical positive numbers', function() {
    assert.equal(calculateNumber(1.4, 1.4), 2);
  });
  it('returns expected sum when adding positive and smaller positive numbers', function() {
    assert.equal(calculateNumber(1.4, 1.2), 2);
  });
  it('returns expected sum when adding positive number and 0', function() {
    assert.equal(calculateNumber(1.4, 0), 1);
  });
  it('returns expected sum when adding 0 and positive number', function() {
    assert.equal(calculateNumber(0, 1.4), 1);
  });
  it('returns 0 when adding two zeros', function() {
    assert.equal(calculateNumber(0, 0), 0);
  });
  it('returns expected sum when adding positive and negative of the same magnitude', function() {
    assert.equal(calculateNumber(1.4, -1.4), 0);
  });
  it('returns expected sum when adding negative and positive of the same magnitude', function() {
    assert.equal(calculateNumber(-1.4, 1.4), 0);
  });
  it('returns expected sum for large positive numbers', function() {
    assert.equal(calculateNumber(1001.1999, 1000.8), 2002);
  });
  it('returns expected sum for large positive numbers reversed', function() {
    assert.equal(calculateNumber(1000.8, 1001.1999), 2002);
  });
  it('returns expected sum for large negative numbers', function() {
    assert.equal(calculateNumber(-1000.8, -1001.1999), -2002);
  });
});
