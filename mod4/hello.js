(function (window) {
  var speaker = {};
  speaker.name = "Amirreza";
  var greeting = "Hello";
  speaker.sayhello = function () {
    console.log(greeting + speaker.name);
  };

  window.speaker = speaker;
})(window);
