(function() {
  'use strict';

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
        console.log(nextTarget.clientHeight);
        window.scroll({
          top: findPos(nextTarget) - nextTarget.clientHeight * 3, 
          left: 0, 
          behavior: 'smooth' 
        });
      }
    }
  });
  
  var section = document.querySelectorAll(".scrollPast");
  var sections = {};

  var volunteerNavigation = document.querySelector('.volunteerPage__navigation');
  var volunteerScrollPast = document.getElementById('volunteerScrollPast');

  Array.from(section).forEach(function(e){
    sections[e.id] = e.offsetTop;
  });


  var mainNavHidden = function (scrollPosition) {
    for (var i in sections) {
      if (sections[i] <= scrollPosition) {
        // document.querySelector('header').setAttribute('class', 'notTransparent');
      } else {
        // document.querySelector('header').setAttribute('class', 'transparent');
      }
    }
  }

  var volunteerNavHidden = function (scrollPosition) {
    if (volunteerScrollPast.offsetTop <= scrollPosition) {
      volunteerNavigation.classList.add('active');
    } else {
      volunteerNavigation.classList.remove('active');
    }
  }

  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    mainNavHidden(scrollPosition);
    if (volunteerNavigation) {
      volunteerNavHidden(scrollPosition);   
    }
  };


  $('#hamburger').on('click', function() {
    if ($(this).hasClass('open')) {
      $('.nav-mobile').removeClass('active');
    } else {
      $('.nav-mobile').addClass('active');
    }
    $(this).toggleClass('open');
  });
})();
