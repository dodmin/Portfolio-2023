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





function handleScroll() {
  var card1 = document.getElementById('card1');
  var card2 = document.getElementById('card2');

  if (isElementInViewport(card1)) {
    card1.classList.add('active');
    card1.style.backgroundColor = "#F9D181";
  } else {
    card1.classList.remove('active');
    card1.style.backgroundColor = "";
  }

  if (isElementInViewport(card2)) {
    card2.classList.add('active');
    card2.style.backgroundColor = "#F9D181";
  } else {
    card2.classList.remove('active');
    card2.style.backgroundColor = "";
  }
}

// Check if the device is mobile or tablet
function isMobileOrTablet() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Check if an element is currently in the viewport
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Apply onScroll effect only on mobile and tablet devices
if (isMobileOrTablet()) {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('touchstart', handleScroll);
  window.addEventListener('touchend', handleScroll);
}