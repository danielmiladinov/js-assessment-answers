exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
  createModule : function(str1, str2) {
    return {
      sayIt: function () {
        return [this.greeting, this.name].join(', ');
      },
      name: str2,
      greeting: str1
    };
  }
};
