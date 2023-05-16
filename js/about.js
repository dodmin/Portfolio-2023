// Dropdown - hamburger menu
function toggleMenu() {
  const menuIcon = document.querySelector('.menu-icon');
  menuIcon.classList.toggle('menu-open');
  $(".dropdown-menu").toggleClass("active");
}

const menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('touchstart', toggleMenu);



