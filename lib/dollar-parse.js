var _ = require('lodash');

var onesDigit = {
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
var tensDigits = {
  // Teen numbers will need their own object
  // 1: 'ten',
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

  if (number < 10) {
    result += onesDigit[number];
  } else if (number < 20) {
    result += teens[number];
  } else if (number < 100) {
    result += tensDigits[number / 10];
  }

  return result;
}

module.exports = dollarParse;