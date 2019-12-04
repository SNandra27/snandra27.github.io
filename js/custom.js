$(document).ready(function () {

  $("#header").load("/header.html");
  $("#footer").load("/footer.html");

  $(".card").hover(
    function () {
      $(this).addClass('shadow raised').css('cursor', 'pointer');
    }, function () {
      $(this).removeClass('shadow raised');
    }
  );

  document.addEventListener("DOMContentLoaded", function(event) { 
    var scrollpos = localStorage.getItem('scrollpos');
    if (scrollpos) window.scrollTo(0, scrollpos);
  });

  window.onbeforeunload = function(e) {
      localStorage.setItem('scrollpos', window.scrollY);
  };

  // Once everything is loaded, show the page.
  $("html").show();

});
