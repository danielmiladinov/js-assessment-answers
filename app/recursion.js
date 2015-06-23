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

  }
};
