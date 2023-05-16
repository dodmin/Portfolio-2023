// Dropdown - hamburger menu
function toggleMenu() {
  const menuIcon = document.querySelector('.menu-icon');
  menuIcon.classList.toggle('menu-open');
  $(".dropdown-menu").toggleClass("active");
}

const menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('touchstart', toggleMenu);

// Effect for hero photo - round photo

function onScroll() {
  var heroPhoto = document.querySelector('.hero-photo');
  var midDiv = heroPhoto.querySelector('.mid');

  if (window.scrollY > heroPhoto.offsetTop) {
    midDiv.classList.add('active');
    midDiv.style.transform = "scale(1.1)";
    midDiv.style.transition = "all 1s ease-in-out";
  } else {
    midDiv.classList.remove('active');
    midDiv.style.transform = "scale(1)";
    midDiv.style.transition = "all 1s ease-in-out";
  }
}

function onHover() {
  var midDiv = document.querySelector('.hero-photo .mid');

  function handleHover() {
    midDiv.style.transform = "scale(1.1)";
    midDiv.style.transition = "all 1s ease-in-out";
  }

  function handleLeave() {
    if (!midDiv.classList.contains('active')) {
      midDiv.style.transform = "scale(1)";
      midDiv.style.transition = "all 1s ease-in-out";
    }
  }

  midDiv.addEventListener('mouseover', handleHover);
  midDiv.addEventListener('mouseout', handleLeave);
  midDiv.addEventListener('touchstart', handleHover);
  midDiv.addEventListener('touchend', handleLeave);
}

window.addEventListener('scroll', onScroll);
onHover();





// When the card is clicked this is the effect

function onCardClick(event) {
  event.preventDefault();

  var gridItem = event.currentTarget;
  var circle = gridItem.querySelector('.circle');

  circle.classList.add('expanded');

  setTimeout(function () {
    var link = gridItem.querySelector('a');
    window.location.href = link.href;
  }, 500);
}

var gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(function (item) {
  item.addEventListener('click', onCardClick);
});




