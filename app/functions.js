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
    return function (punct) {
      return fn.call(this, str1, str2, punct);
    }
  },

  useArguments : function() {
    return [].slice.apply(arguments).reduce(function (x, y) { return x + y }, 0);
  },

  callIt : function(fn) {
    var args = [].slice.call(arguments, 1, arguments.length);
    return fn.apply(this, args);
  },

  partialUsingArguments : function(fn) {
    var firstArgs = [].slice.call(arguments, 1, arguments.length);

    return function () {
      return fn.apply(this, firstArgs.concat([].slice.call(arguments)));
    }
  },

  curryIt : function(fn) {

  }
};
