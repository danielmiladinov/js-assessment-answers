exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return 1 & (num >> (bit - 1));
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var full = num.toString(2);
    var asBinary = full.substring(-8);
    while (asBinary.length < 8) {
      asBinary = "0" + asBinary;
    }
    return asBinary;
  },

  multiply: function(a, b) {

  }
};
