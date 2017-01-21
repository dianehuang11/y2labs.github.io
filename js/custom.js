(function() {
  'use strict';

  var $scrollPastElem = $('.scrollPast');
  var $header = $('#header');

  var $volunteerNavigation = $('.volunteerPage__navigation');
  var $volunteerScrollPast = $('#volunteerScrollPast');

  function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return curtop;
    }
  }

  document.getElementById('clickList') && document.getElementById('clickList').addEventListener('click', function(event) {
    if (event.target.innerHTML) {
      var nextTarget = document.getElementById(event.target.innerHTML.toLowerCase().replace(' ', '_'));
      if (nextTarget) {
        window.scroll({
          top: findPos(nextTarget) - nextTarget.clientHeight * 3,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  });

  $(window).on('scroll', function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    if ($scrollPastElem[0]) {
      if (scrollPosition > $scrollPastElem.offset().top) {
        $header.removeClass('transparent');
      } else {
        $header.addClass('transparent');
      }
    }
    if ($volunteerNavigation[0]) {
      if (scrollPosition > $volunteerScrollPast.offset().top) {
        $volunteerNavigation.addClass('active');
      } else {
        $volunteerNavigation.removeClass('active');
      }
    }
  });


  $('#hamburger').on('click', function() {
    if ($(this).hasClass('open')) {
      $('.nav-mobile').removeClass('active');
    } else {
      $('.nav-mobile').addClass('active');
    }
    $(this).toggleClass('open');
  });
})();
