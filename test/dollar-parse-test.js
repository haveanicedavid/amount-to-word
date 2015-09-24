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

  it('parses hundreds', function () {
    var n1 = parse(100);
    var n2 = parse(300);
    var n3 = parse(500);
    var n4 = parse(900);

    assert.equal(n1, "one hundred");
    assert.equal(n2, "three hundred");
    assert.equal(n3, "five hundred");
    assert.equal(n4, "nine hundred");
  });

  it('parses complex hundreds', function () {
    var n1 = parse(101);
    var n2 = parse(311);
    var n3 = parse(559);
    var n4 = parse(997);

    assert.equal(n1, "one hundred one");
    assert.equal(n2, "three hundred eleven");
    assert.equal(n3, "five hundred fifty-nine");
    assert.equal(n4, "nine hundred ninety-seven");
  });

  it('parses thousands', function () {
    var n1 = parse(1000);
    var n2 = parse(3000);
    var n3 = parse(5000);
    var n4 = parse(9000);

    assert.equal(n1, "one thousand");
    assert.equal(n2, "three thousand");
    assert.equal(n3, "five thousand");
    assert.equal(n4, "nine thousand");
  });

  it('parses complex thousands', function () {
    var n1 = parse(1301);
    var n2 = parse(4203);
    var n3 = parse(5555);
    var n4 = parse(9876);
    var n5 = parse(1200);

    assert.equal(n1, "one thousand three hundred one");
    assert.equal(n2, "four thousand two hundred three");
    assert.equal(n3, "five thousand five hundred fifty-five");
    assert.equal(n4, "nine thousand eight hundred seventy-six");
    assert.equal(n5, "one thousand two hundred");
  });

  it('parses complex teen-thousands', function () {
    var n1 = parse(13010);
    var n2 = parse(14923);

    assert.equal(n1, "thirteen thousand ten");
    assert.equal(n2, "fourteen thousand nine hundred twenty-three");
  });

  it('parses complex tens-thousands', function () {
    var n1 = parse(20000);
    var n2 = parse(42038);
    var n3 = parse(55559);
    var n4 = parse(98763);

    assert.equal(n1, "twenty thousand");
    assert.equal(n2, "fourty-two thousand thirty-eight");
    assert.equal(n3, "fifty-five thousand five hundred fifty-nine");
    assert.equal(n4, "ninety-eight thousand seven hundred sixty-three");
  });

  it('parses hundred thousands', function () {
    var n1 = parse(100000);
    var n2 = parse(300000);

    assert.equal(n1, "one hundred thousand");
    assert.equal(n2, "three hundred thousand");
  });

  it('parses complex hundred thousands', function () {
    var n1 = parse(101999);
    var n2 = parse(834123);

    assert.equal(n1, "one hundred one thousand nine hundred ninety-nine");
    assert.equal(n2, "eight hundred thirty-four thousand one hundred twenty-three");
  });

  it('parses millions', function () {
    var n1 = parse(1000000);
    var n2 = parse(7000000);

    assert.equal(n1, "one million");
    assert.equal(n2, "seven million");
  });

  it('parses complex millions', function () {
    var n1 = parse(1355555);
    var n2 = parse(9999999);

    assert.equal(n1, "one million three hundred fifty-five thousand five hundred fifty-five");
    assert.equal(n2, "nine million nine hundred ninety-nine thousand nine hundred ninety-nine");
  });

});