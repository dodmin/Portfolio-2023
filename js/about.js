$( document ).ready(function() {
    $(document).ready(function() {
        $(".icon-nav").on("click", 'img', function() {
          $(".dropdown-menu").toggleClass("active");
        });
      });

$(".icon-nav").on("click touchstart",'img', function() {
    $(".dropdown-menu").toggleClass("active");
  });

});