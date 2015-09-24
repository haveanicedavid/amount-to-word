var assert = require('chai').assert;
var parse  = require('../lib/dollar-parse.js');

describe('the dollar parser', function() {

  it('parses one digit numbers', function () {
    var n1 = parse(1);
    var n2 = parse(4);
    var n3 = parse(9);

    assert.equal(n1, "one");
    assert.equal(n2, "four");
    assert.equal(n3, "nine");
  });

  it('parses teens', function () {
    var n1 = parse(10);
    var n2 = parse(11);
    var n3 = parse(17);

    assert.equal(n1, "ten");
    assert.equal(n2, "eleven");
    assert.equal(n3, "seventeen");
  });

  it('parses tens value', function () {
    var n1 = parse(20);
    var n2 = parse(40);
    var n3 = parse(90);
    var n4 = parse(10);

    assert.equal(n1, "twenty");
    assert.equal(n2, "fourty");
    assert.equal(n3, "ninety");
    assert.equal(n4, "ten");
  });

  it('parses complex tens value', function () {
    var n1 = parse(34);
    var n2 = parse(47);
    var n3 = parse(98);

    assert.equal(n1, "thirty-four");
    assert.equal(n2, "fourty-seven");
    assert.equal(n3, "ninety-eight");
  });

  xit('parses hundreds', function () {
    var n1 = parse(100);
    var n2 = parse(300);
    var n3 = parse(500);
    var n4 = parse(900);

    assert.equal(n1, "one hundred");
    assert.equal(n2, "three hundred");
    assert.equal(n3, "five hundred");
    assert.equal(n4, "nine hundred");
  });

  xit('parses complex hundreds', function () {
    var n1 = parse(101);
    var n2 = parse(311);
    var n3 = parse(559);
    var n4 = parse(997);

    assert.equal(n1, "one hundred one");
    assert.equal(n2, "three hundred eleven");
    assert.equal(n3, "five hundred");
    assert.equal(n4, "nine hundred");
  });

});