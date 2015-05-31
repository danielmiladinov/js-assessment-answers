exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function (x, y) { return x + y; }, 0);
  },

  remove : function(arr, item) {
    return arr.filter(function (i) { return i !== item; });
  },

  removeWithoutCopy : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    return arr.concat(item);
  },

  truncate : function(arr) {
    arr.splice(-1, 1);
    return arr;
  },

  prepend : function(arr, item) {
    return [].concat(item, arr);
  },

  curtail : function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    return arr.reduce(function (count, v) { if (v === item) { count += 1; } return count; }, 0);
  },

  duplicates : function(arr) {
    var dupes = arr.reduce(function (dupes, v) {
      if (!dupes.hasOwnProperty(v)) {
        dupes[v] = 0;
      }
      dupes[v]++;
      return dupes;
    }, {});

    var pairs = [];
    for (var d in dupes) {
      if (dupes.hasOwnProperty(d)) {
        pairs.push([d, dupes[d]]);
      }
    }

    return pairs.filter(function (pair) {
      return pair[1] > 1;
    }).map(function (pair) {
      return pair[0];
    });
  },

  square : function(arr) {
    return arr.map(function (v) { return v * v; });
  },

  findAllOccurrences : function(arr, target) {
    return arr.reduce(function (occ, v, i) {
      if (v === target) {
        occ.push(i);
      }
      return occ;
    }, []);
  }
};
