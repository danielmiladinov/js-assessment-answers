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

  },

  validParentheses: function(n) {

  }
};
