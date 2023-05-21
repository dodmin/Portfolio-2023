// Dropdown - hamburger menu
function toggleMenu() {
  const menuIcon = document.querySelector('.menu-icon');
  menuIcon.classList.toggle('menu-open');
  $(".dropdown-menuDM").toggleClass("active");
}

const menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('touchstart', toggleMenu);

// Hover effects on link stay active
// $(document).ready(function() {
//   var currentHash = window.location.hash;

//   if (currentHash === "#user-research") {
//     $('.link-research a[href="#user-research"]').addClass('active');
//   } else if (currentHash === "#ideation") {
//     $('.link-ideation a[href="#ideation"]').addClass('active');
//   } else if (currentHash === "#prototyping") {
//     $('.link-prototype a[href="#prototyping"]').addClass('active');
//   } else if (currentHash === "#testing") {
//     $('.link-testing a[href="#testing"]').addClass('active');
//   } else if (currentHash === "#conclusion") {
//     $('.link-conclusion a[href="#conclusion"]').addClass('active');
//   }
// });


$(document).ready(function() {
  function isElementInView(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

    function activateLink() {
    var sections = ['#user-research', '#ideation', '#prototyping', '#testing', '#conclusion'];

    sections.forEach(function(section) {
      var link = $('.link-research a[href="' + section + '"]');
      if (isElementInView($(section)[0])) {
        link.addClass('active');
      } else {
        link.removeClass('active');
      }
    });
  }


  $(window).on('load scroll', function() {
    activateLink();
  });
});








$(document).ready(function() {
  function isElementInView(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

    function activateLink() {
    var sections = ['#user-research', '#ideation', '#prototyping', '#testing', '#conclusion'];

    sections.forEach(function(section) {
      var link = $('.link-ideation a[href="' + section + '"]');
      if (isElementInView($(section)[0])) {
        link.addClass('active');
      } else {
        link.removeClass('active');
      }
    });
  }


  $(window).on('load scroll', function() {
    activateLink();
  });
});


$(document).ready(function() {
  function isElementInView(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

    function activateLink() {
    var sections = ['#user-research', '#ideation', '#prototyping', '#testing', '#conclusion'];

    sections.forEach(function(section) {
      var link = $('.link-prototype a[href="' + section + '"]');
      if (isElementInView($(section)[0])) {
        link.addClass('active');
      } else {
        link.removeClass('active');
      }
    });
  }


  $(window).on('load scroll', function() {
    activateLink();
  });
});



$(document).ready(function() {
  function isElementInView(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

    function activateLink() {
    var sections = ['#user-research', '#ideation', '#prototyping', '#testing', '#conclusion'];

    sections.forEach(function(section) {
      var link = $('.link-testing a[href="' + section + '"]');
      if (isElementInView($(section)[0])) {
        link.addClass('active');
      } else {
        link.removeClass('active');
      }
    });
  }


  $(window).on('load scroll', function() {
    activateLink();
  });
});


$(document).ready(function() {
  function isElementInView(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

    function activateLink() {
    var sections = ['#user-research', '#ideation', '#prototyping', '#testing', '#conclusion'];

    sections.forEach(function(section) {
      var link = $('.link-conclusion a[href="' + section + '"]');
      if (isElementInView($(section)[0])) {
        link.addClass('active');
      } else {
        link.removeClass('active');
      }
    });
  }


  $(window).on('load scroll', function() {
    activateLink();
  });
});

// Effect for hero photo - round photo

// function onScroll() {
//   var heroPhoto = document.querySelector('.hero-photo');
//   var midDiv = heroPhoto.querySelector('.mid');

//   if (window.scrollY > heroPhoto.offsetTop) {
//     midDiv.classList.add('active');
//     midDiv.style.transform = "scale(1.1)";
//     midDiv.style.transition = "all 1s ease-in-out";
//   } else {
//     midDiv.classList.remove('active');
//     midDiv.style.transform = "scale(1)";
//     midDiv.style.transition = "all 1s ease-in-out";
//   }
// }

// function onHover() {
//   var midDiv = document.querySelector('.hero-photo .mid');

//   function handleHover() {
//     midDiv.style.transform = "scale(1.1)";
//     midDiv.style.transition = "all 1s ease-in-out";
//   }

//   function handleLeave() {
//     if (!midDiv.classList.contains('active')) {
//       midDiv.style.transform = "scale(1)";
//       midDiv.style.transition = "all 1s ease-in-out";
//     }
//   }

//   midDiv.addEventListener('mouseover', handleHover);
//   midDiv.addEventListener('mouseout', handleLeave);
//   midDiv.addEventListener('touchstart', handleHover);
//   midDiv.addEventListener('touchend', handleLeave);
// }

// window.addEventListener('scroll', onScroll);
// onHover();





// When the card is clicked this is the effect

// function onCardClick(event) {
//   event.preventDefault();

//   var gridItem = event.currentTarget;
//   var circle = gridItem.querySelector('.circle');

//   circle.classList.add('expanded');

//   setTimeout(function () {
//     var link = gridItem.querySelector('a');
//     window.location.href = link.href;
//   }, 500);
// }

// var gridItems = document.querySelectorAll('.grid-item');
// gridItems.forEach(function (item) {
//   item.addEventListener('click', onCardClick);
// });




