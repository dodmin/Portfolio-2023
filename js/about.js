// Dropdown - hamburger menu
function toggleMenu() {
  const menuIcon = document.querySelector('.menu-icon');
  menuIcon.classList.toggle('menu-open');
  $(".dropdown-menu").toggleClass("active");
}

const menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('touchstart', toggleMenu);



function activeUrl() {
  var current = location.pathname;
  var page = current.split("/").pop();
  console.log(page);
  $('.main-nav p a').each(function(){
      var $this = $(this);
      // if the current path is like this link, make it active
      console.log($this.attr('href'));
      if($this.attr('href').indexOf(page) !== -1){
          $this.addClass('active');
      }
  })
}
activeUrl();