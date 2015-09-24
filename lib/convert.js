var _           = require('lodash');
var dollarParse = require('./dollar-parse.js');

function convert(amount) {
  var amountSplit = amount.toString().split(".");
  var dollars     = amountSplit[0];
  var cents       = _.padRight(amountSplit[1], 2, "0") || "00";

  return dollarParse(dollars) + " and " + cents + "/100 dollars";
}


module.exports = convert;