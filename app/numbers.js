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
    var deDecimalify = function (n) {
      var numDecimalPlaces = (n.toString().split('.')[1] || []).length,
          magnitude = Math.pow(10, numDecimalPlaces),
          deDecimaled = n * magnitude;

      return [deDecimaled, magnitude];
    };

    var result = [a, b].map(deDecimalify).reduce(function (productPair, factorPair) {
      var product = productPair[0];
      var pMagnitude = productPair[1];

      var factor = factorPair[0];
      var fMagnitude = factorPair[1];

      return [product * factor, pMagnitude * fMagnitude];
    }, [1, 1]);

    var finalProduct = result[0];
    var finalMagnitude = result[1];
    return finalProduct / finalMagnitude;
  }
};
