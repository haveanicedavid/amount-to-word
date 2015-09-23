var assert  = require('chai').assert;
var convert = require('../lib/convert.js');

describe('num', function() {

  it('converts one digit numbers', function () {
    var n1 = convert(1);
    var n2 = convert(3);
    var n3 = convert(9);

    assert.equal(n1, "one and 00/100 dollars");
    assert.equal(n2, "three and 00/100 dollars");
    assert.equal(n3, "nine and 00/100 dollars");
  });

  it('converts decimals', function () {
    var n1 = convert(1.01);
    var n2 = convert(3.42);
    var n3 = convert(9.92);

    assert.equal(n1, "one and 01/100 dollars");
    assert.equal(n2, "three and 42/100 dollars");
    assert.equal(n3, "nine and 92/100 dollars");
  });

  xit('converts teens', function () {
    var n1 = convert(10);
    var n2 = convert(11);
    var n3 = convert(9);

    assert.equal(n1, "ten and 00/100 dollars");
    assert.equal(n2, "eleven and 00/100 dollars");
    assert.equal(n3, "thirteen and 00/100 dollars");
  });



});