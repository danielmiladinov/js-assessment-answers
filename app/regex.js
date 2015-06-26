exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    return /\d/.test(str);
  },

  containsRepeatingLetter : function(str) {
    return /.*([a-zA-Z])\1+.*/.test(str);
  },

  endsWithVowel : function(str) {
    return /.*[aeiou]$/i.test(str);
  },

  captureThreeNumbers : function(str) {

  },

  matchesPattern : function(str) {

  },
  isUSD : function(str) {

  }
};
