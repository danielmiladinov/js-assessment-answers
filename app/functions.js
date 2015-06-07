exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
    return fn.apply(obj, arguments);
  },

  functionFunction : function(str) {
    return function (next) {
      return [str, next].join(', ');
    }
  },

  makeClosures : function(arr, fn) {
    return arr.map(function (n) { return function () { return fn.call(this, n); } });
  },

  partial : function(fn, str1, str2) {

  },

  useArguments : function() {

  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
