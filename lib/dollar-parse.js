var _ = require('lodash');

var ones = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

var teens = {
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
};
var tens = {
  2: 'twenty',
  3: 'thirty',
  4: 'fourty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety',
};

function dollarParse (number) {
  var result = "";

  if (number === 0) {
    return result;

  } else if (number < 10) {
    result += ones[number];

  } else if (number < 20) {
    result += teens[number];

  } else if (number < 100) {
    var remainder = number % 10;
    result += tens[Math.floor(number / 10)];
    remainder === 0 ? null : result += "-" + dollarParse(remainder);

  } else if (number < 1000) {
    var remainder = number % 100;
    result += ones[Math.floor(number / 100)] + " hundred";
    remainder === 0 ? null : result += " " + dollarParse(remainder);

  } else if (number < 10000) { // Ten Thousand
    var remainder = number % 1000;
    result += ones[Math.floor(number / 1000)] + " thousand";
    remainder === 0 ? null : result += " " + dollarParse(remainder);

  } else if (number < 20000) { // Twenty Thousand
    var remainder = number % 1000;
    result += teens[Math.floor(number / 1000)] + " thousand";
    remainder === 0 ? null : result += " " + dollarParse(remainder);

  } else if (number < 100000) { // One Hundred Thousand
    var remainder = number % 10000;
    result += tens[Math.floor(number / 10000)];
    if (remainder === 0) {
      result += " thousand";
    } else {
      result += "-" + dollarParse(remainder);
    }

  } else if (number < 1000000) { // One Million
    var remainder = number % 100000;
    result += ones[Math.floor(number / 100000)];
    if (remainder === 0) {
      result += " hundred thousand";
    } else {
      result += " hundred " + dollarParse(remainder);
    }

  } else if (number < 10000000) { // Ten Million
    var remainder = number % 1000000;
    result += ones[Math.floor(number / 1000000)];
    if (remainder === 0) {
      result += " million";
    } else {
      result += " million " + dollarParse(remainder);
    }
  }

  return result;
}

module.exports = dollarParse;