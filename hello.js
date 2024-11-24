var helloSpeaker = (function () {
    var speakWord = "Hello";
  
    return {
      speak: function (name) {
        console.log(speakWord + " " + name);
      }
    };
  })();