exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var directoryFilter = (dirName === void(0) ?
      function () { return true; } :
      function (dn) { return dn === dirName; }
    );

    var files = [];

    data.files.forEach(function (file) {
      if (typeof file === "string" && directoryFilter(data.dir)) {
        files.push(file);
      } else if (typeof file === "object") {
        files = files.concat(exports.recursionAnswers.listFiles(file, directoryFilter(data.dir) ? undefined : dirName));
      }
    });

    return files;
  },

  permute: function(arr) {
    var concat = function (x, y) { return x.concat(y); };

    return arr.map(function (v, i, a) {
      var prefix = [v], remainder = a.filter(function (v, idx) { return i !== idx; });
      return (
        (remainder.length > 1) ?
        exports.recursionAnswers.permute(remainder) :
        remainder
      ).map(concat.bind(undefined, prefix));
    }).reduce(concat);
  },

  fibonacci: function(n) {
    var iterate = function (fn, seed, times) {
      if (times > 0) {
        return iterate(fn, fn(seed), times - 1);
      }

      return seed;
    };

    var fib = function (fibPair) {
      var a = fibPair[0], b = fibPair[1];
      return [b, a + b];
    };

    return iterate(fib, [0, 1], n)[0];
  },

  validParentheses: function(n) {
    var operations = [
      function wrap (s) { return '(' + s + ')'; },
      function prepend (s) { return '()' + s; },
      function append (s) { return s + '()'; }
    ];

    var range = function (n) {
      var r = [];
      for (var i = 0; i < n; i ++) { r.push(i); }
      return r;
    };

    var lookup = function (a) { return function (i) { return a[i]; }; };

    var buildWorkItem = function (i) {
      var inOtherBase = Number(i).toString(operations.length);
      while (inOtherBase.length < operations.length) { inOtherBase = "0" + inOtherBase; }
      return inOtherBase.split('').map(lookup(operations));
    };

    var processWorkItem = function (workItem) {
      return workItem.reduce(function (s, wi) { return wi(s); }, '');
    };

    var toSet = function (s, ps) { s[ps] = ps; return s; };

    var keys = function (o) {
      var ks = [], p;
      for (p in o) { if (o.hasOwnProperty(p)) { ks.push(p); } }
      return ks;
    };

    var numCombinations = Math.pow(operations.length, n);

    return keys(
      range(numCombinations)
        .map(buildWorkItem)
        .map(processWorkItem)
        .reduce(toSet, {})
    );
  }
};
