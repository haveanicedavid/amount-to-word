var assert  = require('chai').assert;
var convert = require('../lib/convert.js');

describe('The currency converter', function() {

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

  it('converts teens', function () {
    var n1 = convert(10);
    var n2 = convert(11);
    var n3 = convert(13);

    assert.equal(n1, "ten and 00/100 dollars");
    assert.equal(n2, "eleven and 00/100 dollars");
    assert.equal(n3, "thirteen and 00/100 dollars");
  });

  it('converts teens with cents', function () {
    var n1 = convert(10.30);
    var n2 = convert(17.77);
    var n3 = convert(19.50);

    assert.equal(n1, "ten and 30/100 dollars");
    assert.equal(n2, "seventeen and 77/100 dollars");
    assert.equal(n3, "nineteen and 50/100 dollars");
  });

  it('converts large numbers less than ten million regardless of decimal', function () {
    var n1 = convert(1000000.00);
    var n2 = convert(1000000);
    var n3 = convert(3333333.33);

    assert.equal(n1, "one million and 00/100 dollars");
    assert.equal(n2, "one million and 00/100 dollars");
    assert.equal(n3, "three million three hundred thirty-three thousand three hundred thirty-three and 33/100 dollars");
  });

});