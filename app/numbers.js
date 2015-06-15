exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return 1 & (num >> (bit - 1));
  },

  base10: function(str) {

  },

  convertToBinary: function(num) {

  },

  multiply: function(a, b) {

  }
};
