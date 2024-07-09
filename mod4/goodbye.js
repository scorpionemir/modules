(function (window) {
  var speaker = {};
  speaker.name = "";
  var greeting = "GoodBye";
  speaker.sayhello = function () {
    console.log(greeting + speaker.name);
  };

  window.speaker = speaker;
})(window);
