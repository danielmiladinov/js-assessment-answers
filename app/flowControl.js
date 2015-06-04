exports = (typeof window === 'undefined') ? global : window;

var fizzBuzzFactory = function () {
  var divisors = [].slice.apply(arguments);

  return function (num) {
    function go (n) {
      var results = divisors.map(function (pair) {
        var divisor = pair[0], ifDivides = pair[1];
        return n % divisor === 0 ? ifDivides : '';
      }).join('').trim();

      return results === '' ? n : results;
    }

    return $.isNumeric(num) && go(num);
  };
};

exports.flowControlAnswers = {
  fizzBuzz : function(num) {
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number
    return fizzBuzzFactory([3, 'fizz'], [5, 'buzz'])(num);
  }
};
