var assert = require('chai').assert;
var parse  = require('../lib/dollar-parse.js');

describe('the dollar parser', function() {
  it('parses one digit numbers', function () {
    var num = parse(1);
    assert.equal(num, "one");
  });

});