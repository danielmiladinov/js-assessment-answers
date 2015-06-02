exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return Promise.resolve(value);
  },

  manipulateRemoteData : function(url) {
    return new Promise(function (resolve, reject) {
      $.ajax(url).done(function (results) {
        resolve(results.people.map(function (person) {
          return person.name;
        }).sort(function (x, y) {
          return x > y;
        }));
      }).fail(reject);
    });
  }
};
