(function() {
  'use strict';

  var section = document.querySelectorAll(".scrollPast");
  var sections = {};
  var i = 0;

  Array.from(section).forEach(function(e){
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector('header').setAttribute('class', 'notTransparent');
      } else {
        document.querySelector('header').setAttribute('class', 'transparent');
      }
    }
  };
})();
