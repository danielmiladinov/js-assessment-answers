exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var canceled = false;
    var tick = start;

    var doTicks = function () {
      if (! canceled && tick <= end) {
        console.log(tick);
        tick = tick + 1;
        setTimeout(doTicks, 100);
      }
    };

    doTicks();

    return {
      cancel: function () {
        canceled = true;
      }
    };
  }
};
